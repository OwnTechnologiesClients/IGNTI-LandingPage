import React, { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import hamburger from "../../assets/icons/hamburger.png";
import "./navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleTabClick = (path) => {
    setActiveTab(path);
    setMenuOpen(false);

    // Optionally, you can scroll to the top when a tab is clicked
    window.scrollTo(0, 0);
  };

  return (
    <div className={`nav-bar${menuOpen ? " menu-open" : ""}`}>
 

      <div className="menu-icon" onClick={toggleMenu}>
        <img src={hamburger} alt="" />
      </div>

      <div className="tabs">
        <Link to="/home" onClick={() => handleTabClick("/home")}>
          <div
            className={`menu-items${activeTab === "/home" ? " active" : ""}`}
          >
            Home
          </div>
        </Link>
        <Link to="/courses" onClick={() => handleTabClick("/courses")}>
          <div
            className={`menu-items${activeTab === "/courses" ? " active" : ""}`}
          >
            Courses
          </div>
        </Link>
        <Link to="/franchise" onClick={() => handleTabClick("/franchise")}>
          <div
            className={`menu-items${
              activeTab === "/franchise" ? " active" : ""
            }`}
          >
            Franchise
          </div>
        </Link>
        <Link to="/contactus" onClick={() => handleTabClick("/contactus")}>
          <div
            className={`menu-items${
              activeTab === "/contactus" ? " active" : ""
            }`}
          >
            Contact Us
          </div>
        </Link>
        <Link to="/aboutus" onClick={() => handleTabClick("/aboutus")}>
          <div
            className={`menu-items${activeTab === "/aboutus" ? " active" : ""}`}
          >
            About Us
          </div>
        </Link>
        <Link to="/gallery" onClick={() => handleTabClick("/gallery")}>
          <div
            className={`menu-items${activeTab === "/gallery" ? " active" : ""}`}
          >
            Gallery
          </div>
        </Link>

        <Link to="/register" onClick={() => handleTabClick("/register")}>
          <div
            className={`menu-items${
              activeTab === "/register" ? " active" : ""
            }`}
          >
            Register Tab
          </div>
        </Link>

        <div className="dropdown">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            Student Zone ↓
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <Link to="/select-course">For Exam</Link>
              <Link to="/enrollment-number">Check Result</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


{/* <>
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
</> */}