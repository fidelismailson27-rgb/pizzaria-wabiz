import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CardapioPreview from '@/components/CardapioPreview';
import SobrePreview from '@/components/SobrePreview';
import LocalizacaoPreview from '@/components/LocalizacaoPreview';

export const metadata: Metadata = {
  title: 'Pizzaria Premium | A Melhor Pizza da Cidade',
  description:
    'Descubra a experiência única da nossa pizzaria. Pizzas artesanais com ingredientes selecionados. Peça agora pela WAbiz!',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <Hero /> */}
        <CardapioPreview />
        <SobrePreview />
        <LocalizacaoPreview />
      </main>
      <Footer />
    </>
  );
}
