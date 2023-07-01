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
    <section className="mx-auto mb-10 mt-5 max-w-[1580px] p-6 max-lg:w-full">
      <div className="mb-10">
        <h1
          id="plan"
          className="rise animate-fadeInUp text-center text-3xl font-bold uppercase text-primary max-lg:text-2xl"
        >
          Melhor plano de internet
        </h1>
        <h3 className="rise animate-fadeInUp text-center text-xl max-lg:text-center max-lg:text-base">
          Assine a melhor internet residencial banda larga com fibra ótica e Wi-Fi
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
        {plans.map(({ h1, h2, id, price, text, bg, hover, icons, offer }) => (
          <div key={h1}>
            <Card
              className={`rise flex animate-fadeInUp flex-col gap-3 py-20 max-lg:h-[500px] max-lg:py-10 ${text}`}
            >
              {offer && (
                <div className="absolute -mt-24 w-[220px] animate-bounce rounded-xl border-[1px] border-black bg-primary p-3 px-5 text-center text-xl text-white max-lg:-mt-12 max-lg:ml-[31px] max-lg:p-1 max-lg:text-lg xl:ml-[75px] 2xl:ml-[110px]">
                  Melhor oferta
                </div>
              )}
              <CardTitle>{h1}</CardTitle>
              <h2 className="mb-5 w-full text-center text-5xl font-bold max-lg:text-2xl">{h2}</h2>
              <CardContent>
                <h3 className="text-center text-xl font-semibold max-lg:text-base">
                  Instalação grátis em 24 horas**
                </h3>
                <hr className="mt-5 h-[2px] bg-black/40" />
                <h3 className="text-center text-xl font-semibold max-lg:text-base">Wi-fi Grátis</h3>
                <hr className="h-[2px] bg-black/40" />
                <div className="mt-10 flex justify-center gap-2 max-lg:mt-5">
                  {icons?.map(({ src, alt }) => (
                    <Image key={src} src={src} alt={alt} width={40} height={40} />
                  ))}
                </div>
                <h3 className="my-10 text-center text-xl font-semibold max-lg:my-2 max-lg:text-[10px]">
                  *Valor com pontualidade
                </h3>
                <h3 className="my-10 text-center text-xl font-semibold max-lg:my-2 max-lg:text-[10px]">
                  **Consulte viabilidade
                </h3>
              </CardContent>
              <button
                onClick={() => openModal(price, h1, id)}
                className={`h-14 w-[70%] self-center rounded-lg bg-gradient-to-b max-lg:w-[75%] ${bg} py-2 text-xl font-bold uppercase text-white shadow-md shadow-gray-500 duration-500 hover:scale-105  max-lg:h-11 max-lg:text-base ${hover}`}
              >
                contratar
              </button>
            </Card>
            <Modal
              price={priceItem}
              h1={title}
              id={idForm}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const plans = [
  {
    h1: '350 MB',
    id: 'form_350mb',
    h2: 'R$99,90/Mês*',
    price: '99,90',
    text: 'text-primary',
    bg: 'from-secondary to-secondary/60',
    hover: 'hover:bg-gradient-to-b hover:from-primary hover:to-primary/60',
    icons: [
      { src: '/4.png', alt: 'Click Beneficios' },
      { src: '/3.png', alt: 'Lev Educa' },
    ],
  },
  {
    h1: '450 MB',
    id: 'form_450mb',
    h2: 'R$119,90/Mês*',
    price: '119,90',
    text: 'text-secondary',
    offer: true,
    bg: 'from-primary to-primary/60',
    hover: 'hover:bg-gradient-to-b hover:from-secondary hover:to-secondary/60',
    icons: [
      { src: '/4.png', alt: 'Click Beneficios' },
      { src: '/3.png', alt: 'Lev Educa' },
      { src: '/5.png', alt: 'Deezer' },
      { src: '/2.png', alt: 'Plataforma Qualifica' },
    ],
  },
  {
    h1: '650 MB',
    id: 'form_650mb',
    h2: 'R$139,90/Mês*',
    price: '139,90',
    text: 'text-primary',
    bg: 'from-secondary to-secondary/60',
    hover: 'hover:bg-gradient-to-b hover:from-primary hover:to-primary/60',
    icons: [
      { src: '/4.png', alt: 'Click Beneficios' },
      { src: '/3.png', alt: 'Lev Educa' },
      { src: '/5.png', alt: 'Deezer' },
      { src: '/2.png', alt: 'Plataforma Qualifica' },
      { src: '/1.png', alt: 'Streming Watch' },
    ],
  },
];
