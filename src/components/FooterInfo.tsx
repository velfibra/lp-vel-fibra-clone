import Image from 'next/image';

export default function FooterInfo() {
  return (
    <>
      <div className="-mb-3 flex flex-col items-center max-lg:w-full max-md:-ml-5">
        <Image
          className="max-lg:ml-6 xl:-ml-10"
          src={'/LOGO_VERTICAL.png'}
          alt="clickspeed logo white"
          width={200}
          height={167}
        />
        <p className="-ml-10 w-60 text-center font-semibold max-lg:ml-10 max-md:w-full">
          A internet que coloca você em primeiro lugar.
        </p>
      </div>
    </>
  );
}
