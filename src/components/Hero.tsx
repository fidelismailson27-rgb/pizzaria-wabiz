'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden bg-dark-950 md:h-[700px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-full bg-gradient-to-br from-dark-950/80 to-dark-950/60" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom text-center text-white">
          <h1 className="heading-xl mb-4 text-balance">A Melhor Pizza da Cidade</h1>
          <p className="mb-8 text-lg text-dark-200 md:text-xl">
            Ingredientes selecionados, sabor incomparável
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
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

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary-500' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
