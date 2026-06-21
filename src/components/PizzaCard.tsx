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
    <div className="group card flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-dark-900">
      {/* Imagem */}
      <div className="relative aspect-square w-full overflow-hidden rounded-t-xl bg-dark-100 dark:bg-dark-800">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={pizza.nome}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl sm:text-6xl">🍕</div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        {/* Título + badge */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold leading-tight text-dark-900 dark:text-white sm:text-lg">
            {pizza.nome}
          </h3>
          {pizza.destaque && (
            <span className="shrink-0 rounded-full bg-primary-100 px-2 py-0.5 text-[10px] font-semibold text-primary-600 dark:bg-primary-900/20 dark:text-primary-400 sm:text-xs">
              Destaque
            </span>
          )}
        </div>

        {/* Descrição */}
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-dark-500 dark:text-dark-400 sm:text-sm">
          {pizza.descricao}
        </p>

        {/* Ingredientes */}
        {pizza.ingredientes && pizza.ingredientes.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {pizza.ingredientes.slice(0, 3).map((ingrediente) => (
              <span
                key={ingrediente}
                className="rounded-full bg-dark-100 px-2 py-0.5 text-[10px] text-dark-600 dark:bg-dark-800 dark:text-dark-300 sm:text-xs"
              >
                {ingrediente}
              </span>
            ))}
            {pizza.ingredientes.length > 3 && (
              <span className="rounded-full bg-dark-100 px-2 py-0.5 text-[10px] text-dark-600 dark:bg-dark-800 dark:text-dark-300 sm:text-xs">
                +{pizza.ingredientes.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Espaçador */}
        <div className="flex-1" />

        {/* Preço + Botão */}
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-dark-100 pt-3 dark:border-dark-800 sm:mt-4 sm:pt-4">
          <span className="text-lg font-extrabold text-primary-500 sm:text-xl">
            R$ {pizza.preco.toFixed(2)}
          </span>
          <WAbizButton
            unidade="centro"
            utmContent={pizza.slug?.current}
            className="min-h-[44px] min-w-[44px] rounded-lg bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600 active:scale-95 sm:px-5 sm:py-3"
          >
            Pedir
          </WAbizButton>
        </div>
      </div>
    </div>
  );
}
