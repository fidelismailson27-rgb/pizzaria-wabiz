'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const destaques = [
  {
    nome: '🍮 Pudim no Copo',
    descricao: 'Sobremesa cremosa, geladinha e perfeita para fechar o pedido com carinho.',
    imagem: '/products/pudim-copo.jpg',
  },
  {
    nome: '🥟 Empadas Artesanais',
    descricao: 'Massa leve, recheio generoso e aquele sabor de feito com capricho.',
    imagem: '/products/empada.jpg',
  },
];

export default function NossosDestaques() {
  return (
    <section className="relative py-20 md:py-28" style={{ backgroundColor: '#151821' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="heading-lg text-white">Nossos Destaques</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {destaques.map((item, index) => (
            <motion.article
              key={item.nome}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative aspect-[5/3] overflow-hidden rounded-t-xl">
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-extrabold text-white">{item.nome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                  {item.descricao}
                </p>
                <a
                  href="https://veneratopizzas.wabiz.delivery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary-600 active:scale-95"
                >
                  Peça Agora
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
