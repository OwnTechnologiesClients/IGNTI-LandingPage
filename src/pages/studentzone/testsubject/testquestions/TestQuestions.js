import './TestQuestions.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"



function TestQuestions() {
  const [selectedOption, setSelectedOption] = useState("Male")

  // Function to handle the change in radio button selection
  function onValueChange(event) {
    // Updating the state with the selected radio button's value
    setSelectedOption(event.target.value)
  }


  // Function to handle the form submission
  function formSubmit(event) {
    // Preventing the default form submission behaviour
    event.preventDefault();

    // Logging the selected option
    console.log(selectedOption)

    // Alerting the user with the selected option
    alert("Your gender is " + selectedOption)



  }
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/test-subjects');
  };
  return (
    <div className='test-subject-section'>
      <div className='test-subject-parent'>
        <div className='test-subject-square'>
          <p>Diploma in Fire and Safety Management</p>
        </div>
        <div className='question-time-profile'>
          <p>Question 200</p>
          <p>60 mins</p>
        </div>
      </div>

      <div className='quesion-section'>
        <div className='quesions-numbers'>
          <p>All</p>
          <p>1</p>
          <p>2</p>

        </div>

        <div className='mutiple-choice-quesions'>
          <p>1. Question #1</p>
          <div className='radio-button-form'>
            <label >
              <input
                type="radio"
                value="Male"
                // Checking this radio button if the selected option is "Male"
                checked={selectedOption === "Male"}
                onChange={onValueChange} />
              <span>Answer Choice #1</span>
            </label>
            <br />

            {/* Radio button for "Female" */}
            <label>
              <input
                type="radio"
                value="Female"
                // Checking this radio button if the selected option is "Female"
                checked={selectedOption === "Female"}
                onChange={onValueChange} />
              <span>Answer Choice #2</span>
            </label>
            <br />

            {/* Radio button for "Other" */}
            <label>
              <input
                type="radio"
                value="Other"
                // Checking this radio button if the selected option is "Other"
                checked={selectedOption === "Other"}
                onChange={onValueChange} />
              <span>Answer Choice #3</span>
            </label>
            <br />



            <label>
              <input
                type="radio"
                value="Other"
                // Checking this radio button if the selected option is "Other"
                checked={selectedOption === "Other"}
                onChange={onValueChange} />
              <span>Answer Choice #4</span>
            </label>

          </div>

          <div className='course-button-parent'>
            <button class="button" onClick={navigateToContacts}>Continue</button>
          </div>

        </div>
      </div>
    </div>


  )
}

export default TestQuestions