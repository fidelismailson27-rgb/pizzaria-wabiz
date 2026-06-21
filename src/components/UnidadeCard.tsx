import Link from 'next/link';
import { generateWhatsAppLink, getWhatsAppMensagemUnidade } from '@/lib/wabiz';

interface Unidade {
  id: string;
  nome: string;
  slug: string;
  endereco: string;
  telefone: string;
  whatsapp: string;
  horarios: Record<string, string>;
}

interface UnidadeCardProps {
  unidade: Unidade;
}

export default function UnidadeCard({ unidade }: UnidadeCardProps) {
  return (
    <div className="group card transition-all hover:-translate-y-1">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900/20">
        📍
      </div>

      <h3 className="text-xl font-semibold text-dark-900 dark:text-white">{unidade.nome}</h3>
      <p className="mt-2 text-dark-500 dark:text-dark-400">{unidade.endereco}</p>

      <div className="mt-4 space-y-1 text-sm text-dark-400">
        <p>📞 {unidade.telefone}</p>
        <p>🕐 Seg-Sex: {unidade.horarios.sexta}</p>
        <p>🕐 Sáb-Dom: {unidade.horarios.sabado}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={`/localizacao/${unidade.slug}`}
          className="btn-primary flex-1 justify-center text-sm"
        >
          Ver Detalhes
        </Link>
        <a
          href={generateWhatsAppLink(unidade.whatsapp, getWhatsAppMensagemUnidade(unidade.nome))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 justify-center text-sm"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
