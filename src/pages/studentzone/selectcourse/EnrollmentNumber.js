import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EnrollmentNumber.css";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../../redux/loaderSlice";
import axios from "axios";
import { message } from "antd";
import Header from "../../../components/header/Header";
import Navbar from "../../../components/navbar/Navbar";
import Tabs from "../../../components/tabs/Tabs";
import Herosection from "../../../components/herosection/Herosection";
import Goverment from "../../../components/goverment/Goverment";
import Footers from "../../../components/footers/Footers";

function SelectCourse() {
  const dispatch = useDispatch();
  const handleReset = () => {
    setNum("");
    setEnrollment("");
    setPass("");
  };
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
    if (enrollment === "") {
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
        // console.log(response.data)
        dispatch(SetLoading(false));
        if (response.data.success) {
          dispatch(SetLoading(true));
          const result = await axios({
            method: "post",
            url: "http://localhost:9000/api/resultSets/get-result-set-id",
            data: {
              studentId: response.data.data[0]._id,
              semesterNumber: num,
              courseName: selectedCategory,
            },
          });
          //   console.log(result)
          dispatch(SetLoading(false));
          if (result.data.success) {
            dispatch(SetLoading(true));
            setTimeout(() => {
              dispatch(SetLoading(false));
              navigate(`/result/${selectedCategory}/${num}/${enrollment}`);
            }, 600);
          } else {
            throw new Error("First give the test in this semester!");
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
        // message.success(response.data.message);
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
    getAllCoursesName();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />

      <div className="parent-app">
        <Tabs />
        <div className="app">
          <div className="student-section">
            <div className="student-square">
              <div className="square-header-11">
                <h2>Check Results</h2>
              </div>
              <div className="student-card-parent">
                <div className="userid-section">
                  <p>Select Course :</p>
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
                  <p>Enter Enrollment No.</p>

                  <div className="dropdown">
                    <input
                      type="number"
                      className="form-con"
                      value={enrollment}
                      placeholder="Please Enter Roll No."
                      onChange={(e) => setEnrollment(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="courses-buttons-parents">
                    <button class="button" onClick={navigateToContacts}>
                      Submit
                    </button>

                    <button className="reset" onClick={handleReset}>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Goverment />
      <Footers />
    </div>
  );
}
export default SelectCourse;
