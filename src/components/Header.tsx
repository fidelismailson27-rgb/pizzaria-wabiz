import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-2xl">
      <div className="container-custom flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo-venerato-transparent.png"
            alt="Venerato Pizzas - Logo"
            width={132}
            height={43}
            className="h-auto w-28 object-contain md:w-32"
            priority
          />
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            href="/cardapio"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Cardápio
          </Link>
          <Link
            href="/localizacao"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Localização
          </Link>
          <Link
            href="/sobre"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Sobre
          </Link>
          <a
            href="https://veneratopizzas.wabiz.delivery/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm"
          >
            Pedir Agora
          </a>
        </nav>

        <Navbar />
      </div>
    </header>
  );
}
