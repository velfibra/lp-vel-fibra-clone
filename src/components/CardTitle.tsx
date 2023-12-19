type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function CardTitle({ children, href }: Props) {
  return (
    <h1 className="rounded-full text-center font-sans text-[80px] font-bold" id={href}>
      {children}
    </h1>
  );
}
