import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectCourse.css";
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

  let find = 0;

  const navigateToContacts = async () => {
    if (enrollment === "" || pass === "") {
      return message.error("Please fill all details!");
    } else {
      try {
        dispatch(SetLoading(true));
        const response = await axios({
          method: "post",
          url: "https://igti-backend.onrender.com/api/students/verify-student",
          data: {
            courseName: selectedCategory,
            enrollNo: enrollment,
          },
        });
        dispatch(SetLoading(false));
        if (response.data.success) {
          const result = await axios({
            method: "post",
            url: "https://igti-backend.onrender.com/api/courses/verify-password",
            data: {
              courseName: selectedCategory,
              password: pass,
            },
          });
          if (result.data.success) {
            dispatch(SetLoading(true));
            const response1 = await axios({
              method: "post",
              url: "https://igti-backend.onrender.com/api/subjects/get-subject",
              data: {
                courseName: selectedCategory,
                semesterNumber: num,
              },
            });
            dispatch(SetLoading(false));
            if (response1.data.success) {
              // setSubjects(response.data.data1);
              dispatch(SetLoading(true));
              const response2 = await axios({
                method: "post",
                url: "https://igti-backend.onrender.com/api/students/get-student-id-enroll",
                data: {
                  enroll: enrollment,
                },
              });
              dispatch(SetLoading(false));
              if (response2.data.success) {
                // console.log(response2.data.data);
                if (response2.data.data.authorized) {
                  const promises = response1.data.data1.map(async (subject) => {
                    dispatch(SetLoading(true));
                    const result1 = await axios({
                      method: "post",
                      url: "https://igti-backend.onrender.com/api/resultSets/get-result-set",
                      data: {
                        courseName: selectedCategory,
                        semesterNumber: num,
                        subjectName: subject.subjectName.subjectName,
                      },
                    });
                    dispatch(SetLoading(false));
                    if (result1.data.success) {
                      result1.data.data.map((ids) => {
                        if (ids === response2.data.data._id) {
                          find = find + 1;
                        }
                      });
                    }
                  });

                  await Promise.all(promises);

                  if (find !== 0) {
                    message.error("you submit the test already!");
                  } else {
                    dispatch(SetLoading(true));
                    setTimeout(() => {
                      dispatch(SetLoading(false));
                      navigate(
                        `/declaration/${selectedCategory}/${num}/${enrollment}`
                      );
                    }, 600);
                  }
                } else {
                  throw new Error("You are not authorized!");
                }
              }
            } else {
              throw new Error(response.data.message);
            }
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
        url: "https://igti-backend.onrender.com/api/courses/name-Course-all",
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
        url: "https://igti-backend.onrender.com/api/courses/get-course",
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
    localStorage.clear();
    getAllCoursesName();
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, null, window.location.href);
    };

    // Clean up the event listener when the component unmounts
    return () => {
      window.onpopstate = null;
    };
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />
      <div className="parent-app">
        <Tabs />
        <div className="apps">
          <div className="student-sections">
            <div className="student-squares">
              <div className="square-headers">
                <h2>Login</h2>
              </div>
              <div className="student-card-parents">
                <div className="userid-sections">
                  <p>Course:</p>
                  <div className="dropdowns">
                    <select
                      name="category-lists"
                      id="category-lists"
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

                <div className="userid-sections">
                  <p>Semester:</p>

                  <div className="dropdowns">
                    <select
                      name="category-lists"
                      id="category-lists"
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

                <div className="userid-sections">
                  <p>Enrollment No:</p>

                  <div className="dropdowns">
                    <input
                      type="numbers"
                      value={enrollment}
                      onChange={(e) => setEnrollment(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="userid-sections">
                  <p>Exam Password:</p>

                  <div className="dropdowns">
                    <input
                      type="texts"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="course-button-parents">
                    <button class="buttons" onClick={navigateToContacts}>
                      Login
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
