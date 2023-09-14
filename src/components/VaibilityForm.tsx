'use client';
import { useState } from 'react';
import { useForm, validate, resolver } from '@/hooks/useForm';
import TextField from './TextField';
import Image from 'next/image';
import Loading from './Loading';

interface Props {
  handleViability: (bool: boolean | null) => void;
  handleAddress: (formatedAddress: string) => void;
}

interface FormInputs {
  CEP: string;
  address: string;
}

const schema = {
  CEP: validate().required('Campo obrigatório').min(5, 'CEP inválido').max(9, 'CEP inválido'),
  address: validate().min(5, 'Endereço inválido').max(60, 'Endereço inválido'),
};

export default function ViabilityForm({ handleViability, handleAddress }: Props) {
  const { register, handleSubmit, errors, isSubmitting, setValue } = useForm<FormInputs>({
    resolver: resolver(schema),
  });
  const [viability, setViability] = useState<boolean | null>(null);
  const [street, setStreet] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2R1bGUiOiJhcGkiLCJ1c2VyIjoiNjBhYmJmODNhNWFhYjcwMDE2ZWQ1YmJiIiwiY3JlYXRpb25EYXRlIjoiMjAyMy0wOS0wNlQxNDozNzozOC40ODFaIiwiaWF0IjoxNjk0MDExMDU4fQ.sfyYBhHApXHyTcn-KDO0AKTNj5mUKAY3fy1Ady5Y960';

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const onback = async () => {
    setViability(null);
    setShowForm(true);
    setValue('CEP', ''); // Substitua 'CEP' pelo nome do campo que deseja redefinir
    setValue('address', '');
  };

  const handleGeocode = async (data: FormInputs) => {
    const formattedAddress = `${data.CEP}+${data.address}`;
    setShowForm(false);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          formattedAddress,
        )}&key=AIzaSyCqE-rV7iurqKaFHaYfSLhaJ_4Qed5W0nc`,
      );
      const responseData = await response.json();

      if (responseData.results && responseData.results.length > 0) {
        const location = responseData.results[0].geometry.location;
        const streetAPI = responseData.results[0].formatted_address;
        setStreet(streetAPI);
        handleAddress(streetAPI);

        const viable = await fetch(
          `https://clickspeed.ozmap.com.br:9994/api/v2/ftth-viability/radius?lat=${location.lat}&lng=${location.lng}`,
          {
            headers: headers,
            method: 'GET',
          },
        );
        const viabilityResponse = await viable.json();
        setViability(viabilityResponse.viable);
      } else {
        console.error('No results found');
      }
    } catch (error) {
      console.error('Error fetching geocode:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleGeocode)}
      className="flex h-[500px] w-[430px] flex-col justify-center text-primary max-lg:h-[400px] max-lg:w-[300px]"
    >
      {showForm ? (
        <div className="mt-10 flex flex-col items-center gap-5 p-2">
          <h1 className="text-center text-2xl font-semibold max-lg:w-[300px] max-lg:text-lg">
            Consulte sua viabilidade
          </h1>
          {inputs.map(({ name, placeHolder, ...props }) => (
            <div key={name} className="mx-auto flex w-[70%] flex-col">
              <TextField {...register(name)} error={Boolean(errors[name])} {...props}>
                {placeHolder}
              </TextField>
              {errors[name] && <span className="text-xs text-red-700">⛔ {errors[name]}</span>}
            </div>
          ))}
          <button
            className="mt-7 h-11 w-fit self-center rounded-lg bg-gradient-to-b from-secondary to-secondary/60 px-2 font-bold uppercase text-white shadow-md shadow-gray-500 duration-500 hover:scale-105 max-lg:w-[90%] max-lg:text-sm"
            type="submit"
            disabled={isSubmitting || isLoading}
          >
            Verificar
          </button>
        </div>
      ) : (
        <div className="my-10 flex flex-col items-center">
          {isLoading ? (
            <Loading />
          ) : viability !== null ? (
            viability ? (
              <div className="font flex w-[90%] flex-col items-center text-center text-lg">
                <Image
                  src={'/VEL-FIBRA-VERTICAL-LETTERING-BRANCO 1 (2).png'}
                  alt="logo da Vel"
                  width={200}
                  height={200}
                />
                <p>Olá</p>
                <p className="mx-auto my-5 text-left">
                  Boas notícias! Verificamos que seu endereço em{' '}
                  <span className="font-bold">{street}</span>, já pode receber a melhor internet da
                  região.
                </p>
                <button
                  className="mt-7 h-11 w-fit self-center rounded-lg bg-gradient-to-b from-secondary to-secondary/60 px-2 font-bold uppercase text-white shadow-md shadow-gray-500 duration-500 hover:scale-105 max-lg:w-[90%] max-lg:text-sm"
                  onClick={() => handleViability(true)}
                >
                  Avançar
                </button>
              </div>
            ) : (
              <div className="font flex w-[90%] flex-col items-center text-center text-lg">
                <Image
                  src={'/VEL-FIBRA-VERTICAL-LETTERING-BRANCO 1 (2).png'}
                  alt="logo da Vel"
                  width={200}
                  height={200}
                />
                <p>Olá</p>
                <p className="mx-auto my-2 text-left text-base">
                  Poxa, que pena mas seu endereço <span className="font-bold">{street}</span> não
                  possui viabilidade no momento. Mas não se preocupe, clique em{' '}
                  <span className="font-bold"> Avançar</span> e insira seu número que entraremos em
                  contato assim que tivermos viabilidade no seu endereço. Obrigado!
                </p>
                <button
                  className="my-2 h-11 w-fit self-center rounded-lg bg-gradient-to-b from-secondary to-secondary/60 px-2 font-bold uppercase text-white shadow-md shadow-gray-500 duration-500 hover:scale-105 max-lg:w-[90%] max-lg:text-sm"
                  onClick={() => handleViability(false)}
                >
                  Avançar
                </button>
                <p className="mx-auto my-2 text-left text-base">
                  Caso o endereço esteja errado, aperte voltar e consulte novamente a
                  disponibilidade
                </p>
                <button
                  type="button"
                  className="my-2 h-11 w-fit self-center rounded-lg bg-gradient-to-b from-secondary to-secondary/60 px-2 font-bold uppercase text-white shadow-md shadow-gray-500 duration-500 hover:scale-105 max-lg:w-[90%] max-lg:text-sm"
                  onClick={() => onback()}
                >
                  Voltar
                </button>
              </div>
            )
          ) : null}
        </div>
      )}
    </form>
  );
}

const inputs = [
  { name: 'address', placeHolder: 'Seu endereço' },
  { name: 'CEP', placeHolder: 'Seu CEP' },
] as const;
