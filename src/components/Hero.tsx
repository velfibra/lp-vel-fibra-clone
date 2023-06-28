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
    <div className="flex h-[800px] flex-col bg-hero-image bg-cover max-xl:mt-20 max-lg:h-[500px] ">
      <div className="ml-20 mt-28 h-fit text-5xl max-lg:ml-2 max-lg:mt-10 max-lg:text-2xl">
        <div className="animate-fadeInLeft animation-delay-300">
          <h1 className="text-white text-shadow">Comemore com a Click Speed</h1>
          <h1 className="mb-3 mt-4 w-fit p-2 font-semibold uppercase text-white text-shadow">
            Vem para a
          </h1>
          <h1 className="text- w-fit bg-white p-2 font-semibold uppercase text-primary">
            internet que se garante!
          </h1>
        </div>
        <div className="animate-fadeInLeft text-4xl animation-delay-700 max-lg:text-lg">
          {/* <h2 className="mt-4 w-fit text-white text-shadow">vem para a Click Speed</h2> */}
          <h2 className="mt-3 w-fit text-3xl text-white text-shadow max-lg:w-[90%]">
            Há 9 anos a melhor internet Fibra Óptica de Belém
          </h2>
          <button
            onClick={openModal}
            className="mt-10 rounded-xl bg-secondary p-3 text-4xl font-semibold uppercase text-white shadow-md shadow-gray-800 duration-500 hover:scale-105 hover:bg-primary max-lg:mt-3 max-lg:text-xl"
          >
            contratar agora
          </button>
        </div>
      </div>
      <h3 className="mt-[280px] animate-fadeInUp text-center text-3xl font-bold uppercase text-white text-shadow animation-delay-1000 max-lg:mt-28 max-lg:text-lg">
        faça parte dessa historia
      </h3>
      <Modal price={'119,90'} h1={'450MB!'} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
