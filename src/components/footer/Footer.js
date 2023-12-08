import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-left-section">
        {/* --------------- left section ---------------- */}

        <div className="footer-center-verticle">
          <h1>GET IN TOUCH</h1>

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
        </div>

        {/* --------------- Middle section one ---------------- 
                <div className='footer-middle-center-verticle'>
                    <h1>Courses</h1>
                    <div className='footer-middle-section-list'>
                        <div className='footer-middle-list'>
                            <div className='footer-middle-circle' />
                            <p>Html & Css</p>
                        </div>

                        <div className='footer-middle-list'>
                            <div className='footer-middle-circle' />
                            <p>Python</p>
                        </div>

                        <div className='footer-middle-list'>
                            <div className='footer-middle-circle' />
                            <p>Java</p>
                        </div>

                        <div className='footer-middle-list'>
                            <div className='footer-middle-circle' />
                            <p>MS-PowerPoint</p>
                        </div>

                        <div className='footer-middle-list'>
                            <div className='footer-middle-circle' />
                            <p>MS-Excel</p>
                        </div>

                    </div>


                </div>
                */}

        {/* --------------- Middle section two ---------------- */}
        <div className="footer-middle-center-verticle">
          <div className="footer-middle-section-list" />
          <div className="footer-middle-list">
            <div className="footer-middle-circle" />
            <p> IMPORTANT LINKS</p>
          </div>

          <div className="footer-middle-list">
            <div className="footer-middle-circle" />
            <p>RESULT</p>
          </div>

          <div className="footer-middle-list">
            <div className="footer-middle-circle" />
            <p>EXAM</p>
          </div>

          <div className="footer-middle-list">
            <div className="footer-middle-circle" />
            <p>DOWNLOADS</p>
          </div>

          <div className="footer-middle-list">
            <div className="footer-middle-circle" />
            <p>FORMS</p>
          </div>
        </div>

        {/* --------------- Right section ---------------- */}
        <div className="footer-right-center-verticle">
          <h1>Contact With Us</h1>
          <div className="footer-middle-section-list" />

          <p>
            Indira Gandhi National Training Institute 105, 1st Floor, Laxman
            Plaza Building Munirka, New Delhi-110068 Near- Bank of Baroda
          </p>

          <p>
            +91-99102006384, 011 4263 4184 ignti.com@gmail.com www.ignti.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
