import Image from 'next/image';
import type { GaleriaItem } from '@/lib/sanity-queries';
import { getGaleria } from '@/lib/data';
import { urlForImage } from '@/lib/sanity';

function resolveImageSource(source: GaleriaItem['imagem'] | GaleriaItem['poster']) {
  if (!source) return null;
  if (typeof source === 'string') return source;
  return urlForImage(source);
}

function resolveVideoSource(source: GaleriaItem['video']) {
  if (!source) return null;
  if (typeof source === 'string') return source;
  return source.asset?.url || null;
}

export default async function GaleriaReal() {
  const itens = await getGaleria();

  if (!itens.length) return null;

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: '#11141B' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,194,87,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="container-custom relative">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-md">
            Galeria Real
          </span>
          <h2 className="heading-lg text-white">Fotos e vídeos da Venerato</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            Registros reais dos sabores, bastidores e detalhes que fazem parte da nossa rotina.
          </p>
        </div>

        <div className="grid auto-rows-[240px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {itens.map((item, index) => {
            const imageSource = resolveImageSource(item.imagem);
            const posterSource = resolveImageSource(item.poster);
            const videoSource = resolveVideoSource(item.video);
            const isFeatured = item.destaque || index === 0;
            const mediaClassName = isFeatured ? 'md:col-span-2 md:row-span-2' : '';

            return (
              <article
                key={item._id}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-xl ${mediaClassName}`}
              >
                {item.tipo === 'video' && videoSource ? (
                  <video
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    controls
                    playsInline
                    preload="metadata"
                    poster={posterSource || undefined}
                  >
                    <source src={videoSource} type="video/mp4" />
                  </video>
                ) : imageSource ? (
                  <Image
                    src={imageSource}
                    alt={item.titulo}
                    fill
                    sizes={
                      isFeatured
                        ? '(max-width: 768px) 100vw, 50vw'
                        : '(max-width: 768px) 100vw, 25vw'
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-white/10 text-sm text-white/60">
                    Mídia em breve
                  </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-white">{item.titulo}</h3>
                      {item.descricao && (
                        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/70">
                          {item.descricao}
                        </p>
                      )}
                    </div>
                    {item.tipo === 'video' && (
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                        Vídeo
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/veneratopizzas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex border-white/20 text-white hover:bg-white hover:text-dark-950"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
