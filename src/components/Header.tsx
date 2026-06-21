import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="glass-header">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo-venerato.jpg"
            alt="Venerato Pizzas"
            width={40}
            height={40}
            className="rounded-lg object-cover"
            priority
          />
          <span className="font-display text-xl font-bold text-dark-950 dark:text-white">
            Venerato Pizzas
          </span>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="/cardapio"
            className="text-sm font-medium text-dark-600 transition-colors hover:text-primary dark:text-dark-300"
          >
            Cardápio
          </Link>
          <Link
            href="/localizacao"
            className="text-sm font-medium text-dark-600 transition-colors hover:text-primary dark:text-dark-300"
          >
            Localização
          </Link>
          <Link
            href="/sobre"
            className="text-sm font-medium text-dark-600 transition-colors hover:text-primary dark:text-dark-300"
          >
            Sobre
          </Link>
          <a
            href="https://wabiz.com.br/venerato-pizzas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Pedir Agora
          </a>
        </nav>

        <Navbar />
      </div>
    </header>
  );
}
