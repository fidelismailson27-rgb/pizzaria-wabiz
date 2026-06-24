'use client';

import { motion } from 'framer-motion';
import { trackCTAClick } from '@/lib/analytics';

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="heading-xl mb-4 text-white text-balance">Bateu fome?</h2>
          <p className="mb-10 text-lg text-white/70 md:text-xl">Peça agora sua Venerato.</p>
          <a
            href="https://veneratopizzas.wabiz.delivery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-accent px-10 py-5 text-lg font-bold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            onClick={() =>
              trackCTAClick('Fazer Pedido', 'cta_final', 'https://veneratopizzas.wabiz.delivery/')
            }
          >
            Fazer Pedido
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
