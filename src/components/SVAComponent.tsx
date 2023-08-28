import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function SVAComponent() {
  return (
    <section className="mx-auto text-white">
      <div className="mx-auto flex w-[80%] items-center max-lg:flex-col">
        <div className="mx-auto flex flex-col max-lg:mt-5 xl:mt-20 xl:w-[30%]">
          <h1 className="mb-5 text-left text-5xl font-bold text-white text-shadow max-lg:text-2xl">
            Viva a experiência de ter as vantagens da Vel Fibra
          </h1>
          <div className=" mt-2 flex flex-col gap-5 text-xl max-lg:my-10">
            <p>
              Tenha a melhor experiencia da conexão fibra óptica de Belém dentro sa sua casa, Seja
              para filmes, séries, trabalho ou para game, e conte com todos os benefícios como:
            </p>
            <ul>
              {infos.map(({ info }) => (
                <li key={info}>
                  <div className="flex gap-2">
                    <CheckCircleIcon className="w-7 text-secondary" />
                    {info}
                  </div>
                </li>
              ))}
            </ul>
            <p className="font-bold">A Vel Fibra é a internet que coloca você em primeiro lugar!</p>
          </div>
        </div>
        <div className="rise animate-fadeIn animation-delay-300 xl:w-1/2">
          <Image
            src={'/IMG-BENEFICIOS.png'}
            width={961}
            height={932}
            alt="influencer apontando para premios"
          />
        </div>
      </div>
    </section>
  );
}

const infos = [
  { info: 'INSTALAÇÃO GRÁTIS' },
  { info: 'INTERNET ILIMITADA' },
  { info: 'SUPORTE ESPECIALIZADO' },
];
