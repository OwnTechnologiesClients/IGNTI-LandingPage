import React from "react";
import "./tabs.css";
import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <div className="tabs-container">
      <div className="tab-head">
        <Link to="/aboutus">
          <p>About Us</p>
        </Link>
        <Link to="/contactus">
          <p>Contact Us</p>
        </Link>
        <Link to="/courses">
          <p>Courses</p>
        </Link>
        <Link to="/contactus">
          <p>Admission Form</p>
        </Link>
        <Link to="/courses">
          <p>Enquiry Form</p>
        </Link>
        <Link>
          <p to="/gallery">Gallery</p>
        </Link>
        <Link to="/select-course">
          <p>Result</p>
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
