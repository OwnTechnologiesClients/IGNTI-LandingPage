import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./Franchise.css";
import Herosection from "../../components/herosection/Herosection";
import { useState } from "react";

const Franchise = () => {
  const [firstname, setFirstname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />

      <div className="franchise-section">
        <div className="franchise-parent">
          <h2>Franchise</h2>

          <div className="content">
            <p>
              The importance of applying for a franchise from your institution
              can be significant and beneficial for both your institution and
              potential franchisees. Here are several key points highlighting
              its importance:
            </p>
          </div>

          <div className="content">
            <p>
              <b>1. Expansion and Growth: </b>Franchising allows your
              institution to expand its reach and market presence rapidly. It
              provides an opportunity to establish a presence in new geographic
              locations without the capital investment and operational burden of
              opening new branches.
            </p>
          </div>

          <div className="content">
            <p>
              <b>2. Brand Recognition: </b>Franchising can help enhance your
              institution's brand recognition and reputation. Successful
              franchisees contribute to building a positive image for your
              institution in their local communities.
            </p>
          </div>

          <div className="content">
            <p>
              <b>3. Economies of Scale: </b>As your institution grows through
              franchising, you can benefit from economies of scale. Centralized
              support services, such as marketing, training, and procurement,
              become more cost-effective as the franchise network expands.
            </p>
          </div>

          <div className="content">
            <p>
              <b>4. Revenue Stream: </b>Franchise fees and ongoing royalties
              from franchisees can create a steady and diversified revenue
              stream for your institution, reducing reliance on other sources of
              income.
            </p>
          </div>

          <div className="content">
            <p>
              <b>5. Local Expertise:</b>Franchisees often have a deep
              understanding of their local markets, which can lead to better
              adaptation to local preferences and needs.
            </p>
          </div>

          <div className="content">
            <p>
              <b>6. Risk Sharing: </b>Franchisees assume a significant portion
              of the business risk associated with individual locations,
              reducing your institution's exposure to operational challenges.
            </p>
          </div>

          <div className="content">
            <p>
              <b>7. Quality Control:</b>A well-structured franchise model allows
              you to maintain control over brand standards, ensuring consistency
              and quality across all franchise locations.
            </p>
          </div>

          <div className="content">
            <p>
              <b>8. Entrepreneurship Support: </b>Franchisees assume a
              significant portion of the business risk associated with
              individual locations, reducing your institution's exposure to
              operational challenges.
            </p>
          </div>

          <div className="content">
            <p>
              <b>9. Community Impact:</b>Franchised locations can have a
              positive impact on local economies by creating jobs and
              contributing to community development.
            </p>
          </div>

          <div className="content">
            <p>
              <b>10. Global Expansion:</b>your institution has a unique offering
              or educational approach, franchising can enable you to take your
              expertise to a global scale, impacting learners worldwide.
            </p>
          </div>
        </div>

        <div className="space"></div>

        <div className="query-square">
          <div className="query-card-parent">
            <h2>BECOME A PARTNER</h2>

            <p>Get instant access to all courses</p>

            {/* ------------ First name Input textfield -------------------- */}
            <input
              type="text"
              className="form-control"
              name="title"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              placeholder="First Name"
            />

            {/* ------------ emailAddress Input textfield -------------------- */}
            <input
              type="text"
              className="form-control"
              name="title"
              value={emailAddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
              placeholder="Email Address"
            />

            {/* ------------ contact Number Input textfield -------------------- */}
            <input
              type="text"
              className="form-control"
              name="title"
              value={contactNumber}
              onChange={(e) => {
                setContactNumber(e.target.value);
              }}
              placeholder="Contact Number"
            />

            {/* ------------ City Input textfield -------------------- */}
            <input
              type="text"
              className="form-control"
              name="title"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder="Enter City"
            />

            {/* ------------ Pincode Input textfield -------------------- */}
            <input
              type="text"
              className="form-control"
              name="title"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              placeholder="Enter Pincode"
            />

            {/* ------------ Address Input textfield -------------------- */}
            <input
              type="text"
              className="form-control"
              name="title"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Enter Address"
            />

            <div>
              <div className="query-button-parent">
                <button class="button">REQUEST INFORMATION</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Franchise;
