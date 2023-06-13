import React from "react";
import "./Slider.css";
import leftguy from '../assets/leftguy.png';
import rightguy from '../assets/rightguy.png';
import lady from '../assets/lady.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

const Slider = () => {
  const images = [
    { image: leftguy },
    { image: rightguy },
    { image: lady },
    { image: leftguy },
    { image: rightguy },
  ];

  const ladyIndex = images.findIndex(item => item.image === lady);

  return (
    <div className="slider-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={ladyIndex}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={item.image} alt="image" className="selectImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
