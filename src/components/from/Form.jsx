import React, { useState } from "react";
import "./form.css";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [course, setCourse] = useState("");

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

    setName("");
    setEmail("");
    setContactNo("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <br />
      <label>
        Email:
        <input
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
          type="text"
          value={course}
          onChange={handleCourseChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnquiryForm;
