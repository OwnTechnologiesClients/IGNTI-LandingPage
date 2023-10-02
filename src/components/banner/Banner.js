import React from 'react'
import { useState } from 'react';
import './Banner.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {

    return (
        <>

            {/* --------------- header image ---------------------- */}

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

                    <img src="/img/banner-1.png" alt="banner-1" />


                </SwiperSlide>


                <SwiperSlide>

                    <img src="/img/banner-2.png" alt="banner-2" />

                </SwiperSlide>

                <SwiperSlide>

                    <img src="/img/banner-3.png" alt="banner-3" />

                </SwiperSlide>
            </Swiper>

        </>
    )
};

export default Banner
