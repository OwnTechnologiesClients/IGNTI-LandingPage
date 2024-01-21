import React from "react";
import "./Item.css";

const Item = ({ semesterNumber, subjects }) => (
  <div className="parent-item">
    <div className="item-container">
      <div className="item-label">Semester - {semesterNumber}</div>
      {subjects.map((subject, index) => {
        return (
          <div className="item-labels">
            {" "}
            {index + 1}. {subject.subjectName}
          </div>
        );
      })}
    </div>
  </div>
);

export default Item;
