'use client';
import { useState } from 'react';
import Modal from './Modal';

import Popper from './Popper';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
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
        className="absolute right-5 flex cursor-pointer flex-col gap-1 lg:hidden"
        onClick={() => setOpen(!open)}
        id="menu-modal"
        aria-label="navigation menu"
        title="Menu"
      >
        {open ? (
          <XMarkIcon className="mt-1 w-8 rounded-md font-semibold text-white text-shadow" />
        ) : (
          <Bars3Icon className="mt-1 w-8 rounded-md font-semibold text-white text-shadow" />
        )}
      </button>
      <Popper
        className="fixed top-20 z-30 m-0 w-full animate-fadeInDown border-t-2 border-primary bg-primary/90 font-bold uppercase text-white"
        open={open}
        onClose={() => setOpen(false)}
        id="menu-modal"
      >
        <ul>
          {links.map(({ link, name, button, buttonName }, i) => (
            <li key={i} className="w-full border-b border-primary/30 p-4">
              <a href={link}>{name}</a>
              {button && (
                <button
                  onClick={openModal}
                  className="-ml-6 w-fit rounded-3xl border-b border-primary/30 bg-secondary p-4 text-xl"
                >
                  {buttonName}
                </button>
              )}
            </li>
          ))}
        </ul>
      </Popper>
      <Modal price={'119,90'} id="form_450mb" isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

const links = [
  { name: 'Planos', link: '#plan' },
  { name: 'Cobertura', link: '#coverage' },
  { name: 'Duvidas', link: '#help' },
  { name: 'Contatos', link: '#contact' },
  { buttonName: 'Consulte Viabilidade', button: true },
];
