'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Menu de navegação"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 rounded-2xl border border-black/5 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
          <nav className="container-custom space-y-1 py-4">
            <Link href="/" className="mb-3 flex items-center px-4" onClick={() => setIsOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo-venerato.svg"
                alt="Venerato Pizzas - Logo"
                className="h-auto w-36 object-contain"
              />
            </Link>
            <Link
              href="/cardapio"
              className="block rounded-xl px-4 py-3 text-base font-medium text-black/80 transition-all hover:bg-black/5 hover:text-black dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Cardápio
            </Link>
            <Link
              href="/localizacao"
              className="block rounded-xl px-4 py-3 text-base font-medium text-black/80 transition-all hover:bg-black/5 hover:text-black dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Localização
            </Link>
            <Link
              href="/sobre"
              className="block rounded-xl px-4 py-3 text-base font-medium text-black/80 transition-all hover:bg-black/5 hover:text-black dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <div className="pt-2">
              <a
                href="https://veneratopizzas.wabiz.delivery/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center btn-accent"
                onClick={() => setIsOpen(false)}
              >
                Pedir Agora
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
