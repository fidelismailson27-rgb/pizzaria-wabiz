'use client';

import { useState } from 'react';
import Link from 'next/link';
import unidades from '@/data/unidades.json';

interface UnidadeSelectorProps {
  unidadeAtual?: string;
}

export default function UnidadeSelector({ unidadeAtual }: UnidadeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const unidadeSelecionada =
    unidades.unidades.find((u) => u.slug === unidadeAtual) || unidades.unidades[0];

  if (!unidadeSelecionada) return null;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-dark-900 transition-colors hover:border-primary-500 dark:border-dark-700 dark:bg-dark-900 dark:text-white"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>📍</span>
        <span>{unidadeSelecionada.nome}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-full z-50 mt-2 w-64 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-dark-700 dark:bg-dark-900"
          role="listbox"
        >
          {unidades.unidades.map((unidade) => (
            <Link
              key={unidade.id}
              href={`/localizacao/${unidade.slug}`}
              className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors hover:bg-primary-50 dark:hover:bg-dark-800 ${
                unidade.slug === unidadeAtual
                  ? 'bg-primary-50 text-primary-500 dark:bg-dark-800'
                  : ''
              }`}
              role="option"
              aria-selected={unidade.slug === unidadeAtual}
              onClick={() => setIsOpen(false)}
            >
              <span>📍</span>
              <div>
                <div className="font-medium">{unidade.nome}</div>
                <div className="text-xs text-dark-500">{unidade.endereco}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
