import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Rigstersidebanner from "../../components/rigstersidebanner/Rigstersidebanner";
import Tabs from "../../components/tabs/Tabs";
import Footers from "../../components/footers/Footers";
import Studentdetail from "../../components/studentDetail/Studentdetail"
import "./rigstertab.css";
import { useState } from "react";
const Rigstertab = () => {
  const [isPaused, setPaused] = useState(false);

  const handleMouseOver = () => {
    setPaused(true);
  };

  const handleMouseOut = () => {
    setPaused(false);
  };
  return (
    <div>
      <Header />
      <Navbar />

      <div
        style={{ marginTop: "1.5vw" }}
        className="banner-text-sectiont"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={`marqueet ${isPaused ? "pausedt" : ""}`}>
          INDIRA GANDHI NATIONAL TRAINING INSTITUTE IS AN AUTONOMOUS INSTITUTION
          REGISTERED UNDER PUBLIC TRUST ACT 1982 GOVT. OF INDIA
        </div>
      </div>

      <div className="rigster-container">
        <div className="rigster-left">
          <Tabs />
          <Rigstersidebanner />
        </div>
        <div className="rigster-right">
          <Studentdetail />
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Rigstertab;
