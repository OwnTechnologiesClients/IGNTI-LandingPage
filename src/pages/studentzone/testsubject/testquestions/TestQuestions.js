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
  // const [selectedOption, setSelectedOption] = useState();
  const [selectedOption, setSelectedOption] = useState([]);
  const [questions, setQuestions] = useState([]);

  // function onValueChange(event) {
  //   // Updating the state with the selected radio button's value
  //   setSelectedOption(event.target.value);
  // }

  function onValueChange(event, questionIndex, optionIndex) {
    const updatedSelectedOptions = [...selectedOption];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOption(updatedSelectedOptions);
  }

  // // Function to handle the form submission
  // function formSubmit(event) {
  //   // Preventing the default form submission behaviour
  //   event.preventDefault();

  //   // Logging the selected option
  //   console.log(selectedOption);

  //   // Alerting the user with the selected option
  //   alert("Your gender is " + selectedOption);
  // }

  const navigateToContacts = () => {
    navigate("/test-subjects");
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
        setSelectedOption(new Array(response.data.data.length).fill(null));
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
    localStorage.setItem("selectedOption", JSON.stringify(selectedOption));
  }, [selectedOption]);

  useEffect(() => {
    const savedSelectedOption = JSON.parse(localStorage.getItem("selectedOption"));
    if (savedSelectedOption) {
      setSelectedOption(savedSelectedOption);
    }
    getAllQuestions();
  }, []);

  return (
    <div className="test-subject-section">
      <div className="test-subject-parent">
        <div className="test-subject-square">
          <p>Diploma in Fire and Safety Management</p>
        </div>
        <div className="question-time-profile">
          <p>Question {questions.length}</p>
          <p>60 mins</p>
        </div>
      </div>

      <div className="quesion-section">
        <div className="quesions-numbers">
          {questions.map((q, qIndex) => {
            return (
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
          {questions.map((question, questionIndex) => {
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
                              selectedOption[questionIndex] === optionIndex+1
                            }
                            onChange={(event) =>
                              onValueChange(event, questionIndex, optionIndex+1)
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

          <div className="course-button-parent">
            <button class="button" onClick={navigateToContacts}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestQuestions;
