import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        {/* --------------- Menu Links ---------------------- */}
        {/* <div className='menu-link'>
                    <ul>
                        <li>
                            <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/courses'>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to='/franchise'>Franchise</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactus'>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/aboutus'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/gallery'>Gallery</NavLink>
                        </li>

                        <li>
                            <NavLink to='/student'>Student Zone</NavLink>
                        </li>


                    </ul>
                </div> */}

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
                <NavLink to="/rigstertab">Rigster Tab</NavLink>
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

          {/* <div className='social-media-parent'>
                        <div className='social-media-circle'>
                            <div className='social-media-img-size'>
                                <img src="/img/facebook.png" />
                            </div>

                        </div>
                        <div className='social-media-circle'>
                            <div className='social-media-img-size'>
                                <img src="/img/instagram.png" />
                            </div>
                        </div>
                        <div className='social-media-circle'>
                            <div className='social-media-img-size'>
                                <img src="/img/linkedin.png" />
                            </div>
                        </div>
                    </div>*/}
        </div>

        {/* --------------- Social media section ---------------------- */}
      </nav>
    </>
  );
};

export default Navbar;
