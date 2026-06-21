import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'categoria',
  title: 'Categoria',
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
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'nome', subtitle: 'descricao' },
  },
});
