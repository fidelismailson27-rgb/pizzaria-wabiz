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
      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
        {categoriasComTodas.map((categoria) => (
          <button
            key={categoria._id}
            onClick={() => setCategoriaAtiva(categoria.slug.current)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              categoriaAtiva === categoria.slug.current
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-white/60 text-dark-600 backdrop-blur-sm hover:bg-primary/10 hover:text-primary dark:bg-white/5 dark:text-dark-300 dark:hover:bg-primary/10'
            }`}
          >
            {categoria.nome}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
        {pizzasFiltradas.map((pizza, index) => (
          <div
            key={pizza._id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <PizzaCard pizza={pizza} />
          </div>
        ))}
      </div>

      {pizzasFiltradas.length === 0 && (
        <div className="py-16 text-center text-dark-500">
          <p className="text-lg">Nenhuma pizza encontrada nesta categoria.</p>
        </div>
      )}
    </div>
  );
}
