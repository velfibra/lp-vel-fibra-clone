type Props = {
  children: React.ReactNode;
};

export default function CardContent({ children }: Props) {
  return <div className="text-md w-full p-2 text-left xl:text-xl 2xl:text-2xl">{children}</div>;
}
