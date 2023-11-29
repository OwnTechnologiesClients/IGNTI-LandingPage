import React from "react";
import "./welcome.css";
const Welcome = () => {
  return (
    <div className="welcome-contianer">
      <div className="welcome-head">
        <h2>WELCOME TO IGNTI</h2>
      </div>
      <div className="welcome-section">
        <p className="p">
          Indira Gandhi National Training Institute has been registered under
          the Public T. R. Act-1882 Gov. of India (Reg. No. ************). A
          Venture of IGNTI Skill Development Pvt. Ltd. IGNIC also ISO 9001:2015.
          The Main function of this trust to provide Higher Technical Education
          in nominal charges for every group of Social of Urban & Rural areas
          all over the India & Get success in computer education which is the
          main dream of Govt. IGNTI have been working in Professional Education,
          Computer education, Software, Hardware & Networking field, Vocational
          Training, Skill Development Programme, Spoken English, and Training
          for Competitive Exam & others Govt. authorized courses. The Aim of
          this Institution is to provide higher education in minimum charges for
          people, students of the society.
        </p>
      </div>

      <div className="read-more">
        <a className="read" href="#">
          Read More....
        </a>
      </div>
    </div>
  );
};

export default Welcome;
