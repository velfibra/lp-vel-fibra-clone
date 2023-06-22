import FooterInfo from './FooterInfo';
import FooteriNetworks from './FooterNetworks';
import FooterSuport from './FooterSuport';

export default function Footer() {
  return (
    <section className="flex flex-col items-center justify-center">
      <hr className="mx-auto h-[2px] w-4/5 bg-black/30" />
      <div className="mt-14 grid w-[80%] grid-cols-4 text-primary max-lg:mt-2 max-lg:grid-cols-1">
        <FooterInfo />
        <FooterSuport>
          <FooteriNetworks />
        </FooterSuport>
      </div>
    </section>
  );
}
