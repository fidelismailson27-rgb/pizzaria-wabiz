import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';
import WAbizButton from './WAbizButton';
import type { Pizza } from '@/lib/sanity-queries';

const pizzaImages: Record<string, string> = {
  'A Moda da Casa': '/pizzas/moda-casa.jpg',
  Calabresa: '/pizzas/calabresa.jpg',
  'Frango Catupiry': '/pizzas/frango.jpg',
};

interface PizzaCardProps {
  pizza: Pizza;
}

export default function PizzaCard({ pizza }: PizzaCardProps) {
  const imageUrl = urlForImage(pizza.imagem);
  const image = pizzaImages[pizza.nome] ?? '/pizzas/moda-casa.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass-card group flex flex-col overflow-hidden"
    >
      <div className="relative w-full overflow-hidden rounded-t-xl">
        <div className="aspect-[4/3]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={pizza.nome}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <Image
              src={image}
              alt={pizza.nome}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
          {pizza.destaque && (
            <div className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white shadow-lg">
              Destaque
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-bold leading-tight text-white sm:text-lg">{pizza.nome}</h3>

        <p className="mt-1 line-clamp-2 text-sm text-white/60">{pizza.descricao}</p>

        {pizza.ingredientes && pizza.ingredientes.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {pizza.ingredientes.slice(0, 3).map((ingrediente) => (
              <span
                key={ingrediente}
                className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary-300"
              >
                {ingrediente}
              </span>
            ))}
            {pizza.ingredientes.length > 3 && (
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/50">
                +{pizza.ingredientes.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex-1" />

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <span className="text-xl font-extrabold text-accent sm:text-2xl">
            R$ {pizza.preco.toFixed(2)}
          </span>
          <WAbizButton className="min-h-[44px] min-w-[44px] rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 sm:px-5 sm:py-3">
            Pedir
          </WAbizButton>
        </div>
      </div>
    </motion.div>
  );
}
