'use client';
import { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //xl:bg-hero-image
  return (
    <div className="flex items-center bg-gradient-to-bl from-[#1A0530] via-[#48088b] to-[#1A0530] bg-cover text-white text-shadow max-xl:mt-20 max-lg:h-fit max-lg:flex-col xl:h-[520px] 2xl:h-[700px]">
      <Image
        className="rise my-5 h-fit animate-fadeInLeft p-5 xl:hidden"
        //'/IMG-BANNER-01-VEL-FIBRA.png'}
        src={'/IMG-BANNER-01-VEL-FIBRA.png'}
        alt="colaborador Vel Fibra"
        width={800}
        height={735}
      />
      <div className="-mt-10 h-fit  w-full max-lg:mt-5 max-lg:text-lg xl:text-6xl 2xl:ml-20 2xl:text-8xl">
        <h1 className="rise ml-10 w-[90%] animate-fadeInLeft font-bold  max-lg:mx-auto max-lg:text-center max-lg:text-3xl">
          Sua Conexão Sem Interrupções!
        </h1>
        <h2 className="rise ml-10 mt-10 animate-fadeInLeft animation-delay-300 max-lg:mx-auto max-lg:mt-2 max-lg:w-[70%] max-lg:text-center max-lg:text-xl xl:text-2xl 2xl:text-4xl">
          Tenha a melhor internet Fibra Óptica de Belém
        </h2>
        <button
          onClick={openModal}
          className="rise my-10 ml-10 animate-fadeInLeft rounded-full bg-secondary p-3 font-semibold uppercase  shadow-md shadow-gray-800 duration-500 animation-delay-500 hover:scale-105 hover:bg-primary max-lg:mx-[20%] max-lg:mt-3 max-lg:w-[60%] max-lg:text-center max-lg:text-lg xl:w-[50%]  xl:text-3xl 2xl:text-4xl"
        >
          contrate agora
        </button>
      </div>
      <Image
        className="rise rise mr-10 h-fit animate-fadeIn rounded-xl max-lg:hidden xl:w-[40%]"
        src={'/IMG-BANNER-01-VEL-FIBRA.png'}
        alt="colaborador Vel Fibra"
        width={800}
        height={735}
      />
      <Modal price={'119,90'} id="form_450mb" isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
