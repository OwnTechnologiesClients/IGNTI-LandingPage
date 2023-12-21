import React from "react";
import { useState } from "react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const [isPaused, setPaused] = useState(false);

  const handleMouseOver = () => {
    setPaused(true);
  };

  const handleMouseOut = () => {
    setPaused(false);
  };
  return (
    <>
      {/* --------------- header image ---------------------- */}
      <div className="banner-section">
        <div
          className="banner-text-section"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className={`marquee ${isPaused ? "paused" : ""}`}>
            IGNTI IS AN AUTONOMOUS INSTITUTION REGISTERED UNDER PUBLIC TRUST ACT 1982 GOVT. OF INDIA
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
            <img src="/img/banner-1.jpg" alt="banner-1" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/img/banner-2.jpg" alt="banner-2" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/img/banner-3.jpg" alt="banner-3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
