// 'use client';
// import { useState } from 'react';
// import Modal from './Modal';
import WhatsAppIcon from './icons/WhatsApp';

const phoneNumber = 559130853190;

export default function WhatsAppButton() {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const openModal = () => {
  //     setIsModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setIsModalOpen(false);
  //   };
  return (
    // <div>
    //   <button
    //     className="hover: fixed bottom-3 right-0.5 z-50 text-[#40c351] duration-200 hover:scale-125 hover:text-[#29ff45]"
    //     onClick={openModal}
    //   >
    //     <WhatsAppIcon />
    //   </button>
    //   <Modal wpp="y" price={'119,90'} id="form_450mb" isOpen={isModalOpen} onClose={closeModal} />
    // </div>
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="hover: fixed bottom-3 right-0.5 z-50 text-[#40c351] duration-200 hover:scale-125 hover:text-[#29ff45]"
      target="_blank"
      aria-label="WhatsApp button"
      title="WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
