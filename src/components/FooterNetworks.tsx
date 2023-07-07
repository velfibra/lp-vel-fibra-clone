import Image from 'next/image';
import Link from 'next/link';

const networks = [
  { src: '/icons8-insta.svg', href: 'https://www.instagram.com/clickspeednet_/' },
  { src: '/icons8-facebook.svg', href: 'https://www.facebook.com/clickspeednet' },
  { src: '/icons8-twitter.svg', href: 'https://twitter.com/clickspeednet' },
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
