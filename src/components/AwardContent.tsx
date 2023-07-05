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
        {awards.map(({ src, alt }) => (
          <Image key={alt} src={src} alt={alt} width={300} height={300} />
        ))}
      </div>
    </section>
  );
}

const awards = [
  { src: '/Frame.svg', alt: 'premio de melhor velocidade' },
  { src: '/Frame(1).svg', alt: 'premio de melhor provedor' },
  { src: '/Frame(2).svg', alt: 'premio de melhor satisfação' },
];
