'use client';

import { useState } from 'react';
import cardapio from '@/data/cardapio.json';
import PizzaCard from './PizzaCard';

export default function CardapioGrid() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todas');

  const categorias = [
    { id: 'todas', nome: 'Todas' },
    ...cardapio.categorias,
  ];

  const pizzasFiltradas =
    categoriaAtiva === 'todas'
      ? cardapio.pizzas
      : cardapio.pizzas.filter((pizza) => pizza.categoria === categoriaAtiva);

  return (
    <div>
      {/* Filtros */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            onClick={() => setCategoriaAtiva(categoria.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              categoriaAtiva === categoria.id
                ? 'bg-primary-500 text-white'
                : 'bg-dark-100 text-dark-600 hover:bg-dark-200 dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-dark-700'
            }`}
          >
            {categoria.nome}
          </button>
        ))}
      </div>

      {/* Grid de pizzas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pizzasFiltradas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
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
