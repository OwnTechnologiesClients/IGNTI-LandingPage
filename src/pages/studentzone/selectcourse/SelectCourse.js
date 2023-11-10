import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectCourse.css";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../../redux/loaderSlice";
import axios from "axios";
import { message } from "antd";

function SelectCourse() {
  const dispatch = useDispatch();

  const [courses, setCourses] = useState([]);
  const [arr, setArr] = useState([]);
  const [num, setNum] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [pass, setPass] = useState("");
  const [sportList, setSportList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  function getFilteredList() {
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  //   var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSemesterNumber(event) {
    setNum(event.target.value);
  }

  const navigate = useNavigate();

  const navigateToContacts = async () => {
    if (enrollment === "" || pass === "") {
      return message.error("Please fill all details!");
    } else {
      try {
        dispatch(SetLoading(true));
        const response = await axios({
          method: "post",
          url: "http://localhost:9000/api/students/verify-student",
          data: {
            courseName: selectedCategory,
            enrollNo: enrollment,
          },
        });
        dispatch(SetLoading(false));
        if (response.data.success) {
          const result = await axios({
            method: "post",
            url: "http://localhost:9000/api/courses/verify-password",
            data: {
              courseName: selectedCategory,
              password: pass,
            },
          });
          if (result.data.success) {
            dispatch(SetLoading(true));
            setTimeout(() => {
              dispatch(SetLoading(false));
              navigate(`/declaration/${selectedCategory}/${num}/${enrollment}`);
            }, 600);
          } else {
            throw new Error(result.data.message);
          }
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        dispatch(SetLoading(false));
        message.error(error.message);
      }
    }
  };

  const getAllCoursesName = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/courses/name-Course-all",
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        // message.success(response.data.message);
        setCourses(response.data.data);
        setSelectedCategory(response.data.data[0]);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  const getSemester = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/courses/get-course",
        data: {
          courseName: selectedCategory,
        },
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        message.success(response.data.message);
        setArr(response.data.data.semesters);
        setNum(response.data.data.semesters[0].semesterNumber);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getSemester();
  }, [selectedCategory]);

  useEffect(() => {
    localStorage.removeItem("remainingTime");
    localStorage.removeItem("currentTime");
    getAllCoursesName();
  }, []);

  return (
    <div>
      <div className="app">
        <div className="student-section">
          <div className="student-square">
            <div className="square-header">
              <h2>Login</h2>
            </div>
            <div className="student-card-parent">
              <div className="userid-section">
                <p>Course</p>
                <div className="dropdown">
                  <select
                    name="category-list"
                    id="category-list"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    {courses.map((course) => {
                      return <option value={`${course}`}>{course}</option>;
                    })}
                  </select>
                </div>

                {/* ------------ User Id Input textfield -------------------- */}
              </div>

              <div className="userid-section">
                <p>Semester</p>

                <div className="dropdown">
                  <select
                    name="category-list"
                    id="category-list"
                    value={num}
                    onChange={handleSemesterNumber}
                  >
                    {arr.map((item, index) => {
                      return (
                        <option value={`${index + 1}`}>{index + 1}</option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="userid-section">
                <p>Enrollment No.</p>

                <div className="dropdown">
                  <input
                    type="number"
                    value={enrollment}
                    onChange={(e) => setEnrollment(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="userid-section">
                <p>Exam Password</p>

                <div className="dropdown">
                  <input
                    type="text"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  ></input>
                </div>
              </div>

              <div>
                <div className="course-button-parent">
                  <button class="button" onClick={navigateToContacts}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectCourse;
