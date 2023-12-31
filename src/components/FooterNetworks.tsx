import Image from 'next/image';
import Link from 'next/link';

const networks = [
  { src: '/icons8-insta.svg', href: 'https://www.instagram.com/velfibra' },
  { src: '/icons8-facebook.svg', href: 'https://www.facebook.com/velfibra' },
  //   { src: '/icons8-twitter.svg', href: 'https://twitter.com/clickspeednet' },
  //   {
  //     src: '/icons8-linkedin.svg',
  //     href: 'https://www.linkedin.com/company/clickspeed-net/mycompany/',
  //   },
];

export default function FooteriNetworks() {
  return (
    <div className=" mt-5 flex  max-md:-ml-5 max-md:w-full max-md:justify-center">
      {networks.map((network) => (
        <Link key={network.src} href={network.href} target="_blank">
          <Image
            className="ml-2 w-9 hover:scale-110 hover:brightness-125"
            src={network.src}
            alt={network.src}
            width={50}
            height={50}
          />
        </Link>
      ))}
    </div>
  );
}
