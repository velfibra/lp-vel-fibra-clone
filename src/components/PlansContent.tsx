'use client';
import { useState } from 'react';
import Card from './Card';
import CardContent from './CardContent';
import CardTitle from './CardTitle';
import Image from 'next/image';
import Modal from './Modal';
import Form from './PlanForm';

export default function PlansContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceItem, setPriceItem] = useState('');
  const [title, setTitle] = useState('');

  const openModal = (price: string, h1: string) => {
    setIsModalOpen(true);
    setPriceItem(price);
    setTitle(h1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="mx-auto mb-10 mt-5 max-w-[1580px] p-6 max-lg:w-full">
      <div className="mb-10">
        <h1
          id="plan"
          className="rise animate-fadeInUp text-center text-3xl font-bold uppercase text-primary max-lg:text-2xl"
        >
          Conheça nossos planos
        </h1>
        <h3 className="rise animate-fadeInUp text-center text-xl max-lg:text-center max-lg:text-base">
          Fuja do básico! Escolha o melhor plano de internet para você
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
        {plans.map(({ h1, h2, price, text, bg, hover, icons, offer }) => (
          <div key={h1}>
            <Card className={`rise flex animate-fadeInUp flex-col gap-3 py-20 ${text}`}>
              {offer && (
                <div className="absolute -mt-24 w-[220px] animate-bounce rounded-xl border-[1px] border-black bg-primary p-3 px-5 text-center text-xl text-white max-lg:ml-[31px] xl:ml-[75px] 2xl:ml-[110px]">
                  Melhor oferta
                </div>
              )}
              <CardTitle>{h1}</CardTitle>
              <h2 className="mb-5 w-full text-center text-5xl font-bold max-lg:text-4xl">{h2}</h2>
              <CardContent>
                <h3 className="text-center text-xl font-semibold">Instalação gratuita</h3>
                <hr className="mt-5 h-[2px] bg-black/40" />
                <h3 className="text-center text-xl font-semibold">Wi-fi Incluso</h3>
                <hr className="h-[2px] bg-black/40" />
                <div className="mt-10 flex justify-center gap-2">
                  {icons?.map(({ src }) => (
                    <Image key={src} src={src} alt="Beneficio Click" width={40} height={40} />
                  ))}
                </div>
                <h3 className="my-10 text-center text-xl font-semibold">*Valor com pontualidade</h3>
              </CardContent>
              <button
                onClick={() => openModal(price, h1)}
                className={`h-14 w-[70%] self-center rounded-lg bg-gradient-to-b max-lg:w-[90%] ${bg} py-2 text-xl font-bold uppercase text-white shadow-md shadow-gray-500 duration-500 hover:scale-105 ${hover}`}
              >
                contratar
              </button>
            </Card>
            <Modal price={priceItem} h1={title} isOpen={isModalOpen} onClose={closeModal} />
          </div>
        ))}
      </div>
    </section>
  );
}

const plans = [
  {
    h1: '350 MB',
    h2: 'R$99,90/Mês',
    price: '99,90',
    text: 'text-primary',
    bg: 'from-secondary to-secondary/60',
    hover: 'hover:bg-gradient-to-b hover:from-primary hover:to-primary/60',
    icons: [{ src: '/4.png' }, { src: '/3.png' }],
  },
  {
    h1: '450 MB',
    h2: 'R$119,90/Mês',
    price: '119,90',
    text: 'text-secondary',
    offer: true,
    bg: 'from-primary to-primary/60',
    hover: 'hover:bg-gradient-to-b hover:from-secondary hover:to-secondary/60',
    icons: [{ src: '/4.png' }, { src: '/3.png' }, { src: '/5.png' }, { src: '/2.png' }],
  },
  {
    h1: '650 MB',
    h2: 'R$139,90/Mês',
    price: '139,90',
    text: 'text-primary',
    bg: 'from-secondary to-secondary/60',
    hover: 'hover:bg-gradient-to-b hover:from-primary hover:to-primary/60',
    icons: [
      { src: '/4.png' },
      { src: '/3.png' },
      { src: '/5.png' },
      { src: '/2.png' },
      { src: '/1.png' },
    ],
  },
];
