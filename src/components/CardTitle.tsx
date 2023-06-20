type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function CardTitle({ children, href }: Props) {
  return (
    <h1 className="w-full text-center text-[16px] font-bold xl:mb-1 xl:text-4xl" id={href}>
      {children}
    </h1>
  );
}
