import { generateWAbizLink, UTM_CONFIG } from '@/lib/wabiz';

export default function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-yellow-500 py-6 sm:py-8">
      <div className="container-custom flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <span className="mb-1 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            🔥 Promoção do Dia
          </span>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Venerato Especial</h2>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-3xl font-extrabold text-white sm:text-4xl">R$ 60,99</span>
          <a
            href={generateWAbizLink({
              unidade: 'centro',
              utmSource: UTM_CONFIG.source,
              utmMedium: UTM_CONFIG.medium,
              utmCampaign: UTM_CONFIG.campaign,
              utmContent: 'promo_dia',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 sm:px-8 sm:text-base"
          >
            Pedir Agora
          </a>
        </div>
      </div>
    </section>
  );
}
