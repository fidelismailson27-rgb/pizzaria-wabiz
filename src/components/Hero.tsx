'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { generateWAbizLink, UTM_CONFIG } from '@/lib/wabiz';

const slides = [
  {
    id: 1,
    image: '/images/hero/hero-1.jpg',
    title: 'A Melhor Pizza da Cidade',
    subtitle: 'Ingredientes selecionados, sabor incomparável',
  },
  {
    id: 2,
    image: '/images/hero/hero-2.jpg',
    title: 'Pizzas Artesanais',
    subtitle: 'Feitas com amor e dedicação',
  },
  {
    id: 3,
    image: '/images/hero/hero-3.jpg',
    title: 'Experiência Única',
    subtitle: 'Venha nos conhecer',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = slides[currentSlide] ?? {
    title: 'Venerato Pizzas',
    subtitle: 'O verdadeiro sabor da pizza',
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden md:h-[700px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 hero-gradient" />

      <div className="absolute inset-0 flex items-center">
        <div className="container-custom w-full">
          <div className="max-w-2xl animate-fade-in">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              Segunda a Domingo • 18h às 23h
            </div>

            <h1 className="heading-xl mb-4 text-white text-balance animate-slide-up">
              {activeSlide.title}
            </h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl animate-slide-up animation-delay-100">
              {activeSlide.subtitle}
            </p>

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
                className="btn-secondary border-white text-white hover:bg-white hover:text-dark-950"
              >
                Pedir Agora
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-accent' : 'w-2.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
