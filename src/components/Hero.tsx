export default function Hero() {
  return (
    <div className="flex h-[800px] flex-col bg-gray-500 max-lg:h-[450px]">
      <div className="ml-20 mt-20 h-fit text-7xl max-lg:ml-2 max-lg:mt-5 max-lg:text-2xl">
        <div className="animate-fadeInLeft animation-delay-300">
          <h1 className="text-white">Cansado de ficar</h1>
          <h1 className="mb-3 mt-4 w-fit rounded-xl bg-white p-2 uppercase text-gray-500">sem</h1>
          <h1 className="w-fit rounded-xl bg-white p-2 uppercase text-gray-500">internet?</h1>
        </div>
        <div className="animate-fadeInLeft text-4xl animation-delay-700 max-lg:text-lg">
          <h2 className="mt-4 w-fit text-white">Então vem para a Click Speed</h2>
          <h2 className="w-fit text-white">a internet Fibra Ótica mais rapida de Belém!</h2>
          <button className="mt-10 rounded-xl bg-secondary p-3 text-4xl font-semibold uppercase text-white shadow-md shadow-gray-800 duration-500 hover:scale-105 hover:bg-primary max-lg:mt-3 max-lg:text-xl">
            contratar agora
          </button>
        </div>
      </div>
      <h3 className="mt-44 animate-fadeInUp text-center text-3xl font-bold text-white animation-delay-1000 max-lg:mt-16 max-lg:text-lg">
        VIVA MUITO MAIS CONECTADO
      </h3>
    </div>
  );
}
