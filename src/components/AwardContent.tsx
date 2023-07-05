import Image from 'next/image';

export default function AwardContent() {
  return (
    <section>
      <h1
        id="help"
        className="text-center text-3xl font-bold uppercase text-primary max-lg:w-[95%] max-lg:text-2xl"
      >
        A Click Speed é o provedor de internet mais premiado de Belém!
      </h1>
      <div className="mx-auto my-10 grid w-1/2 grid-cols-3 gap-8 max-lg:grid-cols-1">
        {awards.map(({ src, alt, description }) => (
          <div className="flex flex-col items-center gap-5" key={alt}>
            <Image src={src} alt={alt} width={300} height={300} />
            <h2 className="-mr-28 w-full text-left text-gray-600">{description}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

const awards = [
  {
    src: '/Frame.svg',
    alt: 'premio de melhor velocidade',
    description: 'A Click tem internet mais rapida de Belém!',
  },
  {
    src: '/Frame(1).svg',
    alt: 'premio de melhor provedor',
    description: 'O melhor custo-benefício quando o assunto é Internet!',
  },
  {
    src: '/Frame(2).svg',
    alt: 'premio de melhor satisfação',
    description: 'A nossa prioridade é sua satisfação',
  },
];
