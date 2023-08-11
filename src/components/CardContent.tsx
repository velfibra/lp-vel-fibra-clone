type Props = {
  children: React.ReactNode;
};

export default function CardContent({ children }: Props) {
  return <div className=" flex flex-col text-left">{children}</div>;
}
