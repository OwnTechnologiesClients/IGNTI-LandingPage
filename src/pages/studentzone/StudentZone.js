import React from "react";
import Banner from "../../components/banner/Banner";
import Goverment from "../../components/goverment/Goverment";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import "./StudentZone.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Herosection from "../../components/herosection/Herosection";
import Footers from "../../components/footers/Footers";
import Tabs from "../../components/tabs/Tabs";

const StudentZone = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate("/select-course");
  };

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />

        <div className="student-section1">
          <div className="student-square1">
            <div className="square-header1">
              <h2>Login</h2>
            </div>
            <div className="student-card-parent1">
              {/* <h2>BECOME A MEMBER</h2> */}
              <div className="userid-section1">
                <p>User ID:</p>

                {/* ------------ User Id Input textfield -------------------- */}
                <input
                  style={{ width: "22vw" }}
                  type="text"
                  className="form-controls"
                  name="title"
                  value={userId}
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                  placeholder="Enter User ID"
                />
              </div>

              <div className="userid-section1">
                <p>Password:</p>

                {/* ------------ Password Input textfield -------------------- */}
                <input
                  style={{ width: "20vw" }}
                  type="text"
                  className="form-controls"
                  name="title"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div>
                <div className="student1-button-parent1">
                  <button class="button" onClick={navigateToContacts}>
                    {" "}
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


      <Footers />
    </div>
  );
};

export default StudentZone;
