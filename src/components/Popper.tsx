'use client';

import { useEffect } from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';

export interface PopperProps {
  open: boolean;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
  modal?: boolean;
  id?: string;
}

export default function Popper({
  open,
  modal = false,
  onClose,
  children,
  className,
  id,
}: PopperProps) {
  const ref = useClickOutside<HTMLDialogElement>(() => onClose && onClose(), id);

  useEffect(() => {
    if (!ref.current) return;

    const { current } = ref;
    if (open) {
      modal ? current.showModal() : current.show();
    } else {
      current.close();
    }
  }, [open, modal, ref]);

  return (
    <dialog
      ref={ref}
      onClick={({ target }) => onClose && target === ref.current && onClose()}
      className={className}
    >
      {children}
    </dialog>
  );
}
