import Link from 'next/link';
import { motion } from 'framer-motion';
import { getUnidadesDestaque } from '@/lib/data';

export default async function LocalizacaoPreview() {
  const unidades = await getUnidadesDestaque();

  return (
    <section className="section-padding bg-dark-950 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="heading-lg mb-4">Nossas Unidades</h2>
          <p className="mx-auto max-w-2xl text-dark-300">
            Encontre a Venerato Pizzas mais perto de você
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {unidades.map((unidade, index) => (
            <motion.div
              key={unidade._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/localizacao/${unidade.slug.current}`}
                className="glass-card group block transition-all hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  📍
                </div>
                <h3 className="text-xl font-semibold text-white">{unidade.nome}</h3>
                <p className="mt-2 text-dark-300">{unidade.endereco}</p>
                <div className="mt-4 text-sm text-dark-400">
                  <p>📞 {unidade.telefone}</p>
                  <p className="mt-1">🕐 Seg-Sex: {unidade.horarios?.sexta || '18:00-01:00'}</p>
                </div>
                <div className="mt-4 text-sm font-medium text-primary group-hover:underline">
                  Ver localização →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/localizacao" className="btn-secondary">
            Ver Todas as Unidades
          </Link>
        </div>
      </div>
    </section>
  );
}
