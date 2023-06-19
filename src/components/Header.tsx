import Logo from './Logo';
import LogoMobile from './LogoMobile';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="top-0 flex h-24 items-center bg-primary max-lg:h-[50px]">
      <Logo className="ml-5 max-lg:hidden" />
      <LogoMobile className="ml-24 lg:hidden" />
      <div className="ml-64 flex w-3/5 justify-between text-white max-2xl:ml-0 max-2xl:w-4/5 max-2xl:justify-evenly max-lg:hidden">
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
      <MobileMenu />
    </header>
  );
}

const links = [
  { name: 'Planos', link: '#plan' },
  { name: 'Duvidas', link: '#help' },
  { name: 'Contatos', link: '#contact' },
];
