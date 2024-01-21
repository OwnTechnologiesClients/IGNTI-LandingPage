import React from "react";
import "./footers.css";
import { Link } from "react-router-dom";
const Footers = () => {
  return (
    <div className="fotter-container">
      <div className="fotter-parent">
        <div className="fotter-div-1">
          <div className="fotter-touch">
            <h1>GET IN TOUCH</h1>
          </div>

          <div className="fotter-icon">
            <div className="footer-social-media-parent">
              <div className="footer-social-media-circle">
                <div className="social-media-img-size">
                  <img src="/img/facebook.png" />
                </div>
              </div>
              <div className="footer-social-media-circle">
                <div className="footer-social-media-img-size">
                  <img src="/img/instagram.png" />
                </div>
              </div>
              <div className="footer-social-media-circle">
                <div className="social-media-img-size">
                  <img src="/img/linkedin.png" />
                </div>
              </div>
            </div>

            <div className="footer-social-media-parent">
              <div className="footer-social-media-circle">
                <div className="social-media-img-size">
                  <img src="/img/youtube.png" />
                </div>
              </div>
              <div className="footer-social-media-circle">
                <div className="footer-social-media-img-size">
                  <img src="/img/telegram.png" />
                </div>
              </div>
              <div className="footer-social-media-circle">
                <div className="social-media-img-size">
                  <img src="/img/social.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fotter-div-3">

          <div className="fotter-point">
            <div className="fotter-touchs">
              <h1>IMPORTANT LINKS</h1>
            </div>
            <Link to="/enrollment-number"> <p>RESULT</p></Link>
            <Link to="/select-course"><p>EXAM</p></Link>
            <Link to="/"><p>DOWNLOADS</p></Link>
            <Link to="/register"><p>FORMS</p></Link>
            <Link to="/courses"><p>COURSES</p></Link>
          </div>
        </div>
        <div className="fotter-div-3">
          <div className="fotter-touchs">
            <h1>CONTACT WITH US</h1>
          </div>

          <div className="fotter-3-text">
            <div className="fotter-home">
              <p>
                {/*   <img
                  style={{ height: "1.5vw", marginRight: "0.3vw" }}
                  src="/img/home.png"
                /> */}
                Indira Gandhi National Training Institute
              </p>
              <p> 105, 1st Floor, Laxman Plaza Building</p>
              <p> Munirka, New Delhi-110068</p>
              <p> Near- Bank of Baroda</p>
            </div>

            <div className="fotter-home-1" style={{ marginTop: "4vw" }}>
              <p>
                {/*  <img style={{ height: "1.3vw" }} src="/img/phone-call.png" />{" "}*/}
                91-99102006384, 011 4263 4184
              </p>
              <p>
                {/*<img style={{ height: "1.3vw" }} src="/img/email.png" />{" "} */}
                ignti.com@gmail.com
              </p>
              <p>
                {/*  <img style={{ height: "1.3vw" }} src="/img/global.png" />{" "} */}
                www.ignti.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-fotter">

        <p>Indira Gandhi National Training Institute © 2024 All Rights Reserved. Created with ❤️ by <a className="footer-a" href="https://owntechnologies.com/">OwnTechnologies</a></p>
      </div>
    </div>
  );
};

export default Footers;
