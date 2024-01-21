import React, { useEffect } from "react";
import "./rigstersidebanner.css";
import "swiper/css";
import { useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { message } from "antd";
import axios from "axios";

const Rigstersidebanner = () => {
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
    <div className="sidebanner-containers">
      <div className="side-banner-heads">
        <h5>News & Updates</h5>
      </div>

      <div
        className="rigster-side-banner"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {notifications?.map((notificationData, notificationIndex) => {
          return (
            <div className={`marqueest ${isPaused ? "pauseds" : ""}`} >
              <strong>{notificationIndex + 1}.</strong>{" "}
              {notificationData.notification}
            </div>
          );
        })}
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
        </Swiper>
      </div>
    </div>
  );
};

export default Rigstersidebanner;
