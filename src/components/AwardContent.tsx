import Image from 'next/image';

export default function AwardContent() {
  return (
    <section className="mx-auto  bg-award-image bg-cover text-white">
      <div className="mx-auto flex w-[80%] items-center max-lg:flex-col">
        <div className="w-1/2 max-lg:hidden">
          <Image
            className="rise animate-fadeIn animation-delay-300"
            src={'/IMG-COBERTURA.png'}
            width={961}
            height={932}
            alt="influencer apontando para premios"
          />
        </div>
        <div className="flex flex-col max-lg:mt-5 xl:mt-20 xl:w-1/2">
          <h1
            id="help"
            className="mx-auto text-center font-bold text-shadow max-lg:w-[95%] max-lg:text-xl xl:text-2xl 2xl:text-3xl"
          >
            A Click Speed é o provedor de internet mais premiado de Belém!
          </h1>
          <div className="mx-auto mt-2 flex flex-col">
            {awards.map(({ src, alt, description }) => (
              <div className="flex items-center gap-5 max-lg:w-[90%] xl:my-2 2xl:my-5" key={alt}>
                <Image
                  className="rise animate-fadeInUp max-lg:w-[70px] xl:h-[110px] xl:w-[80px] 2xl:h-[100] 2xl:w-[100]"
                  src={src}
                  alt={alt}
                  width={100}
                  height={194}
                />
                <h2 className=" rise -mr-14 w-full animate-fadeIn text-left font-semibold animation-delay-500 max-lg:text-lg xl:-mr-28 xl:text-xl 2xl:text-2xl">
                  {description}
                </h2>
              </div>
            ))}
          </div>
          <p className="my-5 text-center">Fonte: Melhor Plano Net (Pesquisa Nacional)</p>
        </div>
      </div>
    </section>
  );
}

const awards = [
  {
    src: '/award.png',
    alt: 'premio de melhor velocidade',
    description: 'Melhor velocidade de Belém',
  },
  {
    src: '/award.png',
    alt: 'premio de melhor provedor',
    description: 'Melhor Provedor de Belém',
  },
  {
    src: '/award.png',
    alt: 'Melhor Internet Gamer em Belém',
    description: 'Melhor Internet Gamer em Belém',
  },
];
