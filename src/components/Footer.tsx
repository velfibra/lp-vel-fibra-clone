import FooterInfo from './FooterInfo';
import FooteriNetworks from './FooterNetworks';
import FooterSuport from './FooterSuport';

export default function Footer() {
  return (
    <section>
      <hr className="mx-auto h-[2px] w-4/5 bg-black/30" />
      <div className="max:md:text-sm max-md:text-md mt-14 flex w-[95%] justify-center text-primary max-lg:mt-2 max-lg:w-full max-lg:text-xs max-md:mx-auto max-md:flex-col max-md:items-center  max-md:justify-center max-md:text-center max-md:text-sm xl:mx-auto 2xl:mx-52">
        <FooterInfo />
        <FooterSuport>
          <FooteriNetworks />
        </FooterSuport>
      </div>
    </section>
  );
}
