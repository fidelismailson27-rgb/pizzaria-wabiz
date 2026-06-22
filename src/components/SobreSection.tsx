'use client';

import { motion } from 'framer-motion';

export default function SobreSection() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: '#0F1115' }}
    >
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              Nossa História
            </span>
            <h2 className="heading-lg mb-6 text-white">Do bairro para a sua mesa</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              Nascemos no bairro e cresceu o amor pela pizza de verdade.{' '}
              <span className="font-semibold text-white">Massa fermentada naturalmente</span>,
              ingredientes selecionados e o cuidado de quem faz com carinho.
            </p>
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              Aqui cada pizza é preparada com{' '}
              <span className="font-semibold text-accent">tradição local</span> e qualidade que você
              sente no primeiro pedaço.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-extrabold text-accent md:text-4xl">10+</div>
              <div className="mt-1 text-sm text-white/60">Anos de tradição</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-extrabold text-accent md:text-4xl">100%</div>
              <div className="mt-1 text-sm text-white/60">Artesanal</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-extrabold text-accent md:text-4xl">3</div>
              <div className="mt-1 text-sm text-white/60">Unidades</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
