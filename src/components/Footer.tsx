import FooterInfo from './FooterInfo';
import FooteriNetworks from './FooterNetworks';
import FooterSuport from './FooterSuport';

export default function Footer() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center lg:ml-10">
      <hr className="mx-auto h-[2px] w-4/5 bg-black/30" />
      <div className="mt-14 grid w-[70%] grid-cols-3 gap-3 max-lg:mt-2 max-lg:grid-cols-1">
        <FooterInfo />
        <FooterSuport>
          <FooteriNetworks />
        </FooterSuport>
      </div>
    </section>
  );
}
