import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="menu-parent">
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/franchise">Franchise</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register Tab</NavLink>
              </li>
              <li>
                <NavLink to="/select-course">Student Zone ↓</NavLink>
                <ul>
                  <li>
                    <NavLink to="/select-course">For Exam</NavLink>
                  </li>
                  <li>
                    <NavLink to="/enrollment-number">Check Result</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
