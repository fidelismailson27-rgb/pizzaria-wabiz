import Link from 'next/link';
import cardapio from '@/data/cardapio.json';

export default function CardapioPreview() {
  const pizzasDestaque = cardapio.pizzas.filter((pizza) => pizza.destaque).slice(0, 4);

  return (
    <section className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-lg mb-4">Nosso Cardápio</h2>
          <p className="mx-auto max-w-2xl text-dark-600 dark:text-dark-300">
            Descubra nossas pizzas artesanais, feitas com ingredientes selecionados e muito amor
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pizzasDestaque.map((pizza) => (
            <Link
              key={pizza.id}
              href="/cardapio"
              className="group card overflow-hidden transition-all hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-dark-100 dark:bg-dark-800">
                <div className="flex h-full items-center justify-center text-4xl">🍕</div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white">
                  {pizza.nome}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-dark-500 dark:text-dark-400">
                  {pizza.descricao}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-500">
                    R$ {pizza.preco.toFixed(2)}
                  </span>
                  <span className="text-sm text-dark-400 group-hover:text-primary-500">
                    Ver mais →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/cardapio" className="btn-primary">
            Ver Cardápio Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
