import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'configuracoes',
  title: 'Configurações do Site',
  type: 'document',
  fields: [
    defineField({
      name: 'nomePizzaria',
      title: 'Nome da Pizzaria',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'telefone',
      title: 'Telefone Geral',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Geral',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-mail Geral',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),
    defineField({
      name: 'wabiz',
      title: 'Link WAbiz Geral',
      type: 'url',
    }),
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'Ex: G-XXXXXXXXXX',
    }),
  ],
  preview: {
    select: { title: 'nomePizzaria' },
  },
});
