import React from "react";
import "./sidebanner.css";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Sidebanner = () => {
  const [isPaused, setPaused] = useState(false);

  const handleMouseOver = () => {
    setPaused(true);
  };

  const handleMouseOut = () => {
    setPaused(false);
  };
  return (
    <div className="sidebanner-container">
      <div className="side-banner-head">
        <h5>News & Updates</h5>
      </div>

      <div
        className="side-banner-bottom-sections--1"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={`marqueest ${isPaused ? "pauseds" : ""}`}>
          <strong>1.</strong> Exam Date Confirm.
        </div>
        <div className={`marqueest ${isPaused ? "pauseds" : ""}`}>
          <strong>2.</strong> Previous session result coming soon.
        </div>
        <div className={`marqueest ${isPaused ? "pauseds" : ""}`}>
          <strong>3.</strong> Check new courses
        </div>
      </div>

      <div className="side-banner-yt-slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kqtD5dpn9C8?si=ym26FZ7E0SGLa358"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </SwiperSlide>

          <SwiperSlide>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_S_zO87qhyE?si=80CXJtOWu0meLoHo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </SwiperSlide>

          <SwiperSlide>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kqtD5dpn9C8?si=ym26FZ7E0SGLa358"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sidebanner;
