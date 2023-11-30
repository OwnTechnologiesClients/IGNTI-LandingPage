import React, { useState, useEffect } from "react";
import "./form.css";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [course, setCourse] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const delay = 1500; 
    const timer = setTimeout(() => {
      setIsFormVisible(true);
    }, delay);

    return () => clearTimeout(timer); 

  }, []); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Contact Number:", contactNo);
    console.log("Course:", course);

    // You can add your form submission logic here

    // Clear form fields
    setName("");
    setEmail("");
    setContactNo("");
    setCourse("");

    // Close the form
    setIsFormVisible(false);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="enquiry-form">
          <span onClick={handleCloseForm} className="close-button">
            <span
              role="img"
              aria-label="cross"
              style={{
                fontSize: "24px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "end",
                color: "#e5e5e9",
              }}
            >
              &#10006;
            </span>
          </span>
          <h1>Get Enquiry</h1>
          <label>
            Name:
            <input
              className="inputs"
              style={{ width: "25.7vw", borderRadius: "0" }}
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              className="inputs"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <br />
          <label>
            Contact Number:
            <input
              className="inputs"
              type="tel"
              value={contactNo}
              onChange={handleContactNoChange}
              required
            />
          </label>
          <br />
          <label>
            Course:
            <input
              style={{ width: "25.7vw", borderRadius: "0" }}
              className="inputs"
              type="text"
              value={course}
              onChange={handleCourseChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default EnquiryForm;