import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CardapioGrid from '@/components/CardapioGrid';
import { getPizzas, getCategorias } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Cardápio',
  description:
    'Confira nosso cardápio completo de pizzas artesanais. Clássicas, especiais, doces e bebidas.',
};

export default async function CardapioPage() {
  const [pizzas, categorias] = await Promise.all([getPizzas(), getCategorias()]);

  return (
    <>
      <Header />
      <main className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-12">
            <h1 className="heading-xl text-dark-900 dark:text-white">Nosso Cardápio</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-dark-600 dark:text-dark-300">
              Pizzas artesanais feitas com ingredientes selecionados e muito amor. Escolha a sua
              favorita!
            </p>
          </div>

          <CardapioGrid initialPizzas={pizzas} categorias={categorias} />
        </div>
      </main>
      <Footer />
    </>
  );
}
