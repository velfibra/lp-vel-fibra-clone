import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PlansContent from '@/components/PlansContent';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PlansContent />
      </main>
    </div>
  );
}
