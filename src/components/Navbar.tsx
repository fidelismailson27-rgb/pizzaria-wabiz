'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-dark-600 hover:text-primary-500"
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
        <div className="absolute left-0 right-0 top-16 border-b border-border bg-white shadow-lg dark:bg-dark-950">
          <nav className="container-custom space-y-1 py-4">
            <Link
              href="/cardapio"
              className="block rounded-lg px-4 py-2 text-base font-medium text-dark-600 transition-colors hover:bg-primary-50 hover:text-primary-500 dark:text-dark-300 dark:hover:bg-dark-900"
              onClick={() => setIsOpen(false)}
            >
              Cardápio
            </Link>
            <Link
              href="/localizacao"
              className="block rounded-lg px-4 py-2 text-base font-medium text-dark-600 transition-colors hover:bg-primary-50 hover:text-primary-500 dark:text-dark-300 dark:hover:bg-dark-900"
              onClick={() => setIsOpen(false)}
            >
              Localização
            </Link>
            <Link
              href="/sobre"
              className="block rounded-lg px-4 py-2 text-base font-medium text-dark-600 transition-colors hover:bg-primary-50 hover:text-primary-500 dark:text-dark-300 dark:hover:bg-dark-900"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <div className="pt-2">
              <a
                href="https://wabiz.com.br/pizzaria-premium"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center btn-primary"
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
