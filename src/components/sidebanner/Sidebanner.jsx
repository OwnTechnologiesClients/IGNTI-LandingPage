import React from "react";
import "./sidebanner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
