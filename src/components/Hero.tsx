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
  return (
    <div className="flex items-center bg-hero-image bg-cover max-xl:mt-20 max-lg:h-[500px] xl:h-[520px] 2xl:h-[700px]">
      <div className="-mt-10  h-fit text-shadow max-lg:mt-5 max-lg:text-lg xl:text-3xl 2xl:ml-20 2xl:text-8xl">
        <h1 className="rise ml-10 w-[90%] animate-fadeInLeft font-semibold text-white">
          Chega de reiniciar o modem toda hora!
        </h1>
        <h2 className="rise ml-10 mt-10  text-white text-shadow max-lg:w-[70%] max-lg:text-base xl:text-2xl 2xl:text-4xl">
          Tenha a melhor internet Fibra Óptica de Belém
        </h2>
        <button
          onClick={openModal}
          className="ml-10 mt-10 w-[50%] rounded-full bg-secondary p-3 font-semibold uppercase text-white shadow-md shadow-gray-800 duration-500 hover:scale-105 hover:bg-primary max-lg:mt-3 max-lg:text-lg  xl:text-3xl 2xl:text-4xl"
        >
          contrate agora
        </button>
      </div>
      <Image
        loading="eager"
        className="ml-10 h-fit w-[40%]"
        src={'/IMG-BANNER-01.png'}
        alt="colaborador click Speed"
        width={800}
        height={735}
      />
      <Modal
        price={'119,90'}
        h1={'450MB!'}
        id="form_450mb"
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
