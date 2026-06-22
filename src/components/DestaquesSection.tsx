'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const destaques = [
  {
    nome: 'Venerato do Dia',
    descricao: 'Todos os dias vários sabores por apenas R$ 60,99',
    imagem: '/pizzas/moda-casa.jpg',
    destaque: true,
  },
  {
    nome: 'Pudim no Copo',
    descricao: 'Novidade irresistível',
    imagem: '/products/pudim-copo.jpg',
    destaque: false,
  },
  {
    nome: 'Empadas Artesanais',
    descricao: 'Recheio generoso e massa folhada',
    imagem: '/products/empada.jpg',
    destaque: false,
  },
  {
    nome: 'Combo II',
    descricao: '2 Pizzas Grandes + 1 Coca 2 Litros',
    imagem: '/pizzas/calabresa.jpg',
    destaque: false,
  },
  {
    nome: 'Combo I',
    descricao: '1 Pizza Grande + 1 Pizza Broto Doce',
    imagem: '/pizzas/calabresa.jpg',
    destaque: false,
  },
  {
    nome: 'Pizzas Grandes',
    descricao: 'Todos os sabores em tamanho grande',
    imagem: '/pizzas/moda-casa.jpg',
    destaque: false,
  },
  {
    nome: 'Pizzas Broto',
    descricao: 'Tamanho ideal para quem quer experimentar',
    imagem: '/pizzas/frango.jpg',
    destaque: false,
  },
  {
    nome: 'Bebidas',
    descricao: 'Refrigerantes, sucos e mais',
    imagem: '/pizzas/frango.jpg',
    destaque: false,
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
            Nosso Menu
          </span>
          <h2 className="heading-lg text-white">O que você encontra aqui</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {destaques.map((item, index) => (
            <motion.div
              key={item.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.destaque && (
                  <div className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white shadow-lg">
                    Destaque
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold text-white sm:text-lg">{item.nome}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/60 sm:text-sm">
                  {item.descricao}
                </p>
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
