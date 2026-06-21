import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'banner',
  title: 'Banner Home',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitulo',
      title: 'Subtítulo',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'textoBotao',
      title: 'Texto do Botão',
      type: 'string',
      initialValue: 'Ver Cardápio',
    }),
    defineField({
      name: 'linkBotao',
      title: 'Link do Botão',
      type: 'string',
      initialValue: '/cardapio',
    }),
    defineField({
      name: 'ativo',
      title: 'Ativo',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'titulo', subtitle: 'subtitulo', media: 'imagem' },
  },
  orderings: [
    {
      title: 'Ordem',
      name: 'ordemAsc',
      by: [{ field: 'ordem', direction: 'asc' }],
    },
  ],
});
