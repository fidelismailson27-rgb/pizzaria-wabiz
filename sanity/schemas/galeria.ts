import { defineField, defineType } from 'sanity';
import CloudinaryUploadInput from '../components/CloudinaryUploadInput';

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
      name: 'uploadCloudinary',
      title: 'Upload Cloudinary',
      type: 'string',
      description: 'Use este campo para enviar foto ou vídeo direto ao Cloudinary.',
      components: {
        input: CloudinaryUploadInput,
      },
    }),
    defineField({
      name: 'cloudinaryUrl',
      title: 'URL Cloudinary (imagem ou vídeo)',
      type: 'url',
      description: 'URL completa do Cloudinary. Usada com prioridade sobre upload do Sanity.',
    }),
    defineField({
      name: 'cloudinaryPosterUrl',
      title: 'Poster Cloudinary (vídeo)',
      type: 'url',
      description: 'URL do poster/capa no Cloudinary para vídeos.',
      hidden: ({ parent }) => parent?.tipo !== 'video',
    }),
    defineField({
      name: 'cloudinaryPublicId',
      title: 'Public ID Cloudinary',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem (Sanity)',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.tipo === 'video',
      description: 'Upload via Sanity. Usado apenas se cloudinaryUrl estiver vazio.',
    }),
    defineField({
      name: 'video',
      title: 'Vídeo (Sanity)',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm,video/quicktime',
      },
      hidden: ({ parent }) => parent?.tipo !== 'video',
      description: 'Upload via Sanity. Usado apenas se cloudinaryUrl estiver vazio.',
    }),
    defineField({
      name: 'poster',
      title: 'Poster do vídeo (Sanity)',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.tipo !== 'video',
      description: 'Upload via Sanity. Usado apenas se cloudinaryPosterUrl estiver vazio.',
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
