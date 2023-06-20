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
        'w-full border-[1px] border-black text-sm',
        flat || 'rounded-lg',
        trimmed || 'p-5',
      )}
    >
      {children}
    </div>
  );
}