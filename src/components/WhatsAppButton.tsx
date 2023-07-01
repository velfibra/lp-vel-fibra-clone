'use client';
import { useState } from 'react';
import Modal from './Modal';
import WhatsAppIcon from './icons/WhatsApp';

export default function WhatsAppButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        onClick={() => openModal()}
        className="hover: fixed bottom-3 right-0.5 z-50 select-none text-[#40c351] duration-200 hover:scale-125 hover:text-[#29ff45]"
        aria-label="WhatsApp button"
        title="WhatsApp"
      >
        <WhatsAppIcon />
      </button>
      <Modal
        price={'99,90'}
        h1={'350 MB'}
        id="form_350mb"
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
