'use client';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

//253346914a07d3fe50e97299e4063f10d063fc44
type Props = {
  price: string;
  h1: string;
};

const Form = ({ price, h1 }: Props) => {
  const [personName, setPersonName] = useState('');
  const [personEmail, setPersonEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [openMessage, setOpenMessage] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const personData = {
        name: personName,
        email: personEmail,
        phone,
      };

      const createPersonResponse = await axios.post(
        'https://api.pipedrive.com/v1/persons',
        personData,
        {
          params: {
            api_token: '253346914a07d3fe50e97299e4063f10d063fc44',
          },
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const personId = createPersonResponse.data.data.id;
      const dealData = {
        title: personName,
        value: price,
        person_id: personId,
        pipeline_id: 2,
        visible_to: 3,
      };

      await axios.post('https://api.pipedrive.com/v1/deals', dealData, {
        params: {
          api_token: '253346914a07d3fe50e97299e4063f10d063fc44',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setPersonName('');
      setPersonEmail('');
      setPhone('');
      setOpenMessage(true);
    } catch (error) {
      console.error('Erro ao criar negócio:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-[500px] w-[450px] p-2 text-primary max-lg:w-[300px]">
      {!openMessage ? (
        <div className="mx-auto mt-5 flex w-3/4 flex-col items-center gap-5 text-center text-lg font-bold">
          <h1 className="text-2xl max-lg:w-[300px] max-lg:text-xl">{`Legal! agora falta puco para você garantir nossa oferta de ${h1}!`}</h1>
          <h2 className="max-lg:w-[300px]">Preencha o formulário para falar com nossa equipe</h2>
          <input
            className="rounded-lg  bg-secondary/80 p-1 text-white placeholder:text-white/80 focus:bg-primary/80"
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            placeholder="Nome completo:"
            required
          />
          <input
            className="rounded-lg  bg-secondary/80 p-1 text-white placeholder:text-white/80 focus:bg-primary/80"
            type="email"
            value={personEmail}
            onChange={(e) => setPersonEmail(e.target.value)}
            placeholder="Email:"
            required
          />
          <input
            className="rounded-lg  bg-secondary/80 p-1 text-white placeholder:text-white/80 focus:bg-primary/80"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone:"
            required
          />
          <button
            className="mt-7 h-11 w-fit self-center rounded-lg bg-gradient-to-b from-secondary to-secondary/60 px-2 font-bold uppercase text-white shadow-md shadow-gray-500 duration-500 hover:scale-105 max-lg:w-[90%] max-lg:text-sm"
            type="submit"
          >
            Falar com Consultor
          </button>
        </div>
      ) : (
        <div className="my-10 flex flex-col items-center gap-5 text-center text-lg font-semibold">
          <Image
            src={'/CLICK SPEED VERTICAL@4x 1.png'}
            alt="logo da clickSpeed"
            width={200}
            height={200}
          />
          <p className="max-lg:w-[300px]">
            Sua solicitação foi enviada com sucesso, em breve um dos nossos consultores irá entrar
            em contato com você.
          </p>
        </div>
      )}
    </form>
  );
};

export default Form;
