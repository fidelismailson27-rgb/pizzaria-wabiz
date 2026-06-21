import { urlForImage } from '@/lib/sanity';
import WAbizButton from './WAbizButton';
import type { Pizza } from '@/lib/sanity-queries';

interface PizzaCardProps {
  pizza: Pizza;
}

export default function PizzaCard({ pizza }: PizzaCardProps) {
  return (
    <div className="group card overflow-hidden transition-all hover:-translate-y-1">
      <div className="aspect-square overflow-hidden rounded-lg bg-dark-100 dark:bg-dark-800">
        {pizza.imagem?.asset?._ref ? (
          <img
            src={urlForImage(pizza.imagem) || ''}
            alt={pizza.nome}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-6xl">🍕</div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-dark-900 dark:text-white">{pizza.nome}</h3>
          {pizza.destaque && (
            <span className="rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-600 dark:bg-primary-900/20 dark:text-primary-400">
              Destaque
            </span>
          )}
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-dark-500 dark:text-dark-400">
          {pizza.descricao}
        </p>
        {pizza.ingredientes && pizza.ingredientes.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {pizza.ingredientes.slice(0, 3).map((ingrediente) => (
              <span
                key={ingrediente}
                className="rounded-full bg-dark-100 px-2 py-0.5 text-xs text-dark-600 dark:bg-dark-800 dark:text-dark-300"
              >
                {ingrediente}
              </span>
            ))}
            {pizza.ingredientes.length > 3 && (
              <span className="rounded-full bg-dark-100 px-2 py-0.5 text-xs text-dark-600 dark:bg-dark-800 dark:text-dark-300">
                +{pizza.ingredientes.length - 3}
              </span>
            )}
          </div>
        )}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary-500">R$ {pizza.preco.toFixed(2)}</span>
          <WAbizButton
            unidade="centro"
            utmContent={pizza.slug?.current}
            className="btn-primary text-sm"
          >
            Pedir
          </WAbizButton>
        </div>
      </div>
    </div>
  );
}
