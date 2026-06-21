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
      <main className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h1 className="heading-xl mb-4">Nosso Cardápio</h1>
            <p className="mx-auto max-w-2xl text-dark-600 dark:text-dark-300">
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
