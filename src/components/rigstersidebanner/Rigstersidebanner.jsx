import React from "react";
import "./rigstersidebanner.css";
import "swiper/css";
import { useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Rigstersidebanner = () => {
  const [isPaused, setPaused] = useState(false);

  const handleMouseOver = () => {
    setPaused(true);
  };

  const handleMouseOut = () => {
    setPaused(false);
  };
  return (
    <div className="sidebanner-containers">
      <div className="side-banner-heads">
        <h5>News & Updates</h5>
      </div>

      <div
        className="side-banner-bottom-sections"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={`marqueets ${isPaused ? "pausedts" : ""}`}>
          Exam Date Confirm.
        </div>
        <div className={`marqueets ${isPaused ? "pausedts" : ""}`}>
          Previous session result coming soon.
        </div>
        <div className={`marqueets ${isPaused ? "pausedts" : ""}`}>
          Check new courses
        </div>
      </div>

      <div className="side-banner-yt-sliders">
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

export default Rigstersidebanner;
