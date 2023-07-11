import Modal from './Modal';
import WhatsAppIcon from './icons/WhatsApp';

const phoneNumber = 559130853190;

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="hover: fixed bottom-3 right-0.5 z-50 text-[#40c351] duration-200 hover:scale-125 hover:text-[#29ff45]"
      target="_blank"
      aria-label="WhatsApp button"
      title="WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
