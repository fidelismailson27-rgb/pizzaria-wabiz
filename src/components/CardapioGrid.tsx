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
      {/* Filters - horizontal scroll on mobile */}
      <div className="mb-8 sm:mb-10">
        <div className="filter-scroll flex gap-2 pb-2 sm:flex-wrap sm:justify-center sm:pb-0">
          {categoriasComTodas.map((categoria) => (
            <button
              key={categoria._id}
              onClick={() => setCategoriaAtiva(categoria.slug.current)}
              className={`glass-filter shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                categoriaAtiva === categoria.slug.current ? 'active' : 'text-white/70 hover:text-white'
              }`}
            >
              {categoria.nome}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
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
        <div className="py-16 text-center text-white/50">
          <p className="text-lg">Nenhuma pizza encontrada nesta categoria.</p>
        </div>
      )}
    </div>
  );
}
