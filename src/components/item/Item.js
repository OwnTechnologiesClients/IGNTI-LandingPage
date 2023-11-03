import React from "react";
import "./Item.css";

// React Component to display individual item
const Item = ({ name, category, semester }) => (
  <div className="item-container">
    <div className="item-heading">
      {name}
    </div>
    {/* <div>
      {category}
    </div> */}
    <div className="item-label">
      {semester}
    </div>
  </div>
);

export default Item;