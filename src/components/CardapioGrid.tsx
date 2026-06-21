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
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categoriasComTodas.map((categoria) => (
          <button
            key={categoria._id}
            onClick={() => setCategoriaAtiva(categoria.slug.current)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              categoriaAtiva === categoria.slug.current
                ? 'bg-primary-500 text-white'
                : 'bg-dark-100 text-dark-600 hover:bg-dark-200 dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-dark-700'
            }`}
          >
            {categoria.nome}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
