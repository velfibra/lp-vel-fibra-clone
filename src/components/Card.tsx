import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  flat?: boolean;
  trimmed?: boolean;
};

export default function Card({ children, className, flat = false, style, trimmed = false }: Props) {
  return (
    <div
      style={style}
      className={clsx(
        // 'h-[450px] w-[350px] shadow-md shadow-black/80'
        className,
        'h-[450px] shadow-md shadow-black/80 max-lg:w-[350px] xl:w-[280px] 2xl:w-[350px]',
        flat || 'rounded-3xl',
        trimmed || 'p-5',
      )}
    >
      {children}
    </div>
  );
}
