import React from "react";
import "./Goverment.css";

const Goverment = () => {
  const govData = [
    { title: "ADCA", duration: "12 MONTHS" },
    { title: "ADCA", duration: "12 MONTHS" },
    { title: "ADCA", duration: "12 MONTHS" },
    { title: "AD0B", duration: "12 MONTHS" },
    { title: "ADCA", duration: "12 MONTHS" },
    { title: "SHORTHAND", duration: "12 MONTHS" },
    { title: "CCC", duration: "12 MONTHS" },
    { title: "TYPING", duration: "12 MONTHS" },
  ];

  return (
    <div className="gov-container">
      <div className="gov-border">
        {govData.map((govItem, index) => (
          <div className="gov-card" key={index}>
            <div className="head-gov">
              <p>{govItem.title}</p>
            </div>
            <div className="gov-month">
              <p>{govItem.duration}</p>
            </div>
            <div className="gov-read-more">
              <a href="#">Read More</a>
            </div>
          </div>
        ))}

        <div className="gov-other-course">
          <a href="#">For Other Courses</a>
        </div>
      </div>
    </div>
  );
};

export default Goverment;
