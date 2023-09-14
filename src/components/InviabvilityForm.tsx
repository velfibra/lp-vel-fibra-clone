'use client';
import { useForm, validate, resolver } from '@/hooks/useForm';
import { useState } from 'react';
import { fetchEmail, postDeal, postDealInviability, postPerson } from '@/utils/server';
import SuceffullyMessage from './SucessfullyMessage';
import TextField from './TextField';
import Loading from './Loading';

interface FormInputs {
  email: string;
  name: string;
  phone: string;
}

type Props = {
  address?: string;
};

const schema = {
  name: validate()
    .required('Campo obrigatório')
    .min(3, 'O campo precisa ter no mínimo 3 letras')
    .max(50, 'Limite máximo de 50 caracteres atingido'),
  email: validate().required('Campo obrigatório').email('Email inválido'),
  phone: validate().min(10, 'Número de telefone inválido').max(12, 'Número de telefone inválido'),
};

export default function InviabilityForm({ address }: Props) {
  const { register, handleSubmit, errors, isSubmitting, setValue } = useForm<FormInputs>({
    resolver: resolver(schema),
  });
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);
    const emailExist = await fetchEmail(data.email);
    if (emailExist) return setMessage(true);
    try {
      const personData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
      };

      const personResponse = await postPerson(personData);
      const personId = personResponse;

      const dealData = {
        title: data.name,
        value: '0',
        person_id: personId,
        stage_id: 12,
        visible_to: 3,
        '2dc9ddcb4b9b30336f9bc7ebace4b672a702baf2': address,
        '489d1f8ec764001bc871ac69de95ddd24256fe68': 'ADS',
      };

      await postDealInviability(dealData);
      setOpenMessage(true);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      id="form_350mb"
      onSubmit={handleSubmit(onSubmit)}
      className="h-[500px] w-[430px] p-2 text-primary max-lg:h-[400px] max-lg:w-[300px]"
    >
      {!openMessage ? (
        <div className="flex flex-col gap-5">
          <div className="text-center font-bold">
            <h2 className="max-lg:w-[300px] max-lg:text-sm">
              Preencha o formulário para que nossa equipe entre em contato com você assim que houver
              viabilidade no seu endereço.
            </h2>
          </div>
          {inputs.map(({ name, placeHolder, ...props }) => (
            <div key={name} className="mx-auto flex w-[70%] flex-col">
              <TextField {...register(name)} error={Boolean(errors[name])} {...props}>
                {placeHolder}
              </TextField>
              {errors[name] && <span className="text-xs text-red-700">⛔ {errors[name]}</span>}
            </div>
          ))}
          <button
            disabled={isSubmitting}
            className="mt-7 h-11 w-[250px] self-center rounded-lg bg-gradient-to-b from-secondary to-secondary/60 px-2 font-bold uppercase text-white shadow-md shadow-gray-500 duration-500 hover:scale-105 max-lg:w-[90%] max-lg:text-sm"
            type="submit"
          >
            {isLoading ? <Loading /> : 'Falar com Consultor'}
          </button>
        </div>
      ) : (
        <SuceffullyMessage />
      )}
    </form>
  );
}

const inputs = [
  { name: 'name', placeHolder: 'Nome' },
  { name: 'email', placeHolder: 'Email' },
  { name: 'phone', placeHolder: 'Telefone' },
] as const;
