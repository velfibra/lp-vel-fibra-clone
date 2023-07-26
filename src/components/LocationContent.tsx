export default function LocationContent() {
  return (
    <section className="rise my-20 animate-fadeInUp max-lg:h-[580px] xl:mx-auto xl:h-[500px] xl:w-[80%] 2xl:h-[600px]">
      <h1 className="rise mb-5 animate-fadeInUp text-center text-3xl font-bold uppercase text-white max-lg:text-2xl">
        Estamos por toda Belém!
      </h1>
      <iframe
        className="mx-auto shadow-gray-700 xl:rounded-lg xl:shadow-md"
        src="https://www.google.com/maps/d/u/0/embed?mid=1dGIU8AyDYq2LeRQs6hw4ajel6ant_d0&ehbc=2E312F"
        width="100%"
        height="100%"
      ></iframe>
    </section>
  );
}
