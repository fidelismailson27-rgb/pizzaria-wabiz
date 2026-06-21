import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnidadeCard from '@/components/UnidadeCard';
import unidades from '@/data/unidades.json';

export const metadata: Metadata = {
  title: 'Localização',
  description:
    'Encontre a Pizzaria Premium mais perto de você. 3 unidades atendendo toda a região.',
  openGraph: {
    title: 'Localização | Pizzaria Premium',
    description: 'Encontre a Pizzaria Premium mais perto de você.',
  },
};

export default function LocalizacaoPage() {
  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h1 className="heading-xl mb-4">Nossas Unidades</h1>
            <p className="mx-auto max-w-2xl text-dark-600 dark:text-dark-300">
              Encontre a Pizzaria Premium mais perto de você. Todas as unidades oferecem a mesma
              qualidade e experiência.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {unidades.unidades.map((unidade) => (
              <UnidadeCard key={unidade.id} unidade={unidade} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
