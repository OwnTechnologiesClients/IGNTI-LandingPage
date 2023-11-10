import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SetLoading } from "../../../redux/loaderSlice";
import { useDispatch } from "react-redux";
import { message } from "antd";
import axios from "axios";

import "./TestSubjects.css";

function TestSubjects() {
  const { courseName, semesterNumber, enrollment } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  const [remainingTime, setRemainingTime] = useState(() => {
    const storedTime1 = parseInt(localStorage.getItem("currentTime"));
    const elapsedTime = (Date.now() - storedTime1) / 1000;
    const integerNumber = parseInt(elapsedTime);
    const remainingTime = localStorage.getItem("remainingTime");
    if (isNaN(remainingTime - integerNumber)) {
      return 3600;
    }
    localStorage.setItem("remainingTime", remainingTime - integerNumber);
    const storedTime = localStorage.getItem("remainingTime");
    return storedTime ? parseInt(storedTime, 10) : 3600;
  });

  const navigateToQuestions = async (name) => {
    // if (localStorage.getItem("courseName") && localStorage.getItem("courseName") !== name) {
    //   message.error(`First submit the ${localStorage.getItem("courseName")} subject exam!`);
    // } else {

    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/students/get-student-id-enroll",
        data: {
          enroll: enrollment,
        },
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        dispatch(SetLoading(true));
        const result = await axios({
          method: "post",
          url: "http://localhost:9000/api/resultSets/get-result-set",
          data: {
            courseName: courseName,
            semesterNumber: semesterNumber,
            subjectName: name,
          },
        });
        dispatch(SetLoading(false));
        if (result.data.success) {
          let find = false;
          result.data.data.map((ids) => {
            if (ids === response.data.data._id) {
              find = true;
              message.error("you already submit the test!");
            }
          });

          if (!find) {
            dispatch(SetLoading(true));
            setTimeout(() => {
              dispatch(SetLoading(false));
              navigate(
                `/test-subjects/quesions/${courseName}/${semesterNumber}/${name}/${enrollment}`
              );
            }, 600);
          }
        } else {
          // console.log("hello");
          dispatch(SetLoading(true));
          setTimeout(() => {
            dispatch(SetLoading(false));
            navigate(
              `/test-subjects/quesions/${courseName}/${semesterNumber}/${name}/${enrollment}`
            );
          }, 600);
          // throw new Error(result.data.message);
        }
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  const getAllCoursesName = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/subjects/get-subject",
        data: {
          courseName: courseName,
          semesterNumber: semesterNumber,
        },
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        message.success(response.data.message);
        // setSubjects(response.data.data.subjects);
        setSubjects(response.data.data1);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (remainingTime <= 0) {
      subjects.map((subject) => {
        localStorage.removeItem(
          `selectedOption${subject.subjectName.subjectName}`
        );
      });
      navigate("/select-course");
    }
  }, [remainingTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("remainingTime", remainingTime);
  }, [remainingTime]);

  useEffect(() => {
    localStorage.setItem("currentTime", Date.now());
  }, [remainingTime]);

  useEffect(() => {
    getAllCoursesName();
  }, []);

  const formattedTime = `${Math.floor(remainingTime / 60)} mins ${
    remainingTime % 60
  } secs`;

  let total = 0;
  subjects.map((subject) => {
    total = total + +subject.questionLength;
  });

  return (
    <div className="test-subject-section">
      <div className="test-subject-parent">
        <div className="test-subject-square">
          <p>{courseName}</p>
        </div>
        <div className="question-time-profile">
          <p>Question {total}</p>
          <p>{formattedTime}</p>
        </div>
      </div>

      <div className="subject-section-label">
        <p>SUBJECT</p>
        <p>TYPE</p>
        <p>ACTION</p>
      </div>

      {subjects.map((subject) => {
        return (
          <div className="subject-section">
            <h3>{subject.subjectName.subjectName}</h3>

            <p>Multiple Choice</p>

            <h3>Question {subject.questionLength}</h3>

            <button
              class="button"
              onClick={() =>
                navigateToQuestions(subject.subjectName.subjectName)
              }
            >
              Solve
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TestSubjects;
