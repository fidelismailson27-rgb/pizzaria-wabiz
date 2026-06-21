const timeline = [
  {
    year: '2010',
    title: 'O Início',
    description: 'Abertura da primeira unidade no bairro Consolação, com apenas 5 mesas.',
  },
  {
    year: '2013',
    title: 'Expansão',
    description: 'Inauguração da segunda unidade em Vinhedo, atendendo a região metropolitana.',
  },
  {
    year: '2016',
    title: 'Reconhecimento',
    description: 'Eleita a melhor pizzaria da cidade pelo terceiro ano consecutivo.',
  },
  {
    year: '2019',
    title: 'Nova Unidade',
    description: 'Abertura da terceira unidade em Campinas, consolidando nossa presença no interior.',
  },
  {
    year: '2022',
    title: 'Inovação',
    description: 'Lançamento do cardápio de pizzas premium com ingredientes importados.',
  },
  {
    year: '2024',
    title: 'Presente',
    description: 'Mais de 100.000 pizzas vendidas e 3 unidades atendendo toda a região.',
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* Line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-200 dark:bg-primary-800 md:left-1/2 md:-translate-x-1/2" />

      {/* Items */}
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div
            key={item.year}
            className={`relative flex items-start gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white md:left-1/2">
              {item.year.slice(-2)}
            </div>

            {/* Content */}
            <div
              className={`ml-12 flex-1 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}
            >
              <div className="card">
                <div className="text-sm font-semibold text-primary-500">{item.year}</div>
                <h3 className="mt-1 text-lg font-bold text-dark-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-dark-500 dark:text-dark-400">{item.description}</p>
              </div>
            </div>

            {/* Spacer for alignment */}
            <div className="hidden flex-1 md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
