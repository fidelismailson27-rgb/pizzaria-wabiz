import Link from 'next/link';

export default function SobrePreview() {
  return (
    <section className="section-padding bg-dark-950 text-white">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-lg mb-6">Nossa História</h2>
            <p className="mb-4 text-lg text-dark-300">
              Há mais de 20 anos, a Venerato Pizzas vem encantando paladares com pizzas artesanais
              de qualidade incomparável. Nascida do sonho de criar algo especial, nossa pizzaria se
              tornou referência em Taboão da Serra e Campo Limpo.
            </p>
            <p className="mb-8 text-dark-400">
              Cada pizza é uma obra de arte, feita com ingredientes selecionados, massa fermentada
              naturalmente e o cuidado de artesãos apaixonados pela perfeição.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-500">20+</div>
                <div className="text-sm text-dark-400">Anos de tradição</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">2</div>
                <div className="text-sm text-dark-400">Unidades</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">100%</div>
                <div className="text-sm text-dark-400">Artesanal</div>
              </div>
            </div>
            <Link href="/sobre" className="btn-primary mt-8 inline-flex">
              Conheça Nossa História
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-dark-800">
              <div className="flex h-full items-center justify-center text-6xl">🍕</div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary-500 p-6 text-white shadow-xl">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Artesanal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
