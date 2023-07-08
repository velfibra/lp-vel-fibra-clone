import AwardContent from '@/components/AwardContent';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LocationContent from '@/components/LocationContent';
import PlansContent from '@/components/PlansContent';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div>
      <Header />
      <WhatsAppButton />
      <main>
        <Hero />
        <PlansContent />
        <LocationContent />
        <Faq />
        <AwardContent />
      </main>
      <Footer />
      <div className="mt-5 bg-primary p-1 text-center  text-gray-200">
        <p>ClickSpeed - Copyright © 2023 todos os direitos reservados.</p>
      </div>
    </div>
  );
}
