'use client';
import { useForm, validate, resolver } from '@/hooks/useForm';
import { useState } from 'react';
import { fetchEmail, postDeal, postPerson } from '@/utils/server';
import SuceffullyMessage from './SucessfullyMessage';
import TextField from './TextField';
import Loading from './Loading';

type Props = {
  h1?: string;
  address?: string;
};

interface FormInputs {
  condomínio: string;
  name: string;
  phone: string;
}

const schema = {
  name: validate()
    .required('Campo obrigatório')
    .min(3, 'O campo precisa ter no mínimo 3 letras')
    .max(50, 'Limite máximo de 50 caracteres atingido'),
  condomínio: validate().required('Campo obrigatório'),
  phone: validate().min(10, 'Número de telefone inválido').max(12, 'Número de telefone inválido'),
};

export default function CondominiumForm({ address }: Props) {
  const { register, handleSubmit, errors, isSubmitting, setValue } = useForm<FormInputs>({
    resolver: resolver(schema),
  });
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);
    try {
      const personData = {
        name: data.name,
        phone: data.phone,
      };

      const personResponse = await postPerson(personData);
      const personId = personResponse;

      const dealData = {
        title: data.name,
        value: '0',
        person_id: personId,
        pipeline_id: 2,
        visible_to: 3,
        '2dc9ddcb4b9b30336f9bc7ebace4b672a702baf2': address,
        '0f00af705d1c598874bec0e2ccebe58df2a39697': data.condomínio,
        '489d1f8ec764001bc871ac69de95ddd24256fe68': 'ADS',
      };

      await postDeal(dealData);
      setOpenMessage(true);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!message ? (
        <form
          id="form_350mb"
          onSubmit={handleSubmit(onSubmit)}
          className="h-[500px] w-[430px] p-2 text-primary max-lg:h-[400px] max-lg:w-[300px]"
        >
          {!openMessage ? (
            <div className="flex flex-col gap-5">
              <div className="text-center font-bold">
                <h1 className="text-2xl max-lg:w-[300px] max-lg:text-lg">
                  Legal! Agora falta pouco para adquirir a melhor internet!
                </h1>
                <h2 className="max-lg:w-[300px] max-lg:text-sm">
                  Preencha o formulário para falar com nossa equipe.
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
  { name: 'condomínio', placeHolder: 'Condomínio' },
  { name: 'phone', placeHolder: 'Telefone' },
] as const;
