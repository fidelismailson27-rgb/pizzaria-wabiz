'use client';

import { motion } from 'framer-motion';

export default function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-yellow-500 py-10 md:py-14">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <span className="mb-2 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              🔥 Venerato do Dia
            </span>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Sabor em destaque hoje
            </h2>
          </div>

          <a
            href="https://veneratopizzas.wabiz.delivery/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-8 py-4 text-base font-bold text-red-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 sm:px-10 sm:text-lg"
          >
            Pedir Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
