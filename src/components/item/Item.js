import React from "react";
import "./Item.css";

// React Component to display individual item
const Item = ({ semesterNumber, subjects }) => (
  <div className="item-container">
    {/* <div className="item-heading">
      {name}
    </div> */}
    {/* <div>
      {category}
    </div> */}
    <div className="item-label">Semester - {semesterNumber}</div>
    {subjects.map((subject, index) => {
      return <div className="item-label">  {index+1}.  {subject.subjectName}</div>;
    })}
  </div>
);

export default Item;
