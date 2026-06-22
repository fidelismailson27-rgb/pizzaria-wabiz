'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WAbizButton from './WAbizButton';

const destaques = [
  {
    nome: 'Moda da Casa',
    descricao:
      'Nossa assinatura: muçarela derretida, calabresa artesanal, cebola caramelizada e azeite trufado.',
    preco: 62.9,
    imagem: '/pizzas/moda-casa.jpg',
  },
  {
    nome: 'Calabresa Premium',
    descricao: 'Calabresa defumada importada com cebola roxa e azeitonas pretas.',
    preco: 54.9,
    imagem: '/pizzas/calabresa.jpg',
  },
  {
    nome: 'Frango com Catupiry',
    descricao: 'Frango desfiado temperado com catupiry cremoso e milho verde.',
    preco: 52.9,
    imagem: '/pizzas/frango.jpg',
  },
];

export default function DestaquesSection() {
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
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Sabores em Destaque
          </span>
          <h2 className="heading-lg text-white">As favoritas da galera</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {destaques.map((pizza, index) => (
            <motion.div
              key={pizza.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                <Image
                  src={pizza.imagem}
                  alt={pizza.nome}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{pizza.nome}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{pizza.descricao}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-accent">
                    R$ {pizza.preco.toFixed(2)}
                  </span>
                  <WAbizButton
                    unidade="centro"
                    utmContent={pizza.nome.toLowerCase().replace(/\s/g, '_')}
                    className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                  >
                    Pedir
                  </WAbizButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Link href="/cardapio" className="btn-secondary">
            Ver Cardápio Completo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
