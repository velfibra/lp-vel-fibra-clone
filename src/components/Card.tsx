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
        className,
        'h-[450px] w-[330px] shadow-md shadow-black/80',
        flat || 'rounded-3xl',
        trimmed || 'p-5',
      )}
    >
      {children}
    </div>
  );
}
