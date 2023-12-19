import React from "react";
import "./sidebanner.css";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { message } from "antd";
import axios from "axios";

const Sidebanner = () => {
  const [isPaused, setPaused] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [youtube, setYoutube] = useState([]);

  const handleMouseOver = () => {
    setPaused(true);
  };

  const handleMouseOut = () => {
    setPaused(false);
  };

  const getData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/notification/get-notification"
      );
      if (response.data.success) {
        // message.success(response.data.message);
        setNotifications(response.data.notifications);
        setYoutube(response.data.youtubeLinks);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
        {notifications?.map((notificationData, notificationIndex) => {
          return (
            <div className={`marqueest ${isPaused ? "pauseds" : ""}`}>
              <strong>{notificationIndex}.</strong>{" "}
              {notificationData.notification}
            </div>
          );
        })}
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
          {youtube.map((youtubeData, youtubeIndex) => {
            return (
              <SwiperSlide>
                <iframe
                  width="100%"
                  height="100%"
                  src={youtubeData.youtubeLink}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Sidebanner;
