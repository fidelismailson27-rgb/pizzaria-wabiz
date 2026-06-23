const timeline = [
  {
    year: '2004',
    title: 'O Início',
    description: 'Abertura da primeira unidade em Taboão da Serra.',
  },
  {
    year: '2010',
    title: 'Expansão',
    description: 'Inauguração da segunda unidade em Campo Limpo.',
  },
  {
    year: '2015',
    title: 'Reconhecimento',
    description: 'Eleita a melhor da região.',
  },
  {
    year: '2020',
    title: 'Inovação',
    description: 'Lançamento do cardápio de pizzas premium com ingredientes importados.',
  },
  {
    year: '2024',
    title: 'Presente',
    description: 'Mais de 20 anos de história e 2 unidades atendendo toda a região.',
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-200 dark:bg-primary-800 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div
            key={item.year}
            className={`relative flex items-start gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white md:left-1/2">
              {item.year.slice(-2)}
            </div>

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

            <div className="hidden flex-1 md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
