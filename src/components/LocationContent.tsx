export default function LocationContent() {
  return (
    <section className="flex h-[700px] flex-col bg-gray-500 max-lg:h-[580px] max-lg:justify-end">
      <div className="flex flex-col max-lg:mb-5">
        <h1 className="mb-5 mr-20 text-end text-[130px] font-bold uppercase text-white max-lg:mr-0 max-lg:text-center max-lg:text-3xl">
          estamos aqui!
        </h1>
        <div className="ml-auto mr-14 flex justify-end font-semibold text-white max-lg:mr-0 max-lg:w-full max-lg:justify-center max-lg:text-[12px] lg:text-xl">
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
