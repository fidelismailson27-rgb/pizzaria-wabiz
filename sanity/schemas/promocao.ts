import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'promocao',
  title: 'Promoção',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'desconto',
      title: 'Desconto (%)',
      type: 'number',
      validation: (rule) => rule.min(0).max(100),
    }),
    defineField({
      name: 'dataInicio',
      title: 'Data Início',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dataFim',
      title: 'Data Fim',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ativa',
      title: 'Ativa',
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
    select: { title: 'titulo', subtitle: 'descricao', media: 'imagem' },
  },
  orderings: [
    {
      title: 'Ordem',
      name: 'ordemAsc',
      by: [{ field: 'ordem', direction: 'asc' }],
    },
  ],
});
