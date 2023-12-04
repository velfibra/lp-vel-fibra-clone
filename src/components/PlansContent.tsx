'use client';
import { useState } from 'react';
import Card from './Card';
import CardContent from './CardContent';
import CardTitle from './CardTitle';
import Image from 'next/image';
import Modal from './Modal';

export default function PlansContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceItem, setPriceItem] = useState('');
  const [title, setTitle] = useState('');
  const [idForm, setIdForm] = useState('');

  const openModal = (price: string, h1: string, id: string) => {
    setIsModalOpen(true);
    setPriceItem(price);
    setTitle(h1);
    setIdForm(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="mx-auto p-6 font-sans max-lg:w-full">
      <div className="mb-10">
        <h1
          id="plan"
          className="rise animate-fadeInUp text-center text-5xl font-bold text-white text-shadow max-lg:text-2xl"
        >
          Melhor plano de internet de Belém
        </h1>
        <h2 className="rise mt-5 animate-fadeInUp text-center text-2xl text-white max-lg:text-center max-lg:text-base xl:mb-28">
          Escolha sua Internet banda larga e tenha wi-fi para toda a Família!
        </h2>
      </div>
      {/* "mx-auto -mt-5 flex justify-between text-shadow max-lg:w-full max-lg:flex-col max-lg:items-center xl:w-[90%] xl:animate-fadeInUp 2xl:w-[60%]" */}
      <div className="mx-auto -mt-5 flex justify-between text-shadow max-lg:w-full max-lg:flex-col max-lg:items-center xl:w-[90%] xl:animate-fadeInUp 2xl:w-[60%]">
        {plans.map(({ h1, h2, id, price, mt, bg, bgButton, hover, icons }) => (
          <div key={h1}>
            {/* `my-5 flex ${mt} h-[500px] flex-col gap-10 p-2 ${bg} rise animate-fadeInUp text-white hover:scale-110 hover:duration-300 max-lg:h-[480px]` */}
            <Card
              className={`my-5 flex ${mt} h-[500px] flex-col gap-10 p-2 ${bg} rise animate-fadeInUp text-white hover:scale-110 hover:duration-300 max-lg:h-[480px]`}
            >
              <div>
                <div className="flex justify-center">
                  {/* {offer && (
                    <div className="absolute -mt-10 animate-bounce rounded-2xl bg-gray-700 p-2 text-center text-xl font-bold">
                      {offer}
                    </div>
                  )} */}
                  <CardTitle>{h1}</CardTitle>
                  <span className="ml-1 mt-9 self-center font-sans text-[25px] font-semibold">
                    MEGA
                  </span>
                </div>
                <div className="-mt-5 flex items-center justify-center text-2xl">
                  <span className="mr-1">Por</span>
                  <h2 className="text-center text-2xl font-semibold">{h2}</h2>
                  <span className="ml-1">/Mês*</span>
                </div>
              </div>
              <CardContent>
                <h3 className="text-center">Instalação grátis em 24 horas**</h3>
                <h3 className="text-center">Wi-fi Grátis</h3>
                <div className="my-5 flex justify-center gap-2">
                  {icons?.map(({ src, alt }) => (
                    <Image className="" key={src} src={src} alt={alt} width={160} height={60} />
                  ))}
                </div>
                <h3 className=" text-center max-lg:my-2">**Consulte viabilidade</h3>
              </CardContent>
              <button
                onClick={() => openModal(price, h1, id)}
                className={`h-14 w-[70%] self-center rounded-full bg-gradient-to-b max-lg:w-[75%] ${bgButton} py-2 text-xl font-bold uppercase text-white shadow-md shadow-black/80 duration-500 hover:scale-105 ${hover}`}
              >
                contratar
              </button>
            </Card>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center font-semibold text-white">
        *Valor válido somente com pontualidade no pagamento.
      </p>
      <Modal price={priceItem} h1={title} id={idForm} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

const plans = [
  //   {
  //     h1: '150',
  //     id: 'form_350mb',
  //     h2: 'R$ 59,90',
  //     offer: 'Black Friday',
  //     price: '59,90',
  //     text: 'text-primary',
  //     bg: 'bg-gradient-to-r from-secondary via-secondary to-red-400',
  //     bgButton: 'from-primary to-primary/80',
  //     hover: 'hover:bg-gradient-to-b hover:from-[#1A0530] hover:to-[#1A0530]/60',
  //     icons: [{ src: '/WIFI-BASICS.png', alt: 'WIFI-BASICS' }],
  //   },
  {
    h1: '350',
    id: 'form_350mb',
    h2: 'R$ 99,90',
    price: '99,90',
    text: 'text-primary',
    bg: 'bg-gradient-to-r from-secondary via-secondary to-red-400',
    bgButton: 'from-primary to-primary/80',
    hover: 'hover:bg-gradient-to-b hover:from-[#1A0530] hover:to-[#1A0530]/60',
    icons: [{ src: '/WIFI-BASICS.png', alt: 'WIFI-BASICS' }],
  },
  {
    h1: '450',
    id: 'form_450mb',
    mt: 'xl:-mt-7',
    h2: 'R$ 119,90',
    price: '119,90',
    text: 'text-secondary',
    bg: 'bg-gradient-to-r from-primary  to-fuchsia-800',
    bgButton: 'from-secondary to-secondary/60',
    hover: 'hover:bg-gradient-to-b hover:from-[#1A0530] hover:to-[#1A0530]/60',
    icons: [{ src: '/WIFI-PLUS.png', alt: 'WIFI-PLUS' }],
  },
  {
    h1: '650',
    id: 'form_650mb',
    h2: 'R$ 139,90',
    price: '139,90',
    text: 'text-primary',
    bg: 'bg-gradient-to-r from-secondary via-secondary to-red-400',
    bgButton: 'from-primary to-primary/80',
    hover: 'hover:bg-gradient-to-b hover:from-[#1A0530] hover:to-[#1A0530]/60',
    icons: [{ src: '/WIFI-PREMIUM.png', alt: 'WIFI-PREMIUM' }],
  },
];
