import Logo from './Logo';

export default function Header() {
  return (
    <header className="flex h-24 items-center bg-primary">
      <Logo className="ml-5" />
      <div className="ml-64 flex w-3/5 justify-between text-white max-2xl:ml-0 max-2xl:w-4/5 max-2xl:justify-evenly">
        <nav>
          <ul className="flex text-2xl font-bold max-2xl:text-xl">
            {links.map(({ link, name }) => (
              <li className="ml-16 opacity-75 hover:opacity-100" key={name}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="flex text-xl max-2xl:ml-10">
          Compre pelo telefone: <p className="ml-1 font-bold">(91)3085-3190</p>
        </span>
      </div>
    </header>
  );
}

const links = [
  { name: 'Planos', link: '#plan' },
  { name: 'Duvidas', link: '#help' },
  { name: 'Contatos', link: '#contact' },
];
