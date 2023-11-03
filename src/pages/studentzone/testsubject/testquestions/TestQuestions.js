import "./TestQuestions.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SetLoading } from "../../../../redux/loaderSlice";
import { useDispatch } from "react-redux";
import { message } from "antd";
import axios from "axios";

function TestQuestions() {
  const { courseName, semesterNumber, subjectName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [remainingTime, setRemainingTime] = useState(() => {
    const storedTime1 = parseInt(localStorage.getItem("currentTime"));
    const elapsedTime = (Date.now() - storedTime1) / 1000;
    const integerNumber = parseInt(elapsedTime);
    const remainingTime = localStorage.getItem("remainingTime");
    // console.log(remainingTime-integerNumber)
    if (isNaN(remainingTime - integerNumber)) {
      return 3600;
    }
    localStorage.setItem("remainingTime", remainingTime - integerNumber);
    const storedTime = localStorage.getItem("remainingTime");
    return storedTime ? parseInt(storedTime, 10) : 3600;
  });

  function onValueChange(event, questionIndex, optionIndex) {
    const updatedSelectedOptions = [...selectedOption];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOption(updatedSelectedOptions);
  }

  const navigateToContacts = () => {
    let resultSet = [];
    for(let i=0; i<questions.length; i++) {
      let resultJson = {
        question: questions[i].questionText,
        selectedOption: selectedOption[i]
      }
      if(resultJson.selectedOption == null) {
        resultJson.selectedOption = 0
      }
      resultSet.push(resultJson)
    }
    // console.log(resultSet)
    toggleFullScreen();
    navigate(`/test-subjects/${courseName}/${semesterNumber}`);
  };

  const getAllQuestions = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/examSets/get-exams-set",
        data: {
          courseName: courseName,
          semesterNumber: semesterNumber,
          subjectName: subjectName,
        },
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        message.success(response.data.message);
        setQuestions(response.data.data);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  function scrollToQuestion(questionIndex) {
    const element = document.getElementById(`question${questionIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    localStorage.setItem("courseName", subjectName);
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = `${Math.floor(remainingTime / 60)} mins ${
    remainingTime % 60
  } secs`;

  useEffect(() => {
    if (remainingTime === 0) {
      navigate("/test-subjects");
    }
  }, [remainingTime]);

  useEffect(() => {
    localStorage.setItem("remainingTime", remainingTime);
  }, [remainingTime]);

  useEffect(() => {
    localStorage.setItem("currentTime", Date.now());

    // const storedTime = parseInt(localStorage.getItem("currentTime"));
    // // console.log(storedTime)
    // if (!isNaN(storedTime)) {
    //   const elapsedTime = (Date.now() - storedTime) / 1000;
    //   const newRemainingTime = remainingTime - elapsedTime;
    //   if (newRemainingTime > 0) {
    //     // setRemainingTime(newRemainingTime);
    //     console.log(remainingTime)
    //     console.log(elapsedTime);
    //   } else {
    //     // navigate("/test-subjects");
    //     console.log("hello")
    //   }
    // }
  }, [remainingTime]);

  useEffect(() => {
    const savedSelectedOption = JSON.parse(
      localStorage.getItem("selectedOption")
    );
    if (savedSelectedOption) {
      setSelectedOption(savedSelectedOption);
    } else {
      setSelectedOption(new Array(questions.length).fill(null));
    }
    getAllQuestions();
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedOption", JSON.stringify(selectedOption));
  }, [selectedOption]);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full-screen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    // toggleFullScreen();

    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullScreenChange
      );
    };
  }, []);

  return (
    <div className="test-subject-section">
      <div className="test-subject-parent">
        <div className="test-subject-square">
          <p>{courseName}</p>
        </div>
        <div className="question-time-profile">
          <p>Question {questions.length}</p>
          <p>{formattedTime}</p>
        </div>
      </div>

      <div className="quesion-section">
        <div className="quesions-numbers">
          {questions.map((q, qIndex) => {
            return selectedOption[qIndex] > 0 ? (
              <a
                className="color-green"
                href={`#question${qIndex + 1}`}
                key={qIndex + 1}
                onClick={() => scrollToQuestion(qIndex + 1)}
              >
                {qIndex + 1}
              </a>
            ) : (
              <a
                href={`#question${qIndex + 1}`}
                key={qIndex + 1}
                onClick={() => scrollToQuestion(qIndex + 1)}
              >
                {qIndex + 1}
              </a>
            );
          })}
        </div>

        <div className="mutiple-choice-quesions">
          {isFullScreen &&
            questions.map((question, questionIndex) => {
              return (
                <div
                  className="question-box"
                  id={`question${questionIndex + 1}`}
                  key={questionIndex + 1}
                >
                  <p>
                    {questionIndex + 1}. {question.questionText}
                  </p>
                  <div className="radio-button-form">
                    {question.options.map((option, optionIndex) => {
                      return (
                        <div>
                          <label>
                            <input
                              type="radio"
                              value={optionIndex}
                              checked={
                                selectedOption[questionIndex] ===
                                optionIndex + 1
                              }
                              onChange={(event) =>
                                onValueChange(
                                  event,
                                  questionIndex,
                                  optionIndex + 1
                                )
                              }
                            />
                            <span>{option.optionText}</span>
                          </label>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

          {!isFullScreen && (
            <div className="course-button-parent">
              <button class="button" onClick={toggleFullScreen}>
                Your test start! Click here
              </button>
            </div>
          )}

          {isFullScreen && (
            <div className="course-button-parent">
              <button class="button" onClick={navigateToContacts}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestQuestions;
