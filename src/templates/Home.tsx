import AwardComponent from '@/components/AwardComponent';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LocationContent from '@/components/LocationContent';
import PlansContent from '@/components/PlansContent';
import SVAComponent from '@/components/SVAComponent';
import SVAplans from '@/components/SVAplans';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="bg-gradient-to-bl from-[#1A0530] via-[#48088b] to-[#1A0530]">
      <Header />
      <WhatsAppButton />
      <main>
        <Hero />
        <PlansContent />
        <SVAComponent />
        <SVAplans />
        <AwardComponent />
        <LocationContent />
        <Faq />
      </main>
      <Footer />
      <div className="mt-5 bg-primary p-1 text-center  text-gray-200">
        <p>VelFibra - Copyright © 2023 todos os direitos reservados.</p>
      </div>
    </div>
  );
}
