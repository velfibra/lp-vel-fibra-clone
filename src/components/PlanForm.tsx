'use client';
import clsx from 'clsx';
import { useForm, validate, resolver } from '@/hooks/useForm';
import { useState } from 'react';
import { fetchEmail, postDeal, postPerson } from '@/utils/server';
import SuceffullyMessage from './SucessfullyMessage';
import TextField from './TextField';

type Props = {
  price: string;
  h1?: string;
  id: string;
  wpp?: string;
};

interface FormInputs {
  email: string;
  name: string;
  phone: string;
}

const schema = {
  name: validate()
    .required('Campo obrigatório')
    .min(3, 'O campo precisa ter no mínimo 3 letras')
    .max(50, 'Limite máximo de 50 caracteres atingido'),
  email: validate().required('Campo obrigatório').email('Email inválido'),
  phone: validate().min(10, 'Número de telefone inválido').max(12, 'Número de telefone inválido'),
};

export default function PlanForm({ id, price, h1, wpp }: Props) {
  const { register, handleSubmit, errors, isSubmitting, setValue } = useForm<FormInputs>({
    resolver: resolver(schema),
  });
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const [chosenPrice, setChosenPrice] = useState(price);
  const [isChecked, setIsChecked] = useState(false);
  const [WhatsApp, setWhatsApp] = useState('');

  const handleCheckboxChange = (price: string, wpp?: string) => {
    setIsChecked(!isChecked);
    setChosenPrice(price);
    setWhatsApp(wpp || '');
  };

  const onSubmit = async (data: FormInputs) => {
    const emailExist = await fetchEmail(data.email);
    if (emailExist) return setMessage(true);

    const personData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      last_name: WhatsApp,
    };

    const personResponse = await postPerson(personData);
    const personId = personResponse;

    const dealData = {
      title: data.name,
      value: chosenPrice,
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
              {h1 ? (
                <h1 className="text-2xl max-lg:w-[300px] max-lg:text-lg">{`Legal! agora falta pouco para você garantir nossa oferta de ${h1}!`}</h1>
              ) : (
                <h1 className="text-2xl max-lg:w-[300px] max-lg:text-lg">
                  Legal! Agora falta pouco para assinar sua internet!
                </h1>
              )}

              <h2 className="max-lg:w-[300px] max-lg:text-sm">
                Preencha o formulário para falar com nossa equipe
              </h2>
              {inputs.map(({ name, placeHolder, ...props }) => (
                <div key={name} className="flex w-full flex-col">
                  <TextField {...register(name)} error={Boolean(errors[name])} {...props}>
                    {placeHolder}
                  </TextField>
                  {errors[name] && <span className="text-xs text-red-700">⛔ {errors[name]}</span>}
                </div>
              ))}
              {!h1 && !wpp && (
                <div className="flex w-full justify-evenly">
                  {prices.map(({ plan, price }) => (
                    <label htmlFor="" key={plan}>
                      {plan}
                      <input
                        className="w-6"
                        type="radio"
                        name="option"
                        onChange={() => handleCheckboxChange(price)}
                      />
                    </label>
                  ))}
                </div>
              )}
              {wpp && (
                <div className="flex w-full justify-evenly">
                  {contact.map(({ method, price }) => (
                    <label htmlFor="" key={method}>
                      {method}
                      <input
                        className="w-6"
                        type="radio"
                        name="option"
                        onChange={() => handleCheckboxChange(price, method)}
                      />
                    </label>
                  ))}
                </div>
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
            <SuceffullyMessage />
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
  { name: 'name', placeHolder: 'Nome' },
  { name: 'email', placeHolder: 'Email' },
  { name: 'phone', placeHolder: 'Telefone' },
] as const;

const prices = [
  { plan: `350MB`, price: '99,90' },
  { plan: `450MB`, price: '119,90' },
  { plan: `650MB`, price: '139,90' },
];

const contact = [
  { method: `Me chame no WhatsApp`, price: '0' },
  { method: `Me Ligue`, price: '0' },
];
