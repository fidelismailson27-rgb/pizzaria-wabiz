import Link from 'next/link';
import unidades from '@/data/unidades.json';

export default function LocalizacaoPreview() {
  return (
    <section className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-lg mb-4">Nossas Unidades</h2>
          <p className="mx-auto max-w-2xl text-dark-600 dark:text-dark-300">
            Encontre a Pizzaria Premium mais perto de você
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {unidades.unidades.map((unidade) => (
            <Link
              key={unidade.id}
              href={`/localizacao/${unidade.slug}`}
              className="group card transition-all hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900/20">
                📍
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white">
                {unidade.nome}
              </h3>
              <p className="mt-2 text-dark-500 dark:text-dark-400">{unidade.endereco}</p>
              <div className="mt-4 text-sm text-dark-400">
                <p>📞 {unidade.telefone}</p>
                <p className="mt-1">🕐 Seg-Sex: {unidade.horarios.sexta}</p>
              </div>
              <div className="mt-4 text-sm font-medium text-primary-500 group-hover:underline">
                Ver localização →
              </div>
            </Link>
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
