'use client';
import { useState } from 'react';
import axios from 'axios';

//253346914a07d3fe50e97299e4063f10d063fc44

const Form = () => {
  const [value, setValue] = useState('');
  const [personName, setPersonName] = useState('');
  const [personEmail, setPersonEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Criar a pessoa primeiro
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

      // Criar o negócio vinculado à pessoa
      const dealData = {
        title: personName,
        value,
        person_id: personId,
        pipeline_id: 2,
        visible_to: 3,
      };

      const createDealResponse = await axios.post('https://api.pipedrive.com/v1/deals', dealData, {
        params: {
          api_token: '253346914a07d3fe50e97299e4063f10d063fc44',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Negócio criado com sucesso:', createDealResponse.data);

      setValue('');
      setPersonName('');
      setPersonEmail('');
    } catch (error) {
      console.error('Erro ao criar negócio:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Valor"
        required
      />
      <input
        type="text"
        value={personName}
        onChange={(e) => setPersonName(e.target.value)}
        placeholder="Nome da pessoa"
        required
      />
      <input
        type="email"
        value={personEmail}
        onChange={(e) => setPersonEmail(e.target.value)}
        placeholder="Email da pessoa"
        required
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
