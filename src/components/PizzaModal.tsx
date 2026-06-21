'use client';

import { Fragment } from 'react';
import WAbizButton from './WAbizButton';

interface Pizza {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string;
  ingredientes: string[];
  destaque: boolean;
}

interface PizzaModalProps {
  pizza: Pizza;
  isOpen: boolean;
  onClose: () => void;
}

export default function PizzaModal({ pizza, isOpen, onClose }: PizzaModalProps) {
  if (!isOpen) return null;

  return (
    <Fragment>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-dark-900"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-dark-400 hover:text-dark-600"
            aria-label="Fechar"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-dark-100 dark:bg-dark-800">
            <div className="flex h-full items-center justify-center text-8xl">🍕</div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">{pizza.nome}</h2>
              <span className="text-2xl font-bold text-primary-500">R$ {pizza.preco.toFixed(2)}</span>
            </div>
            <p className="mt-2 text-dark-600 dark:text-dark-300">{pizza.descricao}</p>

            {pizza.ingredientes.length > 0 && (
              <div className="mt-4">
                <h3 className="mb-2 text-sm font-semibold text-dark-700 dark:text-dark-200">
                  Ingredientes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {pizza.ingredientes.map((ingrediente) => (
                    <span
                      key={ingrediente}
                      className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                    >
                      {ingrediente}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <WAbizButton
                unidade="centro"
                utmContent={pizza.id}
                className="w-full justify-center"
              >
                Pedir Esta Pizza
              </WAbizButton>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
