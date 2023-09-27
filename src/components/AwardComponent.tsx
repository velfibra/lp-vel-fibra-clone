/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../app/swiper.css';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function AwardComponent() {
  return (
    <section className="mx-auto flex items-center text-white max-lg:w-[90%] max-lg:flex-col xl:w-[90%] 2xl:w-[70%]">
      <div className="rise flex animate-fadeInLeft flex-col justify-center gap-4 xl:w-1/2">
        <h1 className="text-center font-bold  text-shadow max-lg:text-2xl xl:text-3xl 2xl:text-5xl">
          A Melhor Escolha em Internet
        </h1>
        <h2 className="text-center font-bold  text-shadow max-lg:text-lg xl:text-xl 2xl:text-3xl">
          Vel Fibra se Destaca em Belém do Pará
        </h2>
        <p className="2xl:text-xl">
          A Vel Fibra é a escolha óbvia para quem procura a melhor experiência de internet em Belém
          do Pará. Recebemos reconhecimento por nossa excelência, conquistando três prêmios
          importantes, incluindo "Melhor Velocidade", "Melhor Provedor" e "Melhor Internet para
          Gaming" pelo MelhorPlano.net. Isso demonstra nosso compromisso em fornecer a mais alta
          qualidade em conectividade aos nossos clientes. Venha se juntar a nós e descubra a
          verdadeira excelência em internet com a Vel Fibra.
        </p>
      </div>
      <Swiper
        cssMode={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper max-lg:mt-10 max-lg:h-[310px] max-lg:w-[350px] xl:my-20 xl:h-[400px] xl:w-[450px] 2xl:h-[600px] 2xl:w-[700px]"
      >
        {SVAs.map(({ src, alt }) => (
          <SwiperSlide key={alt}>
            <Image
              className="xl:h[350px] rise mx-auto animate-fadeIn select-none rounded-lg shadow-md shadow-black max-lg:h-[270px] max-lg:w-[270px] xl:h-[350px] xl:w-[350px] 2xl:h-[540px] 2xl:w-[540px] "
              loading="eager"
              src={src}
              alt={alt}
              width={540}
              height={540}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const SVAs = [
  { src: '/POST-19-1.png', alt: 'wifi-basic' },
  { src: '/POST-19-2.png', alt: 'wifi-plus' },
  { src: '/POST-19-3.png', alt: 'wifi-premium' },
  { src: '/POST-19-4.png', alt: 'wifi-basic2' },
];

{
  SVAs.map(({ src, alt }) => (
    <SwiperSlide key={alt}>
      {' '}
      <Image loading="eager" src={src} alt={alt} width={540} height={540} />
    </SwiperSlide>
  ));
}
