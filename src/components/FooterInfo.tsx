import Image from 'next/image';

export default function FooterInfo() {
  return (
    <>
      <div className="-mb-3 flex flex-col items-center max-lg:w-full max-md:-ml-5">
        <Image
          className="max-lg:ml-6 xl:-ml-10"
          src={'/CLICK SPEED VERTICAL.png'}
          alt="clickspeed logo white"
          width={200}
          height={167}
        />
        <p className=" w-60 font-semibold max-lg:ml-10 max-lg:text-center max-md:w-full xl:ml-3">
          A internet que se garante.
        </p>
      </div>
    </>
  );
}
