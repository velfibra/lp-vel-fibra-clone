export default function LocationContent() {
  return (
    <section className="flex flex-col bg-local-image bg-cover max-lg:h-[580px] max-lg:bg-local-image-mobile xl:h-[500px] 2xl:h-[600px]">
      <div className="flex flex-col max-lg:mb-5">
        <h1 className="rise mb-5 animate-fadeInUp text-end font-bold uppercase text-white text-shadow animation-delay-150 max-lg:mr-0 max-lg:animate-fadeInLeft max-lg:text-center max-lg:text-3xl max-lg:text-[20px] max-lg:animation-delay-500 xl:mr-5 xl:text-[35px] 2xl:mr-20 2xl:text-[50px]">
          nossa área de cobertura
        </h1>
        <div className="rise xl>mr-5 ml-auto flex animate-fadeInUp justify-end font-semibold text-white text-shadow animation-delay-150 max-lg:mr-0 max-lg:w-full max-lg:animate-fadeInLeft max-lg:justify-center max-lg:text-[12px] max-lg:animation-delay-500 xl:mt-10 xl:text-sm 2xl:mr-14 2xl:text-xl">
          {locations.map(({ local }, i) => (
            <ul
              className="ml-5 h-fit w-fit border-x-[1px] px-2 first:border-none last:border-none max-lg:ml-3 max-lg:px-0"
              key={i}
            >
              {local.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

const locations = [
  {
    local: [
      '-GUAMÁ',
      '-TERRA FIRME',
      '-JURUNAS',
      '-PEDREIRA',
      '-CANUDOS',
      '-BARREIRO',
      '-CONDOR',
      '-CREMEÇÃO',
      '-CURIÓ UTINGA',
      '-MARCO',
      '-BENGUI',
      '-SIDERAL',
      '-MANGUEIRÃO',
      '-CATALINA',
    ],
  },
  {
    local: [
      '-PARQUE VERDE',
      '-PRATINHA',
      '-MARACANGALHA',
      '-TAPANÃ',
      '-TENONÉ',
      '-MARACAUERA',
      '-COQUEIRO',
      '-40 HORAS',
      '-ICUÍ',
      '-MAGUARI-CAJUÍ',
      '-PARQUE GUAJARÁ',
      '-ÁGUAS NEGRAS',
      '-SÃO JOÃO',
      '(RESIDENCIAL',
      ' BEM VIVER)',
    ],
  },
  {
    local: [
      '-SÃO CLEMENTE',
      '-CIDADE NOVA 6',
      '-GUAJARÁ',
      '-BATISTA CAMPOS',
      '-CIDADE VELHA',
      '-SÃO BRÁS',
      '-VAL-DE-CÃES',
      '-SACRAMENTA',
      '-MARAMBAIA',
      '-TELEGRAFO',
      '-JADERLÂDIA',
      '-CIDADE NOVA V',
      '-CAMPINA',
    ],
  },
];
