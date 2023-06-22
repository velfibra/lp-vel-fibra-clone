import Image from 'next/image';

export default function FooterInfo() {
  return (
    <>
      <div className="-mb-3 flex flex-col max-md:-ml-5 max-md:w-full max-md:items-center">
        <Image
          src={'/CLICK SPEED VERTICAL@4x 1.png'}
          alt="clickspeed logo white"
          width={200}
          height={200}
        />
        <p className="w-60 font-semibold max-lg:ml-10 max-lg:text-center max-md:w-full">
          A internet que se garante.
        </p>
      </div>
    </>
  );
}
