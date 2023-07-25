type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function CardTitle({ children, href }: Props) {
  return (
    <h1
      className="absolute top-0 mx-4 -mt-6 w-[80%] rounded-full bg-white text-center text-5xl font-bold text-secondary max-lg:mb-3 max-lg:text-4xl"
      id={href}
    >
      {children}
    </h1>
  );
}
