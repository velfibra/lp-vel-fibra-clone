import Image from 'next/image';
export default function SuceffullyMessage() {
  return (
    <div className="my-10 flex flex-col items-center gap-5 text-center text-lg font-semibold">
      <Image
        src={'/VEL-FIBRA-VERTICAL-LETTERING-BRANCO 1 (2).png'}
        alt="logo da Vel"
        width={200}
        height={200}
      />
      <p className="max-lg:w-[300px]">
        Sua solicitação foi enviada com sucesso, em breve um dos nossos consultores irá entrar em
        contato com você,
      </p>
    </div>
  );
}
