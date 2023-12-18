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
        <Link to="/form">
          <p>Enquiry Form</p>
        </Link>
        <Link to="/gallery">
          <p >Gallery</p>
        </Link>
        <Link to="/enrollment-number">
          <p>Result</p>
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
