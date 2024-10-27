
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function Slider() {
  return (
    <Swiper
    
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
    <SwiperSlide><img src="/AssestImage/Slider/Banner1.webp" alt="" /></SwiperSlide>
    <SwiperSlide><img src="/AssestImage/Slider/Banner2.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="/AssestImage/Slider/Banner3.webp" alt="" /></SwiperSlide>
    <SwiperSlide><img src="/AssestImage/Slider/Banner4.webp" alt="" /></SwiperSlide>
    
    
  </Swiper>
  )
}

export default Slider
