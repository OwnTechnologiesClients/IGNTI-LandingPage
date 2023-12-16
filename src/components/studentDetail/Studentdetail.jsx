import React, { useState } from "react";
import "./studentdetail.css";


const studentdetail = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  
  return (
    <div className="student-section-1">
      <div className="student-head">
        <h2>Student Details</h2>
      </div>
      <div className="student-container">
        <div className="student-form">
          <input type="text" className="form-control-1" placeholder="Name" />
          <input
            type="text"
            className="form-control-1"
            placeholder="Father's Name"
          />
          <input
            type="text"
            className="form-control-1"
            placeholder="Mothers's Name"
          />

          <div className="date-course">
            <input
              type="date"
              className="form-control-1 custom-date-input"
              placeholder="Date Of Birth"
            />

            <div className="add-course-dropdowns">
                <select
                  name="category-list"
                  id="category-listss"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option disabled value="">
                    Select Course
                  </option>
                  {courses.map((course, index) => {
                    return <option value={course}>{course}</option>;
                  })}
                </select>
              </div>
          </div>

          <input
            type="number"
            className="form-control-1"
            placeholder="Contact Number"
          />
          <input
            type="email"
            className="form-control-1"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="form-control-1"
            placeholder=" Address"
          />

          <div className="date-course">
            <input type="text" className="form-control-1" placeholder="State" />

            <input
              type="number"
              className="form-control-1"
              placeholder="Enter Pincode"
            />
          </div>

          <input
            type="file"
            className="form-control-1"
            placeholder="Upload Image"
            accept="image/*"
          />
        </div>
      </div>

      <div className="buttons-submitt">
      <button className="btns">Submit</button>
      </div>
    </div>
  );
};

export default studentdetail;
