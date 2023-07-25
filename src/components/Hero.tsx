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
    <div className="flex items-center justify-evenly bg-hero-image bg-cover max-xl:mt-20 max-lg:h-[500px] xl:h-[520px] 2xl:h-[800px]">
      <div className="flex h-fit w-[30%] flex-col text-shadow max-lg:mt-5 max-lg:text-lg xl:text-3xl 2xl:ml-20 2xl:text-5xl">
        <h1 className="font-bold text-white ">Chega de reiniciar o modem toda hora!</h1>
        <h2 className="mt-3 w-[80%] text-white text-shadow max-lg:w-[90%] max-lg:text-base xl:text-2xl 2xl:text-3xl">
          Tenha a melhor internet Fibra Óptica de Belém
        </h2>
        <button
          onClick={openModal}
          className="mt-10 w-[80%] rounded-full bg-secondary p-3 font-semibold uppercase text-white shadow-md shadow-gray-800 duration-500 hover:scale-105 hover:bg-primary max-lg:mt-3 max-lg:text-lg  xl:text-3xl 2xl:text-4xl"
        >
          contrate agora
        </button>
      </div>
      <Image
        className="ml-[20%] h-fit w-[40%]"
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
