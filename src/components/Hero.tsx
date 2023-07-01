'use client';
import { useState } from 'react';
import Modal from './Modal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col bg-hero-image bg-cover max-xl:mt-20 max-lg:h-[500px] max-lg:bg-hero-image-mobile max-lg:bg-cover xl:h-[520px] 2xl:h-[800px]">
      <div className="h-fit max-xl:mt-20 max-lg:ml-2 max-lg:mt-5 max-lg:text-lg xl:ml-10 xl:mt-20 xl:text-3xl 2xl:ml-20 2xl:mt-28 2xl:text-5xl">
        <div className="animate-fadeInLeft animation-delay-300">
          <h1 className="text-white text-shadow">Comemore com a Click Speed</h1>
          <h1 className="w-fit p-2 font-semibold uppercase text-white text-shadow 2xl:mb-3 2xl:mt-4">
            Vem para a
          </h1>
          <h1 className="w-fit bg-white p-2 font-semibold uppercase text-primary">
            internet que se garante!
          </h1>
        </div>
        <div className="animate-fadeInLeft animation-delay-700 max-lg:text-lg">
          <h2 className="mt-3 w-fit text-white text-shadow max-lg:w-[90%] max-lg:text-base xl:text-2xl 2xl:text-3xl">
            Há 9 anos a melhor Fibra Óptica de Belém
          </h2>
          <button
            onClick={openModal}
            className="mt-10 rounded-xl bg-secondary p-3 font-semibold uppercase text-white shadow-md shadow-gray-800 duration-500 hover:scale-105 hover:bg-primary max-lg:mt-3 max-lg:text-lg  xl:text-3xl 2xl:text-4xl"
          >
            contratar agora
          </button>
        </div>
      </div>
      <h3 className="animate-fadeInUp text-center font-bold uppercase text-white text-shadow animation-delay-1000 max-lg:mt-[220px] max-lg:text-lg xl:mt-20 xl:text-2xl 2xl:mt-[280px] 2xl:text-3xl">
        faça parte dessa história
      </h3>
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
