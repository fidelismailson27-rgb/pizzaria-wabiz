import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Pizza artesanal Venerato"
          fill
          className="object-cover blur-[2px] scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="container-custom flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <Image
              src="/brand/logo-venerato.jpg"
              width={340}
              height={120}
              alt="Venerato Pizzas"
              className="object-contain"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="heading-xl mb-4 max-w-3xl text-white text-balance animate-slide-up">
            A pizza que conquistou <span className="text-gradient">Taboão da Serra</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-xl text-lg text-white/70 animate-slide-up animation-delay-100 md:text-xl">
            Muito recheio, ingredientes selecionados e sabor de verdade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row animate-slide-up animation-delay-200">
            <a
              href="https://veneratopizzas.wabiz.delivery/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Fazer Pedido
            </a>
            <Link
              href="/cardapio"
              className="btn-secondary border-white text-white hover:bg-white hover:text-dark-950"
            >
              Ver Cardápio
            </Link>
            <a
              href="https://veneratopizzas.wabiz.delivery/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#25D366] bg-[#25D366]/10 px-6 py-3 text-sm font-bold text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:scale-105"
            >
              <span>💬</span>
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
