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
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="glass-card relative w-full max-w-lg p-0"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white/70 transition-colors hover:text-white"
            aria-label="Fechar"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-0 aspect-square overflow-hidden rounded-t-2xl bg-dark-800">
            <div className="placeholder-pizza flex h-full items-center justify-center">
              <span className="text-8xl opacity-80">🍕</span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-bold text-white">{pizza.nome}</h2>
              <span className="text-2xl font-extrabold text-accent">
                R$ {pizza.preco.toFixed(2)}
              </span>
            </div>
            <p className="mt-2 text-white/70">{pizza.descricao}</p>

            {pizza.ingredientes.length > 0 && (
              <div className="mt-4">
                <h3 className="mb-2 text-sm font-semibold text-white/60">Ingredientes</h3>
                <div className="flex flex-wrap gap-2">
                  {pizza.ingredientes.map((ingrediente) => (
                    <span
                      key={ingrediente}
                      className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary-300"
                    >
                      {ingrediente}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <WAbizButton unidade="centro" utmContent={pizza.id} className="w-full justify-center">
                Pedir Esta Pizza
              </WAbizButton>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
