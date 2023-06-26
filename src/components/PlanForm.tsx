'use client';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

type Props = {
  price: string;
  h1: string;
};

const formSchema = z.object({
  name: z
    .string()
    .nonempty('Este campo precisa ser preenchido')
    .max(50, 'Limite máximo de 50 caracteres atingido'),
  email: z
    .string()
    .nonempty('Este campo precisa ser preenchido')
    .email('E-mail invalido!')
    .toLowerCase(),
  phone: z.string().nonempty('Este campo precisa ser preenchido'),
});

type FormData = z.infer<typeof formSchema>;

export default function PlanFormR({ price, h1 }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [openMessage, setOpenMessage] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const personData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
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
        title: data.name,
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

      setOpenMessage(true);
    } catch (error) {
      console.error('Erro ao criar negócio:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-[600px] w-[450px] p-2 text-primary max-lg:h-[500px] max-lg:w-[300px]"
    >
      {!openMessage ? (
        <div className="mx-auto mt-5 flex w-3/4 flex-col items-center gap-5 text-center text-lg font-bold max-lg:gap-3">
          <h1 className="text-2xl max-lg:w-[300px] max-lg:text-lg">{`Legal! agora falta puco para você garantir nossa oferta de ${h1}!`}</h1>
          <h2 className="max-lg:w-[300px] max-lg:text-sm">
            Preencha o formulário para falar com nossa equipe
          </h2>
          <input
            className={clsx(
              'rounded border p-2 outline-none',
              errors.email ? 'border-red-700' : 'border-primary',
            )}
            type="text"
            {...register('name', {
              onBlur() {
                trigger('name');
              },
            })}
            placeholder="Nome completo:"
          />
          {errors.name && (
            <span className="text-sm text-red-700 max-lg:w-[300px]">⛔ {errors.name.message}</span>
          )}
          <input
            className={clsx(
              'rounded border p-2 outline-none',
              errors.email ? 'border-red-700' : 'border-primary',
            )}
            type="text"
            {...register('email', {
              onBlur() {
                trigger('email');
              },
            })}
            placeholder="Email:"
          />
          {errors.email && (
            <span className="text-sm text-red-700 max-lg:w-[300px]">⛔ {errors.email.message}</span>
          )}
          <input
            className={clsx(
              'rounded border p-2 outline-none',
              errors.email ? 'border-red-700' : 'border-primary',
            )}
            type="text"
            {...register('phone', {
              onBlur() {
                trigger('phone');
              },
            })}
            placeholder="Telefone:"
          />
          {errors.phone && (
            <span className="text-sm text-red-700 max-lg:w-[300px]">⛔ {errors.phone.message}</span>
          )}
          <button
            disabled={isSubmitting}
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
}
