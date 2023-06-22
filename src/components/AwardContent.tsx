import Image from 'next/image';

export default function AwardContent() {
  return (
    <section className="mx-auto my-10 grid w-1/2 grid-cols-3 gap-8 max-lg:-mt-5 max-lg:grid-cols-1">
      {awards.map(({ src, alt }) => (
        <Image key={alt} src={src} alt={alt} width={300} height={300} />
      ))}
    </section>
  );
}

const awards = [
  { src: '/Frame.svg', alt: 'premio de melhor velocidade' },
  { src: '/Frame(1).svg', alt: 'premio de melhor provedor' },
  { src: '/Frame(2).svg', alt: 'premio de melhor satisfação' },
];