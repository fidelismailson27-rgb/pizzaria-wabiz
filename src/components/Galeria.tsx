const fotos = [
  { id: 1, alt: 'Interior da pizzaria', categoria: 'ambiente' },
  { id: 2, alt: 'Pizzaria à noite', categoria: 'ambiente' },
  { id: 3, alt: 'Chef preparando pizza', categoria: 'equipe' },
  { id: 4, alt: 'Massa sendo preparada', categoria: 'cozinha' },
  { id: 5, alt: 'Pizza saindo do forno', categoria: 'cozinha' },
  { id: 6, alt: 'Clientes felizes', categoria: 'ambiente' },
  { id: 7, alt: 'Nossa equipe', categoria: 'equipe' },
  { id: 8, alt: 'Detalhe da pizza', categoria: 'cardapio' },
];

export default function Galeria() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {fotos.map((foto) => (
        <div
          key={foto.id}
          className="group relative aspect-square overflow-hidden rounded-xl bg-dark-100 dark:bg-dark-800"
        >
          <div className="flex h-full items-center justify-center text-4xl text-dark-300">
            📷
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-sm font-medium text-white">{foto.alt}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
