import FaqItem from './FaqItem';
import HelpSvg from './HelpSvg';

export default function Faq() {
  return (
    <section className="flex h-fit flex-col gap-7 p-6">
      <h1
        id="help"
        className="text-center text-3xl font-bold uppercase text-primary max-lg:text-2xl"
      >
        Tire suas dúvidas da melhor internet de Belém!
      </h1>
      <h2 className="-mt-4 text-center text-xl max-lg:text-center max-lg:text-base">
        A Click Speed responde as principais perguntas sobre nossos serviços e cobertura.
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
    question: 'Oque é fibra óptica?',
    answer:
      'A fibra ótica é uma estrutura de vidro cilíndrica, transparente, flexível e com dimensões microscópicas, parecidas com um fio de cabelo. É uma forma de transmissão que permite o tráfego de dados com velocidades próximas à velocidade da luz. O sinal da fibra óptica é transmitido por meio de reflexões de raios laser ao longo de todo o cabo, atingindo uma capacidade de transmissão única.',
  },
  {
    question: 'Por que a fibra é superior a outras tecnologias?',
    answer:
      'Velocidade de transmissão de dados é maior que de outras tecnologias. Maior estabilidade de sinal. Não sofre interferências de transmissão',
  },
  {
    question: 'Oque é a velocidade de Download?',
    answer:
      'É a velocidade de recebimento de dados (como um arquivo, vídeo, etc) de outro computador ou servidor para um computador local através da Internet. Usuários domésticos tendem a realizar mais downloads do que uploads.',
  },
  {
    question: 'A ClickSpeed oferece uma conexão estável para jogos online?',
    answer:
      'A ClickSpeed é um provedor de internet que se orgulha de oferecer uma conexão estável e de alta velocidade, ideal para jogos online. Nossa infraestrutura de rede avançada e tecnologia de ponta garantem baixa latência e velocidades rápidas de download e upload, proporcionando uma experiência suave e sem interrupções para os jogadores',
  },
];
