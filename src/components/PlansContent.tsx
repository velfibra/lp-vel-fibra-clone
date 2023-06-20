import Card from './Card';
import CardContent from './CardContent';
import CardTitle from './CardTitle';
import Image from 'next/image';

export default function PlansContent() {
  return (
    <section className="mx-auto mb-10 max-w-[1580px] p-6">
      <div className="mb-10">
        <h1 className="text-center text-3xl font-bold uppercase text-primary">
          Conheça nosso planos
        </h1>
        <h3 className="text-center text-xl">
          Fuja do básico! Escolha o melhor plano de internet para você
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {plans.map(({ h1, h2, text, bg, hover, icons }) => (
          <Card className={`flex flex-col gap-3 p-10 ${text}`} key={h1}>
            <CardTitle>{h1}</CardTitle>
            <CardTitle>{h2}</CardTitle>
            <CardContent>
              <h3 className="text-center font-semibold">Instalação gratuita</h3>
              <hr className="mt-5 h-[2px] bg-black/40" />
              <h3 className="text-center font-semibold">Wi-fi Incluso</h3>
              <hr className="h-[2px] bg-black/40" />
              <div className="mt-10 flex justify-center gap-2">
                {icons?.map(({ src }) => (
                  <Image key={src} src={src} alt="Beneficio Click" width={40} height={40} />
                ))}
              </div>
              <h3 className="my-10 text-center font-semibold">*Valor com pontualidade</h3>
            </CardContent>
            <button
              className={`h-10 w-[60%] self-center rounded-lg bg-gradient-to-b ${bg} py-2 text-xl font-bold uppercase text-white shadow-md shadow-gray-500 duration-500 hover:scale-105 ${hover}`}
            >
              contratar
            </button>
          </Card>
        ))}
      </div>
    </section>
  );
}

const plans = [
  {
    h1: '350 MB',
    h2: 'R$99,90/Mês',
    text: 'text-primary',
    bg: 'from-secondary to-secondary/60',
    hover: 'hover:bg-gradient-to-b hover:from-primary hover:to-primary/60',
    icons: [{ src: '/4.png' }, { src: '/3.png' }],
  },
  {
    h1: '450 MB',
    h2: 'R$119,90/Mês',
    text: 'text-secondary',
    bg: 'from-primary to-primary/60',
    hover: 'hover:bg-gradient-to-b hover:from-secondary hover:to-secondary/60',
    icons: [{ src: '/4.png' }, { src: '/3.png' }, { src: '/5.png' }, { src: '/2.png' }],
  },
  {
    h1: '650 MB',
    h2: 'R$139,90/Mês',
    text: 'text-primary',
    bg: 'from-secondary to-secondary/60',
    hover: 'hover:bg-gradient-to-b hover:from-primary hover:to-primary/60',
    icons: [
      { src: '/4.png' },
      { src: '/3.png' },
      { src: '/5.png' },
      { src: '/2.png' },
      { src: '/1.png' },
    ],
  },
];
