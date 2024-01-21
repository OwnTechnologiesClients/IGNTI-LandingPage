import "./TestQuestions.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SetLoading } from "../../../../redux/loaderSlice";
import { useDispatch } from "react-redux";
import { message } from "antd";
import axios from "axios";

function TestQuestions() {
  const { courseName, semesterNumber, subjectName, enrollment } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState([]);
  const [questions, setQuestions] = useState([]);

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

  function onValueChange(event, questionIndex, optionIndex) {
    const updatedSelectedOptions = [...selectedOption];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOption(updatedSelectedOptions);
  }

  const navigateToContacts = async () => {
    let resultSet = [];
    for (let i = 0; i < questions.length; i++) {
      let resultJson = {
        question: questions[i].questionText,
        selectedOption: selectedOption[i],
      };
      if (resultJson.selectedOption == null) {
        resultJson.selectedOption = 0;
      }
      resultSet.push(resultJson);
    }
    // console.log(resultSet)
    toggleFullScreen();

    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "https://backend.ignti.com/api/students/get-student-id-enroll",
        data: {
          enroll: enrollment,
        },
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        dispatch(SetLoading(true));
        const result = await axios({
          method: "post",
          url: "https://backend.ignti.com/api/resultSets/add-result-set",
          data: {
            courseName: courseName,
            semesterNumber: semesterNumber,
            subjectName: subjectName,
            resultSet: resultSet,
            studentId: response.data.data._id,
          },
        });
        dispatch(SetLoading(false));
        if (result.data.success) {
          navigate(
            `/test-subjects/${courseName}/${semesterNumber}/${enrollment}`
          );
        } else {
          navigate(
            `/test-subjects/${courseName}/${semesterNumber}/${enrollment}`
          );
          throw new Error(result.data.message);
        }
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  const getAllQuestions = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios({
        method: "post",
        url: "https://backend.ignti.com/api/examSets/get-exams-set",
        data: {
          courseName: courseName,
          semesterNumber: semesterNumber,
          subjectName: subjectName,
        },
      });
      dispatch(SetLoading(false));
      if (response.data.success) {
        // message.success(response.data.message);
        setQuestions(response.data.data);
        console.log(response.data);
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
    // localStorage.setItem("courseName", subjectName);
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = `${Math.floor(remainingTime / 60)} : ${remainingTime % 60
    } `;

  // const a = Math.floor(remainingTime / 60);
  // const b = remainingTime % 60;

  useEffect(() => {
    if (remainingTime <= 1) {
      if (isFullScreen) {
        toggleFullScreen();
      }
      navigate(`/test-subjects/${courseName}/${semesterNumber}/${enrollment}`);
    }
  }, [remainingTime]);

  useEffect(() => {
    localStorage.setItem("remainingTime", remainingTime);
  }, [remainingTime]);

  useEffect(() => {
    localStorage.setItem("currentTime", Date.now());
  }, [remainingTime]);

  useEffect(() => {
    const savedSelectedOption = JSON.parse(
      localStorage.getItem(`selectedOption${subjectName}`)
    );
    if (savedSelectedOption) {
      setSelectedOption(savedSelectedOption);
    } else {
      setSelectedOption(new Array(questions.length).fill(null));
    }
    getAllQuestions();
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, null, window.location.href);
    };

    // Clean up the event listener when the component unmounts
    return () => {
      window.onpopstate = null;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      `selectedOption${subjectName}`,
      JSON.stringify(selectedOption)
    );
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

  useEffect(() => {
    const specificElement = document.getElementById("google_translate_element");
    if (specificElement) {
      const selectElement = specificElement.querySelector("select");
      console.log(selectElement);
      const reloadStatus = localStorage.getItem("reloadStatus");

      if (!selectElement && !reloadStatus) {
        window.location.reload();
        localStorage.setItem("reloadStatus", "reloaded");
      }
    }
  }, []);

  return (
    <div className="test-subject-section">
      <div className="test-subject-parent">
        <div className="test-subject-square">
          <p>{courseName}</p>
        </div>
        <div className="question-time-profile">
          <p>Question {questions.length}</p>
          <p> <span>Time left:</span>   {formattedTime}</p>
        </div>
      </div>

      <div id="google_translate_element"></div>
      <div className="parent-div">
        <div className="quesion-section">
          <div className="quesions-numbers">
            <h1>Question Status </h1>
            <div className="Grid-qn-numbers">
              {questions.map((q, qIndex) => {
                return selectedOption[qIndex] > 0 ? (
                  <a
                    className="color-green qn-number-box"
                    href={`#question${qIndex + 1}`}
                    key={qIndex + 1}
                    onClick={() => scrollToQuestion(qIndex + 1)}
                  >
                    {qIndex + 1}
                  </a>
                ) : (
                  <a
                    className="qn-number-box"
                    href={`#question${qIndex + 1}`}
                    key={qIndex + 1}
                    onClick={() => scrollToQuestion(qIndex + 1)}
                  >
                    {qIndex + 1}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mutiple-choice-quesions">
            <div className="button-test-parent">
              {!isFullScreen && (
                <div className="course-button-parent-1">
                  <button class="button-1" onClick={toggleFullScreen}>
                    Your test start! Click here
                  </button>
                </div>
              )}

              {!isFullScreen && (
                <div className="course-button-parent-1">
                  <button
                    className="button-1"
                    onClick={() => {
                      navigate(
                        `/test-subjects/${courseName}/${semesterNumber}/${enrollment}`
                      );
                    }}
                  >
                    Back
                  </button>
                </div>
              )}
            </div>

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
                            <label className="label">
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
                              {console.log(option.optionText)}
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

            <div className="button-test-parent-2">
              {isFullScreen && (
                <div className="course-button-parent-1">
                  <button class="button-2" onClick={navigateToContacts}>
                    Submit
                  </button>
                </div>
              )}

              {isFullScreen && (
                <div className="course-button-parent">
                  <button
                    class="button-2"
                    onClick={() => {
                      navigate(
                        `/test-subjects/${courseName}/${semesterNumber}/${enrollment}`
                      );
                      toggleFullScreen();
                    }}
                  >
                    Back
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestQuestions;
