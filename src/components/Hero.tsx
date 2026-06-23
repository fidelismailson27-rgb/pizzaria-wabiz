import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video fullscreen */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/hero/hero-1.jpg"
        >
          <source src="/videos/venerato-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/65" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center">
        <div className="container-custom flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-venerato.svg"
              alt="Venerato Pizzas"
              className="h-auto w-[420px] md:w-[650px] lg:w-[850px]"
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
