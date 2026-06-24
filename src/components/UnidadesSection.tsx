'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { generateGoogleMapsLink, generateWhatsAppLink } from '@/lib/wabiz';
import { trackCTAClick } from '@/lib/analytics';

const unidades = [
  {
    nome: 'Campo Limpo',
    endereco: 'Rua Eliane de Araújo Neves, 90, Campo Limpo - SP',
    whatsapp: '5511947445932',
  },
  {
    nome: 'Taboão - Jd. Dracena',
    endereco: 'Avenida Embaixador Assis Chateaubriand, 437, Taboão da Serra - SP',
    whatsapp: '5511947445932',
  },
];

export default function UnidadesSection() {
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

        <div className="grid gap-6 sm:grid-cols-2">
          {unidades.map((unidade, index) => (
            <motion.div
              key={unidade.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-card p-8"
            >
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
                  <h3 className="text-xl font-bold text-white">{unidade.nome}</h3>
                  <p className="text-sm text-white/60">São Paulo - SP</p>
                </div>
              </div>

              <div className="space-y-3 text-white/70">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent">📍</span>
                  <p>{unidade.endereco}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent">🕐</span>
                  <p>Seg a Dom: 18h às 23h</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={generateGoogleMapsLink(unidade.endereco)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 justify-center text-sm"
                  onClick={() =>
                    trackCTAClick(
                      'Como Chegar',
                      'unidades',
                      generateGoogleMapsLink(unidade.endereco)
                    )
                  }
                >
                  Como Chegar
                </a>
                <a
                  href={generateWhatsAppLink(
                    unidade.whatsapp,
                    `Olá! Gostaria de fazer um pedido na Venerato Pizzas - ${unidade.nome}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 justify-center text-sm"
                  onClick={() =>
                    trackCTAClick(
                      'Pedir Nessa Unidade',
                      'unidades',
                      generateWhatsAppLink(unidade.whatsapp)
                    )
                  }
                >
                  Pedir Nessa Unidade
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/localizacao" className="btn-secondary">
            Ver Todas as Unidades
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
