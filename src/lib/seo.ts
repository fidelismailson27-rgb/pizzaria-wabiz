import { Metadata } from 'next';

interface UnidadeSEO {
  id: string;
  nome: string;
  slug: string;
  endereco: string;
  telefone: string;
  mapa: {
    lat: number;
    lng: number;
  };
}

export function generateUnidadeMetadata(unidade: UnidadeSEO): Metadata {
  return {
    title: `${unidade.nome} | Pedir Pizza Online`,
    description: `Peça sua pizza favorita na ${unidade.nome}. ${unidade.endereco}. Acesse o cardápio e faça seu pedido pela WAbiz!`,
    openGraph: {
      title: `${unidade.nome} | Pedir Pizza Online`,
      description: `Peça sua pizza favorita na ${unidade.nome}. ${unidade.endereco}.`,
      url: `https://venerato-pizzas.vercel.app/localizacao/${unidade.slug}`,
      type: 'website',
      locale: 'pt_BR',
    },
    alternates: {
      canonical: `/localizacao/${unidade.slug}`,
    },
  };
}

export function generateLocalBusinessSchema(unidade: UnidadeSEO) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Pizzeria',
    name: unidade.nome,
    image: '/brand/logo-venerato.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: unidade.endereco,
      addressLocality: 'Taboão da Serra',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    telephone: unidade.telefone,
    url: `https://venerato-pizzas.vercel.app/localizacao/${unidade.slug}`,
    priceRange: '$$',
    servesCuisine: 'Italian',
    hasMenu: '/cardapio',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: unidade.mapa.lat,
      longitude: unidade.mapa.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
        opens: '18:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '18:00',
        closes: '01:00',
      },
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Venerato Pizzas',
    url: 'https://venerato-pizzas.vercel.app',
    logo: '/brand/logo-venerato.svg',
    sameAs: ['https://www.instagram.com/veneratopizzas', 'https://www.facebook.com/veneratopizzas'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-94744-5932',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://venerato-pizzas.vercel.app${item.url}`,
    })),
  };
}
