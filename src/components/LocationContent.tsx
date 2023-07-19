export default function LocationContent() {
  return (
    <section className="max-lg:h-[580px] xl:h-[500px] 2xl:h-[600px]">
      <iframe
        className="mx-auto rounded-lg shadow-md shadow-gray-700"
        src="https://www.google.com/maps/d/u/0/embed?mid=1dGIU8AyDYq2LeRQs6hw4ajel6ant_d0&ehbc=2E312F"
        width="80%"
        height="90%"
      ></iframe>
    </section>
  );
}
