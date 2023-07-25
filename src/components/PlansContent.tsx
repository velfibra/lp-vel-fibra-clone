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
    <section className="mx-auto mb-10 p-6 max-lg:w-full">
      <div className="mb-10">
        <h1
          id="plan"
          className="rise animate-fadeInUp text-center text-5xl font-bold text-white text-shadow max-lg:text-2xl"
        >
          Melhor plano de internet de Belém
        </h1>
        <h2 className="rise mb-28 mt-5 animate-fadeInUp text-center text-2xl text-white max-lg:text-center max-lg:text-base">
          Escolha sua Internet banda larga e tenha wi-fi para toda a Família!
        </h2>
      </div>
      <div className="mx-auto flex justify-between max-lg:flex-col xl:w-[90%] 2xl:w-[60%]">
        {plans.map(({ h1, h2, id, price, mt, bg, bgButton, hover, icons, offer }) => (
          <div key={h1}>
            <Card
              className={`rise my-5 flex ${mt} h-[450px] w-[350px] animate-fadeInUp flex-col gap-3 bg-${bg} py-10 text-white max-lg:h-[500px] max-lg:py-10`}
            >
              <CardTitle>{h1}</CardTitle>
              <h2 className="w-full text-center text-4xl font-bold max-lg:text-2xl ">{h2}</h2>
              <CardContent>
                <h3 className="text-center text-xl font-semibold max-lg:text-base">
                  Instalação grátis em 24 horas**
                </h3>
                <h3 className="text-center text-xl font-semibold max-lg:text-base">Wi-fi Grátis</h3>
                <div className="mt-5 flex justify-center gap-2 max-lg:mt-5">
                  {icons?.map(({ src, alt }) => (
                    <Image
                      className="rounded-full shadow-md shadow-gray-600 hover:scale-110"
                      key={src}
                      src={src}
                      alt={alt}
                      width={45}
                      height={45}
                    />
                  ))}
                </div>
                <h3 className="my-10 text-center text-xl font-semibold max-lg:my-2 max-lg:text-[10px]">
                  **Consulte viabilidade
                </h3>
              </CardContent>
              <button
                onClick={() => openModal(price, h1, id)}
                className={`h-14 w-[70%] self-center rounded-full bg-gradient-to-b max-lg:w-[75%] ${bgButton} py-2 text-xl font-bold uppercase text-white shadow-md shadow-black/80 duration-500 hover:scale-105  max-lg:h-11 max-lg:text-base ${hover}`}
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
      <p className="my-10 text-center font-semibold text-white">
        *Valor válido somente com pontualidade no pagamento.
      </p>
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
    bg: 'secondary',
    bgButton: 'from-primary to-primary/60',
    hover: 'hover:bg-gradient-to-b hover:from-primary hover:to-primary/60',
    icons: [{ src: '/3.png', alt: 'Lev Educa' }],
  },
  {
    h1: '450 MB',
    id: 'form_450mb',
    mt: 'xl:-mt-7',
    h2: 'R$119,90/Mês*',
    price: '119,90',
    text: 'text-secondary',
    offer: true,
    bg: 'primary',
    bgButton: 'from-secondary to-secondary/60',
    hover: 'hover:bg-gradient-to-b hover:from-secondary hover:to-secondary/60',
    icons: [
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
    bg: 'secondary',
    bgButton: 'from-primary to-primary/60',
    hover: 'hover:bg-gradient-to-b hover:from-primary hover:to-primary/60',
    icons: [
      { src: '/3.png', alt: 'Lev Educa' },
      { src: '/5.png', alt: 'Deezer' },
      { src: '/2.png', alt: 'Plataforma Qualifica' },
      { src: '/1.png', alt: 'Streming Watch' },
    ],
  },
];
