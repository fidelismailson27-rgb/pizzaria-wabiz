import Image from 'next/image';
import Link from 'next/link';
import { getPizzasDestaque } from '@/lib/data';
import { urlForImage } from '@/lib/sanity';

export default async function CardapioPreview() {
  const pizzas = await getPizzasDestaque();

  return (
    <section className="section-padding" style={{ backgroundColor: '#0F1115' }}>
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-lg mb-4 text-white">Nosso Cardápio</h2>
          <p className="mx-auto max-w-2xl text-white/60">
            Descubra nossas pizzas artesanais, feitas com ingredientes selecionados e muito amor
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pizzas.map((pizza) => (
            <Link key={pizza._id} href="/cardapio" className="glass-card group overflow-hidden">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-dark-800">
                {pizza.imagem?.asset?._ref ? (
                  <Image
                    src={urlForImage(pizza.imagem) || ''}
                    alt={pizza.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="placeholder-pizza flex h-full items-center justify-center">
                    <span className="text-4xl opacity-80">🍕</span>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">{pizza.nome}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/60">{pizza.descricao}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">R$ {pizza.preco.toFixed(2)}</span>
                  <span className="text-sm text-white/50 group-hover:text-accent">Ver mais →</span>
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
