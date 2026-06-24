import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NossosDestaques from '@/components/NossosDestaques';
import GaleriaReal from '@/components/GaleriaReal';
import PromoBanner from '@/components/PromoBanner';
import SobreSection from '@/components/SobreSection';
import DestaquesSection from '@/components/DestaquesSection';
import UnidadesSection from '@/components/UnidadesSection';
import CtaFinal from '@/components/CtaFinal';

export const metadata: Metadata = {
  title: 'Venerato Pizzas | A Melhor Pizza da Cidade',
  description:
    'Descubra a experiência única da Venerato Pizzas. Pizzas artesanais com ingredientes selecionados. Peça agora pela WAbiz!',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NossosDestaques />
        <GaleriaReal />
        <PromoBanner />
        <SobreSection />
        <DestaquesSection />
        <UnidadesSection />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
