'use client';

import { motion } from 'framer-motion';
import { generateGoogleMapsLink, generateWhatsAppLink } from '@/lib/wabiz';

export default function UnidadesSection() {
  const endereco = 'Av. Embaixador Assis Chateaubriand, 437, Jd. Ouro Preto, Taboão da Serra - SP';
  const whatsapp = '5511947445932';

  return (
    <section className="relative py-24 md:py-32" style={{ backgroundColor: '#0F1115' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
            Nossas Unidades
          </span>
          <h2 className="heading-lg text-white">Venha nos visitar</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <div className="glass-card p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                <svg
                  className="h-7 w-7 text-accent"
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
                <h3 className="text-xl font-bold text-white">Taboão Jd. Dracena</h3>
                <p className="text-sm text-white/60">Nossa unidade principal</p>
              </div>
            </div>

            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-accent">📍</span>
                <p>{endereco}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-accent">🕐</span>
                <p>Seg a Dom: 18h às 23h</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-accent">📞</span>
                <div>
                  <p>WhatsApp: 11 94744-5932</p>
                  <p>Fixo: 11 4701-2612</p>
                  <p>Fixo: 11 4701-9220</p>
                  <p>Fixo: 11 4787-7944</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={generateGoogleMapsLink(endereco)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 justify-center"
              >
                Como Chegar
              </a>
              <a
                href={generateWhatsAppLink(
                  whatsapp,
                  'Olá! Gostaria de fazer um pedido na Venerato Pizzas - Taboão Jd. Dracena.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center"
              >
                Pedir Nessa Unidade
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
