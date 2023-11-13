'use client';
import Logo from './Logo';
import LogoMobile from './LogoMobile';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import Modal from './Modal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    // top-0 flex h-24 items-center bg-primary max-lg:fixed max-lg:z-10 max-lg:h-20 max-lg:w-full
    <header className="top-0 flex h-24 items-center bg-black max-lg:fixed max-lg:z-10 max-lg:h-20 max-lg:w-full">
      <Logo className="ml-20 max-lg:hidden" />
      <LogoMobile className="ml-28 lg:hidden" />
      <div className="ml-64 flex w-3/5 justify-between text-white max-2xl:ml-0 max-2xl:w-4/5 max-2xl:justify-evenly max-lg:hidden">
        <nav>
          <ul className="mt-2 flex text-2xl font-bold max-2xl:text-xl">
            {links.map(({ link, name }) => (
              <li className="ml-16 opacity-75 hover:opacity-100" key={name}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={openModal}
          className="rounded-3xl bg-secondary p-2 text-xl font-semibold text-white duration-700 hover:scale-110 hover:bg-purple-500 max-lg:hidden xl:mr-5 xl:w-56 2xl:mr-16 "
        >
          Consulte Viabilidade
        </button>
      </div>
      <MobileMenu />
      <Modal price={'119,90'} id="form_450mb" isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
}

const links = [
  { name: 'Planos', link: '#plan' },
  { name: 'Cobertura', link: '#coverage' },
  { name: 'Dúvidas', link: '#help' },
  { name: 'Contatos', link: '#contact' },
];
