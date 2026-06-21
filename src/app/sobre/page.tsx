import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import Galeria from '@/components/Galeria';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a história da Pizzaria Premium. Desde 2010, trazendo a melhor pizza da cidade.',
  openGraph: {
    title: 'Sobre Nós | Pizzaria Premium',
    description: 'Conheça a história da Pizzaria Premium.',
  },
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-padding bg-dark-950 text-white">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6">Nossa História</h1>
            <p className="mx-auto max-w-3xl text-lg text-dark-300">
              Desde 2010, a Pizzaria Premium vem encantando paladares com pizzas artesanais de
              qualidade incomparável. Conheça a história por trás de cada pizza.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="heading-lg mb-4">Nossos Valores</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-3xl dark:bg-primary-900/20">
                  🍕
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white">Qualidade</h3>
                <p className="mt-2 text-dark-500 dark:text-dark-400">
                  Ingredientes selecionados e processos artesanais garantem a melhor pizza.
                </p>
              </div>

              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-3xl dark:bg-primary-900/20">
                  ❤️
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white">Paixão</h3>
                <p className="mt-2 text-dark-500 dark:text-dark-400">
                  Cada pizza é feita com amor e dedicação pela nossa equipe.
                </p>
              </div>

              <div className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-3xl dark:bg-primary-900/20">
                  🤝
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white">Comunidade</h3>
                <p className="mt-2 text-dark-500 dark:text-dark-400">
                  Fazemos parte da comunidade e valorizamos cada cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-dark-50 dark:bg-dark-900">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="heading-lg mb-4">Linha do Tempo</h2>
              <p className="mx-auto max-w-2xl text-dark-600 dark:text-dark-300">
                Marcos importantes da nossa história
              </p>
            </div>

            <Timeline />
          </div>
        </section>

        {/* Galeria */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="heading-lg mb-4">Galeria</h2>
              <p className="mx-auto max-w-2xl text-dark-600 dark:text-dark-300">
                Momentos especiais da nossa pizzaria
              </p>
            </div>

            <Galeria />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
