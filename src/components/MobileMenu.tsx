'use client';
import { useState } from 'react';

import Popper from './Popper';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

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
          {links.map(({ link, name }) => (
            <li key={name} className="w-full border-b border-primary/30 p-4">
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </Popper>
    </>
  );
}

const links = [
  { name: 'Planos', link: '#plan' },
  { name: 'Duvidas', link: '#help' },
  { name: 'Contatos', link: '#contact' },
];
