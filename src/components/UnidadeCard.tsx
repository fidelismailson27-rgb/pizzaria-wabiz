'use client';

import Link from 'next/link';
import { generateWhatsAppLink, getWhatsAppMensagemUnidade } from '@/lib/wabiz';
import { trackCTAClick } from '@/lib/analytics';
import type { Unidade } from '@/lib/sanity-queries';

interface UnidadeCardProps {
  unidade: Unidade;
}

export default function UnidadeCard({ unidade }: UnidadeCardProps) {
  const whatsappUrl = generateWhatsAppLink(
    unidade.whatsapp,
    getWhatsAppMensagemUnidade(unidade.nome)
  );

  return (
    <div className="group card transition-all hover:-translate-y-1">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-500">
        📍
      </div>

      <h3 className="text-xl font-semibold text-dark-900">{unidade.nome}</h3>
      <p className="mt-2 text-dark-500">{unidade.endereco}</p>

      <div className="mt-4 space-y-1 text-sm text-dark-400">
        <p>📞 {unidade.telefone}</p>
        <p>🕐 Seg-Sex: {unidade.horarios?.sexta || '18:00-01:00'}</p>
        <p>🕐 Sáb-Dom: {unidade.horarios?.sabado || '18:00-01:00'}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={`/localizacao/${unidade.slug.current}`}
          className="btn-primary flex-1 justify-center text-sm"
          onClick={() =>
            trackCTAClick('Ver Detalhes', 'localizacao', `/localizacao/${unidade.slug.current}`)
          }
        >
          Ver Detalhes
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 justify-center text-sm"
          onClick={() => trackCTAClick('WhatsApp', 'localizacao', whatsappUrl)}
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
