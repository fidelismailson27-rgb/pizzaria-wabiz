'use client';

import { useState } from 'react';
import PizzaCard from './PizzaCard';
import type { Pizza, Categoria } from '@/lib/sanity-queries';

interface CardapioGridProps {
  initialPizzas: Pizza[];
  categorias: Categoria[];
}

export default function CardapioGrid({ initialPizzas, categorias }: CardapioGridProps) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todas');

  const categoriasComTodas = [
    { _id: 'todas', nome: 'Todas', slug: { current: 'todas' }, descricao: '', ordem: -1 },
    ...categorias,
  ];

  const pizzasFiltradas =
    categoriaAtiva === 'todas'
      ? initialPizzas
      : initialPizzas.filter((pizza) => pizza.categoria?.slug?.current === categoriaAtiva);

  return (
    <div>
      {/* Filtros de categoria */}
      <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8">
        {categoriasComTodas.map((categoria) => (
          <button
            key={categoria._id}
            onClick={() => setCategoriaAtiva(categoria.slug.current)}
            className={`min-h-[40px] rounded-full px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
              categoriaAtiva === categoria.slug.current
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-dark-100 text-dark-600 hover:bg-dark-200 dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-dark-700'
            }`}
          >
            {categoria.nome}
          </button>
        ))}
      </div>

      {/* Grid: 1 col mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {pizzasFiltradas.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>

      {pizzasFiltradas.length === 0 && (
        <div className="py-12 text-center text-dark-500">
          Nenhuma pizza encontrada nesta categoria.
        </div>
      )}
    </div>
  );
}
