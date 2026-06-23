import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a história da Venerato Pizzas. Há mais de 20 anos levando sabor para Taboão da Serra e Campo Limpo.',
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h1 className="heading-xl mb-4 text-black dark:text-white">Sobre a Venerato</h1>
            <p className="mx-auto max-w-2xl text-dark-600 dark:text-dark-300">
              Há mais de 20 anos levando sabor para Taboão da Serra e Campo Limpo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
