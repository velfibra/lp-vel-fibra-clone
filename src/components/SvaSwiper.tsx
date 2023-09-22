'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function SvaSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={2}
      loop={true}
      coverflowEffect={{
        rotate: 5,
        stretch: 10,
        depth: 100,
        modifier: 5,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper max-lg:my-10 max-lg:w-[95%] xl:my-20 xl:w-1/2"
      onSlideChange={handleSlideChange}
    >
      {SVAs.map(({ src, alt }, index) => (
        <SwiperSlide key={alt}>
          <div
            className={`relative ${
              activeIndex !== index ? 'opacity-80 duration-500' : 'opacity-100 duration-1000'
            }`}
          >
            <Image loading="eager" src={src} alt={alt} width={400} height={250} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const SVAs = [
  { src: '/WIFI-BASIC-CARROSSEL.jpg', alt: 'wifi-basic' },
  { src: '/WIFI-PLUS-CARROSSEL.jpg', alt: 'wifi-plus' },
  { src: '/WIFI-PREMIUM-CARROSSEL.jpg', alt: 'wifi-premium' },
  { src: '/WIFI-BASIC-CARROSSEL.jpg', alt: 'wifi-basic2' },
  { src: '/WIFI-PLUS-CARROSSEL.jpg', alt: 'wifi-plus2' },
];
