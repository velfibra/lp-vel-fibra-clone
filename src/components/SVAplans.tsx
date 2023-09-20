import Image from 'next/image';
import SvaSwiper from './SvaSwiper';

export default function SVAplans() {
  return (
    <section className="mx-auto my-20 bg-award-image bg-cover text-white">
      <h1 className="rise animate-fadeInUp text-center text-5xl font-bold text-white text-shadow max-lg:text-2xl">
        Escolha o melhor plano para você
      </h1>
      <div className="mx-auto flex items-center justify-center xl:w-[80%]">
        <Image
          className="rise w-1/2 animate-fadeIn animation-delay-300 max-lg:hidden"
          src={'/IMG-PREMIOS.png'}
          width={961}
          height={932}
          alt="influencer apontando para premios"
        />
        <SvaSwiper />
      </div>
    </section>
  );
}
