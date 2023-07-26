import Image from 'next/image';

export default function SVAComponent() {
  return (
    <section className="mx-auto text-white">
      <div className="mx-auto flex w-[80%] items-center max-lg:flex-col">
        <div className="mx-auto flex flex-col max-lg:mt-5 xl:mt-20 xl:w-[30%]">
          <h1
            id="help"
            className="text-left font-bold text-shadow max-lg:text-xl xl:text-2xl 2xl:text-5xl"
          >
            Viva a experiência de ter as vantagens da Click Speed
          </h1>
          <div className=" mt-2 flex flex-col">
            {awards.map(({ src, alt, description }) => (
              <div className="flex items-center gap-5 max-lg:w-[90%] xl:my-2 2xl:my-5" key={alt}>
                <Image src={src} alt={alt} width={150} height={194} />
                <p className="-mr-14 w-[70%] text-left font-semibold max-lg:text-lg xl:-mr-28">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 max-lg:hidden">
          <Image
            src={'/IMG-BENEFICIOS (1).png'}
            width={961}
            height={932}
            alt="influencer apontando para premios"
          />
        </div>
      </div>
    </section>
  );
}

const awards = [
  {
    src: '/lev-qualifica.png',
    alt: 'premio de melhor velocidade',
    description:
      'Aproveite estes benefícios para fazer cursos online e ter mais certificações profissionais',
  },
  {
    src: '/DEEZER 1.png',
    alt: 'premio de melhor provedor',
    description: 'Música, rádio e podcasts personalizados com a sua vibe!',
  },
  {
    src: '/WATCH 1.png',
    alt: 'Melhor Internet Gamer em Belém',
    description: 'Tenha acesso aos principais títulos da Paramount.',
  },
];
