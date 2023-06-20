type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function CardTitle({ children, href }: Props) {
  return (
    <h1 className="mb-5 w-full text-center text-6xl font-bold max-lg:text-5xl" id={href}>
      {children}
    </h1>
  );
}
