import Image from 'next/image';

const links = [
  { name: 'QUEM SOMOS', link: 'https://clickspeednet.com.br/quem-somos/' },
  { name: 'NOSSOS PLANOS', link: 'https://clickspeednet.com.br/nossos-planos/' },
  { name: 'lOCALIZAÇÃO', link: 'https://clickspeednet.com.br/localizacao/' },
  { name: 'INDIQUE E GANHE', link: 'https://clickspeednet.com.br/indique-e-ganhe/' },
];

export default function FooterInfo() {
  return (
    <>
      <div className="flex flex-col max-md:-ml-5 max-md:w-full max-md:items-center">
        <Image
          src={'/CLICK SPEED VERTICAL@4x 1.png'}
          alt="clickspeed logo white"
          width={200}
          height={200}
        />
        <p className="w-60 font-semibold max-lg:ml-10 max-lg:text-center max-md:w-full">
          Provedor de Internet. O melhor da internet na sua casa.
        </p>
      </div>
      <div className="flex-col font-semibold max-md:w-full max-md:items-center">
        <p className="ml-3 text-left font-bold  max-md:mt-5 max-md:text-center">OUTROS LINKS</p>
        <ul className="flex flex-col items-start  max-md:items-center max-md:text-xs">
          {links.map((link) => (
            <li className="p-3 opacity-60 hover:opacity-100" key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
