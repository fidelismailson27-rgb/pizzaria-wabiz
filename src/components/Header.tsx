import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-dark-950/95 dark:supports-[backdrop-filter]:bg-dark-950/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-500">🍕</span>
          <span className="font-display text-xl font-bold text-dark-950 dark:text-white">
            Pizzaria Premium
          </span>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="/cardapio"
            className="text-sm font-medium text-dark-600 transition-colors hover:text-primary-500 dark:text-dark-300"
          >
            Cardápio
          </Link>
          <Link
            href="/localizacao"
            className="text-sm font-medium text-dark-600 transition-colors hover:text-primary-500 dark:text-dark-300"
          >
            Localização
          </Link>
          <Link
            href="/sobre"
            className="text-sm font-medium text-dark-600 transition-colors hover:text-primary-500 dark:text-dark-300"
          >
            Sobre
          </Link>
          <a
            href="https://wabiz.com.br/pizzaria-premium"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Pedir Agora
          </a>
        </nav>
      </div>
    </header>
  );
}
