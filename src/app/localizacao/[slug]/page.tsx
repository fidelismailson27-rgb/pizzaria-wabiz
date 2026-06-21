import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mapa from '@/components/Mapa';
import WhatsAppButton from '@/components/WhatsAppButton';
import WAbizButton from '@/components/WAbizButton';
import { generateUnidadeMetadata, generateLocalBusinessSchema } from '@/lib/seo';
import unidades from '@/data/unidades.json';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return unidades.unidades.map((unidade) => ({
    slug: unidade.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const unidade = unidades.unidades.find((u) => u.slug === slug);
  if (!unidade) return {};
  return generateUnidadeMetadata(unidade);
}

export default async function UnidadePage({ params }: PageProps) {
  const { slug } = await params;
  const unidade = unidades.unidades.find((u) => u.slug === slug);

  if (!unidade) {
    notFound();
  }

  const schema = generateLocalBusinessSchema(unidade);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h1 className="heading-xl mb-4">{unidade.nome}</h1>
            <p className="text-lg text-dark-600 dark:text-dark-300">{unidade.endereco}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Info */}
            <div className="space-y-6">
              <div className="card">
                <h2 className="mb-4 text-xl font-semibold text-dark-900 dark:text-white">
                  Informações
                </h2>
                <div className="space-y-3 text-dark-600 dark:text-dark-300">
                  <p>📞 {unidade.telefone}</p>
                  <p>✉️ {unidade.email}</p>
                  <p>📍 {unidade.cep}</p>
                </div>
              </div>

              <div className="card">
                <h2 className="mb-4 text-xl font-semibold text-dark-900 dark:text-white">
                  Horário de Funcionamento
                </h2>
                <div className="space-y-2 text-sm">
                  {Object.entries(unidade.horarios).map(([dia, horario]) => (
                    <div key={dia} className="flex justify-between">
                      <span className="capitalize text-dark-500 dark:text-dark-400">{dia}</span>
                      <span className="font-medium text-dark-900 dark:text-white">{horario}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <WAbizButton unidade={unidade.slug} className="flex-1 justify-center">
                  Pedir Agora
                </WAbizButton>
                <WhatsAppButton
                  telefone={unidade.whatsapp}
                  mensagem={`Olá! Gostaria de fazer um pedido na ${unidade.nome}.`}
                  className="flex-1 justify-center"
                >
                  WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            {/* Mapa */}
            <div>
              <Mapa
                endereco={unidade.endereco}
                lat={unidade.mapa.lat}
                lng={unidade.mapa.lng}
                nome={unidade.nome}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
