'use client';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import Image from 'next/image';
import { fetchEmail, postDeal, postPerson } from '@/utils/server';

type Props = {
  price: string;
  h1: string;
  id: string;
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

export default function PlanForm({ id, price, h1 }: Props) {
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
  const [message, setMessage] = useState(false);

  const onSubmit = async (data: FormData) => {
    const emailExist = await fetchEmail(data.email);
    if (emailExist) return setMessage(true);

    const personData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    const personResponse = await postPerson(personData);
    const personId = personResponse;

    const dealData = {
      title: data.name,
      value: price,
      person_id: personId,
      pipeline_id: 2,
      visible_to: 3,
    };

    await postDeal(dealData);
    setOpenMessage(true);
  };

  return (
    <>
      {!message ? (
        <form
          id={id}
          onSubmit={handleSubmit(onSubmit)}
          className="h-[600px] w-[450px] p-2 text-primary max-lg:h-[500px] max-lg:w-[300px]"
        >
          {!openMessage ? (
            <div className="mx-auto mt-5 flex w-3/4 flex-col items-center gap-5 text-center text-lg font-bold max-lg:gap-3">
              <h1 className="text-2xl max-lg:w-[300px] max-lg:text-lg">{`Legal! agora falta pouco para você garantir nossa oferta de ${h1}!`}</h1>
              <h2 className="max-lg:w-[300px] max-lg:text-sm">
                Preencha o formulário para falar com nossa equipe
              </h2>
              {inputs.map(({ name, placeHolder }) => (
                <div key={name} className="flex flex-col">
                  <input
                    className={clsx(
                      'rounded border p-2 outline-none',
                      errors.email ? 'border-red-700' : 'border-primary',
                    )}
                    type="text"
                    {...register(`${name}`, {
                      onBlur() {
                        trigger(`${name}`);
                      },
                    })}
                    placeholder={placeHolder}
                  />
                  {errors[name] && (
                    <span className="text-xs text-red-700">⛔ {errors[name]?.message}</span>
                  )}
                </div>
              ))}
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
                Sua solicitação foi enviada com sucesso, em breve um dos nossos consultores irá
                entrar em contato com você,
              </p>
              <span className="mt-20 text-sm">{message}</span>
            </div>
          )}
        </form>
      ) : (
        <p className="mt-5 w-[100%] text-center text-lg font-semibold text-primary">
          Já estamos analisando sua viabilidade, aguarde nosso contato ou busque atendimento via
          Suporte: 3085-3190
        </p>
      )}
    </>
  );
}

const inputs = [
  { name: 'name', placeHolder: 'Seu Nome Completo' },
  { name: 'email', placeHolder: 'Seu Email' },
  { name: 'phone', placeHolder: 'Seu Telefone' },
] as const;
