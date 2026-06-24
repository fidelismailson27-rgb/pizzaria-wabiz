import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galeria',
  title: 'Galeria',
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
      rows: 3,
    }),
    defineField({
      name: 'tipo',
      title: 'Tipo',
      type: 'string',
      options: {
        list: [
          { title: 'Imagem', value: 'imagem' },
          { title: 'Vídeo', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'imagem',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.tipo === 'video',
    }),
    defineField({
      name: 'video',
      title: 'Vídeo',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm,video/quicktime',
      },
      hidden: ({ parent }) => parent?.tipo !== 'video',
    }),
    defineField({
      name: 'poster',
      title: 'Poster do vídeo',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.tipo !== 'video',
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'destaque',
      title: 'Destaque',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ativo',
      title: 'Ativo',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'tipo',
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
