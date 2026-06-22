import Link from 'next/link';
import Image from 'next/image';
import { generateWAbizLink, UTM_CONFIG } from '@/lib/wabiz';

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
              width={220}
              height={80}
              alt="Venerato Pizzas"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="heading-xl mb-4 max-w-2xl text-white text-balance animate-slide-up">
            O sabor que conquistou <span className="text-gradient">Taboão da Serra</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-lg text-lg text-white/70 animate-slide-up animation-delay-100 md:text-xl">
            Pizzas artesanais com ingredientes selecionados.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row animate-slide-up animation-delay-200">
            <Link href="/cardapio" className="btn-primary">
              Ver Cardápio
            </Link>
            <a
              href={generateWAbizLink({
                unidade: 'centro',
                utmSource: UTM_CONFIG.source,
                utmMedium: UTM_CONFIG.medium,
                utmCampaign: UTM_CONFIG.campaign,
                utmContent: 'hero_cta',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Pedir Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
