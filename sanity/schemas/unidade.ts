import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'unidade',
  title: 'Unidade',
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
      name: 'endereco',
      title: 'Endereço',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cep',
      title: 'CEP',
      type: 'string',
    }),
    defineField({
      name: 'telefone',
      title: 'Telefone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'Número sem + e espaços',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
    }),
    defineField({
      name: 'horarios',
      title: 'Horários',
      type: 'object',
      fields: [
        defineField({ name: 'segunda', title: 'Segunda', type: 'string' }),
        defineField({ name: 'terca', title: 'Terça', type: 'string' }),
        defineField({ name: 'quarta', title: 'Quarta', type: 'string' }),
        defineField({ name: 'quinta', title: 'Quinta', type: 'string' }),
        defineField({ name: 'sexta', title: 'Sexta', type: 'string' }),
        defineField({ name: 'sabado', title: 'Sábado', type: 'string' }),
        defineField({ name: 'domingo', title: 'Domingo', type: 'string' }),
      ],
    }),
    defineField({
      name: 'mapa',
      title: 'Coordenadas do Mapa',
      type: 'object',
      fields: [
        defineField({ name: 'lat', title: 'Latitude', type: 'number' }),
        defineField({ name: 'lng', title: 'Longitude', type: 'number' }),
      ],
    }),
    defineField({
      name: 'wabiz',
      title: 'Link WAbiz',
      type: 'url',
      description: 'URL completa da loja na WAbiz',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      description: '@usuario',
    }),
    defineField({
      name: 'destaque',
      title: 'Destaque',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'nome', subtitle: 'endereco' },
  },
});
