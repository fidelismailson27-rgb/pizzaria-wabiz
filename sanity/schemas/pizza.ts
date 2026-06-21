import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pizza',
  title: 'Pizza',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nome', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'preco',
      title: 'Preço',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'categoria' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ingredientes',
      title: 'Ingredientes',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'destaque',
      title: 'Destaque',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'disponivel',
      title: 'Disponível',
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
    select: {
      title: 'nome',
      subtitle: 'descricao',
      media: 'imagem',
    },
  },
  orderings: [
    {
      title: 'Ordem',
      name: 'ordemAsc',
      by: [{ field: 'ordem', direction: 'asc' }],
    },
  ],
});
