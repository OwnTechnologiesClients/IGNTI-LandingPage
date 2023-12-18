import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./ContactUs.css";
import { useState } from "react";
import Goverment from "../../components/goverment/Goverment";
import Footers from "../../components/footers/Footers";
import Herosection from "../../components/herosection/Herosection";

const ContactUs = () => {
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

      <div className="contact-section">
        <div className="contact-parent">
          <h2>Contact Us</h2>

          <div className="contact-content">
            <p>Join Our Institute and Ignite Your Future! 🚀</p>
          </div>

          <div className="contact-content">
            <p>
              Are you ready to embark on a journey of knowledge, skills, and
              personal growth? We offer a wide range of courses designed to
              empower you for success in today’s dynamic world.
            </p>
          </div>

          <div className="contact-content">
            <p>
              Whether you are interested in [Mention Specific Courses], our
              institute provides the expertise and support you need to achieve
              your goals.
            </p>
          </div>

          <div className="contact-content">
            <p>
              Contact us today to enroll in the course of your choice and start
              your educational journey with us. Your future begins here!
            </p>
          </div>

          <div className="contact-content">
            <p>📞 +91 9999888774</p>
          </div>

          <div className="contact-content">
            <p>📧 xyz@gmail.com</p>
          </div>

          <div className="contact-content">
            <p>🏢 Munirka, New Delhi - 110074</p>
          </div>

          <div className="contact-content">
            <p>
              We look forward to welcoming you to our institute and guiding you
              towards a brighter tomorrow.
            </p>
          </div>

          <div className="contact-content">
            <p>Join us today and be the architect of your own success!</p>
          </div>
        </div>

        <div className="space"></div>

        <div className="contact-query-square">
          <div className="contact-query-card-parent">
            <h2>BECOME A MEMBER</h2>

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
              <div className="query-button-parent-1">
                <button class="button">REQUEST INFORMATION</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Goverment />
      <Footers />
    </div>
  );
};

export default ContactUs;
