'use client';
import Image from 'next/image';
import FaqItem from './FaqItem';
import { useState } from 'react';
import ModaCondominium from './ModalCondominium';

export default function Condominium() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="mx-auto my-20 flex justify-center text-white max-lg:mx-auto max-lg:w-[95%] max-lg:flex-col xl:w-[90%] 2xl:w-[80%]">
      <div className="w-[40%] max-lg:hidden">
        <Image
          className="rounded-xl shadow-md shadow-black/80 xl:w-[400px] 2xl:w-[550px]"
          src={'/condominium.png'}
          alt="foto de apartamento"
          width={1080}
          height={1080}
        />
      </div>
      <div className="flex flex-col xl:w-[60%]">
        <h1 className="rise animate-fadeInUp font-bold text-shadow max-lg:text-center  max-lg:text-2xl xl:text-3xl 2xl:text-5xl">
          Leve a Vel Fibra para seu Condomínio
        </h1>
        <div className="lg:hidden">
          <Image
            className="mx-auto my-5 w-[280px] rounded-xl shadow-md shadow-black/80"
            src={'/condominium.png'}
            alt="foto de apartamento"
            width={1080}
            height={1080}
          />
        </div>
        <div className="my-10 max-lg:w-screen max-lg:p-5 2xl:w-[80%]">
          {texts.map(({ question, answer }) => (
            <FaqItem key={question} question={question} answer={answer} />
          ))}
        </div>
        <h1 className="rise mb-10 animate-fadeInUp font-semibold text-shadow max-lg:text-center max-lg:text-lg xl:text-xl 2xl:text-2xl">
          Aperte o Botão e entraremos em contato para mais informações
        </h1>
        <button
          onClick={() => openModal()}
          className={`h-14 w-[400px] self-center rounded-full bg-gradient-to-b from-secondary  via-secondary to-red-400 py-2 text-xl font-bold uppercase text-white shadow-md shadow-black/80 duration-500 hover:scale-105 max-lg:w-[75%] xl:mr-20`}
        >
          Falar com Consultor
        </button>
      </div>
      <ModaCondominium isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

const texts = [
  {
    question: 'Como funciona a instalação da internet nos condomínios?',
    answer:
      'A instalação da internet em condomínios é feita de maneira eficiente e profissional pela equipe da Vel Fibra. Normalmente, começamos com uma avaliação das necessidades específicas do seu condomínio e, em seguida, realizamos a instalação de infraestrutura adequada, como fibra óptica, roteadores, e switches. Garantimos que o processo seja o mais conveniente possível para os moradores.',
  },
  {
    question: 'Quais recursos de segurança estão incluídos na internet para condomínios?',
    answer:
      'A segurança é uma prioridade para nós na Vel Fibra. Nossos serviços de internet para condomínios incluem recursos avançados de segurança, como firewall, proteção contra malware e monitoramento constante da rede. Isso garante que sua conexão seja segura e confiável.',
  },
  {
    question: 'Quais são as vantagens da Vel fibra para condomínios?',
    answer:
      ' Uma das principais vantagens da Vel Fibra para condomínios é a nossa tecnologia de rede mesh avançada. Com a rede mesh, garantimos uma conexão de internet de alta velocidade e estabilidade em todas as áreas do seu condomínio, eliminando áreas com baixa cobertura. Nossa rede mesh inteligente ajusta-se automaticamente para garantir que todos os seus dispositivos estejam sempre conectados à melhor fonte de sinal, proporcionando uma experiência de internet sem interrupções. Além disso, a rede mesh da Vel Fibra é altamente escalável, o que significa que podemos atender a condomínios de diferentes tamanhos com facilidade. Com a Vel Fibra, você terá uma conexão confiável e rápida em todos os cantos do seu condomínio.',
  },
  {
    question: 'Como posso solicitar a instalação da internet da Vel Fibra no meu condomínio?',
    answer:
      'Para solicitar a instalação da internet da Vel Fibra no seu condomínio, basta clicar no botão "Falar com Consultor" abaixo. Um de nossos consultores especializados entrará em contato com você prontamente para discutir suas necessidades, agendar uma avaliação e fornecer todas as informações necessárias para iniciar o processo de instalação. Estamos ansiosos para oferecer a você uma conexão de alta velocidade e confiável para o seu condomínio.',
  },
];
