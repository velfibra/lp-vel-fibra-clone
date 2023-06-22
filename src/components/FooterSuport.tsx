import Image from 'next/image';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

export default function FooterSuport({ children }: Props) {
  return (
    <>
      <div className="-ml-3 flex-col max-lg:w-full max-md:mt-5 max-md:items-center">
        <h1 className="text-left font-bold max-lg:w-full max-md:mt-3 max-md:text-center">
          ATENDIMENTO
        </h1>
        <div className="mt-3 flex max-lg:w-full max-lg:justify-start">
          <MapPinIcon className="w-7" />
          <p className="ml-2">Rua Br. Igarapé Mirim, 935 - Guamá.</p>
        </div>
        <div className="mt-3 flex max-lg:w-full max-lg:justify-start">
          <MapPinIcon className="w-7" />
          <p className="ml-2">R. Ajax de Oliveira, 672 - Bengui.</p>
        </div>
        <div className="mt-3 flex max-lg:w-full max-lg:justify-start max-md:mt-2">
          <PhoneIcon className="w-7" />
          <p className="ml-2">(91)3085-3190</p>
        </div>
      </div>
      <div className="ml-2 flex-col max-lg:w-full max-lg:justify-start max-md:ml-0">
        <h1 className="text-left font-bold max-md:mt-2 max-md:text-center">
          NOS SIGA NAS REDES SOCIAIS
        </h1>
        {children}
        <h1 className="mt-5 text-left font-bold max-md:-ml-7 max-md:mt-5 max-md:text-center">
          BAIXE NOSSO APP!
        </h1>
        <div className="mt-5 flex max-lg:-ml-4 max-lg:w-full max-md:flex-col max-md:items-center">
          <Link href={'https://play.google.com/store/search?q=clickspeed&c=apps'} target="_blank">
            <Image
              className="ml-2 w-24 max-md:mb-5 max-md:w-52"
              src={'/disponivel-google-play-badge-1-1536x455.png'}
              alt="icon-insta"
              width={500}
              height={500}
            />
          </Link>
          <Link href={'https://apps.apple.com/br/app/click-speed/id1522351159'} target="_blank">
            <Image
              className="ml-2 w-24 max-md:mb-5 max-md:w-52"
              src={'/disponivel-na-app-store-botao-1024x303.png'}
              alt="icon-insta"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
