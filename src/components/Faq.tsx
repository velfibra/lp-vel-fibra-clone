import FaqItem from './FaqItem';
import HelpSvg from './HelpSvg';

export default function Faq() {
  return (
    <section className="mb-20 mt-40 flex h-fit flex-col gap-7 p-6 text-white">
      <h1 id="help" className="text-center text-4xl font-bold text-shadow max-lg:text-2xl">
        Duvidas Frequentes
      </h1>
      <h2 className="-mt-4 text-center text-xl max-lg:text-center max-lg:text-base">
        A Vel Fibra responde as principais perguntas sobre nossos serviços e cobertura.
      </h2>
      <div className="mx-auto my-5 flex w-[80%] items-center justify-evenly max-lg:flex-col max-lg:gap-6">
        {/* <HelpSvg /> */}
        <div className="w-1/2 max-lg:w-screen max-lg:p-5">
          {texts.map(({ question, answer }) => (
            <FaqItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

const texts = [
  {
    question: 'Se eu contratar a internet no meio do mês, terei que pagar o valor do mês inteiro?',
    answer:
      'Se você contratar a Vel Fibra no meio ou final do mês, você irá pagar apenas o valor proporcional de consumo da sua internet fibra ótica.',
  },
  {
    question: 'Como saber se a Vel atende no meu endereço?',
    answer:
      'Basta informar o seu CEP, o número da sua residência, o seu nome e o seu celular em nossas Redes Sociais e Whatsapp. Com essas informações, nossos consultores conseguem verificar a cobertura e descobrir os planos disponíveis na sua região.',
  },
  {
    question: 'A Vel Fibra oferece uma conexão estável para jogos online?',
    answer:
      'A Vel Fibra é um provedor de internet que se orgulha de oferecer uma conexão estável e de alta velocidade, ideal para jogos online. Nossa infraestrutura de rede avançada e tecnologia de ponta garantem baixa latência e velocidades rápidas de download e upload, proporcionando uma experiência suave e sem interrupções para os jogadores',
  },
  {
    question: 'Como posso contratar a Vel Fibra?',
    answer:
      'Você pode contratar a Vel Fibra direto pelo site, basta escolher o seu plano acima e clicar em ‘Contrate agora’. Você também pode contratar pelo número (91)3085-3190.',
  },
  {
    question: 'Onde posso ter suporte da Vel Fibra?',
    answer:
      'Você poderá falar com um de nossos especialistas através do WhatsApp (91)3085-3190, por direct em nossas redes sociais ou realizar seu auto atendimento na Área do Cliente neste site ou através do aplicativo da Vel Fibra.',
  },
];
