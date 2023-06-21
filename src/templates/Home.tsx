import Faq from '@/components/Faq';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LocationContent from '@/components/LocationContent';
import PlansContent from '@/components/PlansContent';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PlansContent />
        <LocationContent />
        <Faq />
      </main>
    </div>
  );
}
