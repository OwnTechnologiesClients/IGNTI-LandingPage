import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SetLoading } from "../../../redux/loaderSlice";
import { useDispatch } from "react-redux";
import { message } from "antd";
import axios from "axios";

import "./TestSubjects.css";

function TestSubjects() {
  const { courseName, semesterNumber } = useParams();
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

  const navigateToQuestions = (name) => {
    if (localStorage.getItem("courseName") && localStorage.getItem("courseName") !== name) {
      message.error(`First submit the ${localStorage.getItem("courseName")} subject exam!`);
    } else {
      dispatch(SetLoading(true));
      setTimeout(() => {
        dispatch(SetLoading(false));
        navigate(
          `/test-subjects/quesions/${courseName}/${semesterNumber}/${name}`
        );
      }, 600);
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
        setSubjects(response.data.data.subjects);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

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

  return (
    <div className="test-subject-section">
      <div className="test-subject-parent">
        <div className="test-subject-square">
          <p>{courseName}</p>
        </div>
        <div className="question-time-profile">
          <p>Question 200</p>
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
            <h3>{subject.subjectName}</h3>

            <p>Multiple Choice</p>

            <button
              class="button"
              onClick={() => navigateToQuestions(subject.subjectName)}
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
