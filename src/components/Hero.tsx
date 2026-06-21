'use client';

import Link from 'next/link';
import Image from 'next/image';
import { generateWAbizLink, UTM_CONFIG } from '@/lib/wabiz';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden md:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Pizza artesanal Venerato"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[85vh] items-center md:min-h-screen">
        <div className="container-custom w-full py-20 md:py-0">
          <div className="max-w-3xl">
            {/* Logo */}
            <div className="mb-6 animate-fade-in">
              <Image
                src="/brand/logo-venerato.jpg"
                alt="Venerato Pizzas"
                width={80}
                height={80}
                className="rounded-2xl"
              />
            </div>

            {/* Title */}
            <h1 className="heading-xl mb-4 text-white text-balance animate-slide-up">
              O sabor que conquistou <span className="text-gradient">Taboão da Serra</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-xl text-lg text-white/70 animate-slide-up animation-delay-100 md:text-xl">
              Pizzas artesanais com ingredientes selecionados. Peça agora e descubra o verdadeiro
              sabor.
            </p>

            {/* CTAs */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row animate-slide-up animation-delay-200">
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

            {/* Glass Cards */}
            <div className="flex flex-col gap-4 sm:flex-row animate-slide-up animation-delay-300">
              {/* Location Card */}
              <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Taboão da Serra</p>
                  <p className="text-xs text-white/60">Seg a Dom • 18h às 23h</p>
                </div>
              </div>

              {/* Promo Card */}
              <div className="promo-gradient flex items-center gap-3 rounded-2xl px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <span className="text-xl">🔥</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Venerato do Dia</p>
                  <p className="text-lg font-extrabold text-accent">R$ 60,99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
