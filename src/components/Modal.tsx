'use client';
import { useEffect, useRef, useState } from 'react';
import Form from './PlanForm';
import ViabilityForm from './VaibilityForm';
import InviabilityForm from './InviabvilityForm';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: string;
  h1?: string;
  id: string;
  wpp?: string;
}
export default function Modal({ isOpen, onClose, price, h1, id, wpp }: ModalProps) {
  const [viable, setViable] = useState(null);
  const [viabilityChecked, setViabilityChecked] = useState(false);
  const [address, setAddress] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);

  const handleViability = (bool: any) => {
    setViable(bool);
    setViabilityChecked(true);
  };

  const handleAddress = (formatedAddress: string) => {
    setAddress(formatedAddress);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      let target = event.target as HTMLElement | null;
      let isFormElement = false;

      while (target) {
        if (target.tagName === 'FORM') {
          isFormElement = true;
          break;
        }
        target = target.parentElement;
      }

      if (modalRef.current && !modalRef.current.contains(event.target as Node) && !isFormElement) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="z-10 rounded-lg bg-white p-6 " ref={modalRef}>
          <div className="flex justify-end">
            <button
              className="rounded-lg bg-secondary px-3 py-1 font-semibold text-white duration-500 hover:scale-105 hover:bg-primary"
              onClick={onClose}
            >
              X
            </button>
          </div>
          {!viabilityChecked ? (
            <ViabilityForm handleViability={handleViability} handleAddress={handleAddress} />
          ) : viable ? (
            <Form id={id} price={price} h1={h1} wpp={wpp} address={address} />
          ) : (
            <InviabilityForm address={address} />
          )}
        </div>
      </div>
    </>
  );
}
