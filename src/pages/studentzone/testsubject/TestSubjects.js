import React from 'react'
import './TestSubjects.css';


const TestSubjects = () => {
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

      <div className='subject-section-label'>

        <p>SUBJECT</p>
        <p>TYPE</p>
        <p>ACTION</p>

      </div>

      <div className='subject-section'>

        <h3>1. Fundamentals of Computer</h3>

        <p>Multiple Choice</p>

        <button class="button">Solve</button>


      </div>
    </div>
  )
}

export default TestSubjects