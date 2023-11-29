import React from "react";
import "./sidebanner.css";

const Sidebanner = () => {
  return (
    <div className="sidebanner-container">
      <div className="side-banner-head">
        <h5>News & Updates</h5>
      </div>

      <div className="side-banner-bottom-section">
        <p>Exam Date Confirm.</p>
        <p>Previous session result coming soon.</p>
        <p>Check new courses</p>
      </div>

      <div className="side-banner-yt-slider">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/kqtD5dpn9C8?si=ym26FZ7E0SGLa358"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Sidebanner;
