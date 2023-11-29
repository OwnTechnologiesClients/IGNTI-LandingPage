import React from "react";
import "./tabs.css";

const Tabs = () => {
  const tabNames = [
    "About Us",
    "Contact Us",
    "Courses",
    "Admission Form",
    "Enquiry Form",
    "Gallery",
    "Result",
  ];

  return (
    <div className="tabs-container">
      <div className="tab-head">
        {tabNames.map((tabName, index) => (
          <p className="tab" key={index}>{tabName}</p>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
