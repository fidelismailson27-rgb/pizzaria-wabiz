import { MetadataRoute } from 'next';
import unidades from '@/data/unidades.json';

const baseUrl = 'https://pizzaria-wabiz.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cardapio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/localizacao`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  const unidadePages = unidades.unidades.map((unidade) => ({
    url: `${baseUrl}/localizacao/${unidade.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...unidadePages];
}
