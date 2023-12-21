import React, { useEffect, useState } from "react";
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
  const handleReset = () => {
    setNum("");
    setEnrollment("");
    setPass("");
  };
  const dispatch = useDispatch();

  const [courses, setCourses] = useState([]);
  const [arr, setArr] = useState([]);
  const [num, setNum] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [pass, setPass] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();

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
            const response1 = await axios({
              method: "post",
              url: "http://localhost:9000/api/subjects/get-subject",
              data: {
                courseName: selectedCategory,
                semesterNumber: num,
              },
            });
            dispatch(SetLoading(false));
            if (response1.data.success) {
              dispatch(SetLoading(true));
              const response2 = await axios({
                method: "post",
                url: "http://localhost:9000/api/students/get-student-id-enroll",
                data: {
                  enroll: enrollment,
                },
              });
              dispatch(SetLoading(false));
              if (response2.data.success) {
                if (response2.data.data.authorized) {
                  const promises = response1.data.data1.map(async (subject) => {
                    dispatch(SetLoading(true));
                    const result1 = await axios({
                      method: "post",
                      url: "http://localhost:9000/api/resultSets/get-result-set",
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
        url: "http://localhost:9000/api/courses/name-Course-all",
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
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
    localStorage.removeItem("remainingTime");
    localStorage.removeItem("currentTime");
    localStorage.clear();
    getAllCoursesName();
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, null, window.location.href);
    };

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
                <h2>Student Login</h2>
              </div>
              <div className="student-card-parents">
                <div className="userid-sections">
                  <div className="semsters">
                    <p>Your Name</p>

                    <div className="dropdowns">
                      <input
                        style={{
                          width: "32vw",
                          height: "2vw",
                          marginLeft: "-1vw",
                        }}
                        type="texts"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="course-semster">
                  <div className="userid-sections">
                    <div className="semsters">
                      <p>Select Course:</p>
                      <div className="dropdowns">
                        <select
                          style={{
                            width: "13vw",
                            height: "2.5vw",
                            marginLeft: "-1vw",
                          }}
                          name="category-lists"
                          id="category-lists"
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                        >
                          {courses.map((course) => {
                            return (
                              <option value={`${course}`}>{course}</option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="userid-sections">
                    <div className="semsters">
                      <p>Select Semester:</p>{" "}
                      <div className="dropdowns">
                        <select
                          style={{
                            width: "13vw",
                            height: "2.5vw",
                            marginLeft: "-1vw",
                          }}
                          name="category-lists"
                          id="category-lists"
                          value={num}
                          onChange={handleSemesterNumber}
                        >
                          {arr.map((item, index) => {
                            return (
                              <option value={`${index + 1}`}>
                                {index + 1}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="userid-sections">
                  <div className="semsters">
                    <p>Enrollment No:</p>

                    <div className="dropdowns">
                      <input
                        style={{
                          width: "32vw",
                          height: "2vw",
                          marginLeft: "-1vw",
                        }}
                        type="numbers"
                        value={enrollment}
                        onChange={(e) => setEnrollment(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="userid-sections">
                  <div className="semsters">
                    <p>Enter Date Of Birth:</p>

                    <div className="dropdowns">
                      <input
                        style={{
                          width: "32vw",
                          height: "2vw",
                          marginLeft: "-1vw",
                          fontSize: "1vw",
                        }}
                        type="date"
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="userid-sections">
                  <div className="semsters">
                    <p>Password:</p>

                    <div className="dropdowns">
                      <input
                        style={{
                          width: "32vw",
                          height: "2vw",
                          marginLeft: "-1vw",
                        }}
                        type="texts"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="course-button-parents-1">
                    <button class="buttons" onClick={navigateToContacts}>
                      Submit
                    </button>

                    <button
                      onClick={handleReset}
                      style={{ backgroundColor: "#dd2b1c" }}
                    >
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
