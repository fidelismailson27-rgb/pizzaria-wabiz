import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';
import WAbizButton from './WAbizButton';
import type { Pizza } from '@/lib/sanity-queries';

interface PizzaCardProps {
  pizza: Pizza;
}

export default function PizzaCard({ pizza }: PizzaCardProps) {
  const imageUrl = urlForImage(pizza.imagem);

  return (
    <div className="glass-card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-dark-100 dark:bg-dark-800">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={pizza.nome}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl sm:text-6xl">🍕</div>
        )}
        {pizza.destaque && (
          <div className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white shadow-lg">
            Destaque
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold leading-tight text-dark-900 dark:text-white sm:text-lg">
            {pizza.nome}
          </h3>
        </div>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-dark-500 dark:text-dark-400 sm:text-sm">
          {pizza.descricao}
        </p>

        {pizza.ingredientes && pizza.ingredientes.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1">
            {pizza.ingredientes.slice(0, 3).map((ingrediente) => (
              <span
                key={ingrediente}
                className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary sm:text-xs"
              >
                {ingrediente}
              </span>
            ))}
            {pizza.ingredientes.length > 3 && (
              <span className="rounded-full bg-dark-100 px-2 py-0.5 text-[10px] text-dark-500 dark:bg-dark-800 dark:text-dark-400 sm:text-xs">
                +{pizza.ingredientes.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex-1" />

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-primary/10 pt-4">
          <span className="text-xl font-extrabold text-primary sm:text-2xl">
            R$ {pizza.preco.toFixed(2)}
          </span>
          <WAbizButton
            unidade="centro"
            utmContent={pizza.slug?.current}
            className="min-h-[44px] min-w-[44px] rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 sm:px-5 sm:py-3"
          >
            Pedir
          </WAbizButton>
        </div>
      </div>
    </div>
  );
}
