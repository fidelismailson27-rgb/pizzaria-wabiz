import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnidadeCard from '@/components/UnidadeCard';
import { getUnidades } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Localização',
  description:
    'Encontre a Venerato Pizzas mais perto de você. 2 unidades atendendo Taboão da Serra e Campo Limpo.',
};

export default async function LocalizacaoPage() {
  const unidades = await getUnidades();

  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h1 className="heading-xl mb-4 text-black dark:text-white">Nossas Unidades</h1>
            <p className="mx-auto max-w-2xl text-dark-600 dark:text-dark-300">
              Encontre a Venerato Pizzas mais perto de você. 2 unidades atendendo Taboão da Serra e
              Campo Limpo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {unidades.map((unidade) => (
              <UnidadeCard key={unidade._id} unidade={unidade} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
