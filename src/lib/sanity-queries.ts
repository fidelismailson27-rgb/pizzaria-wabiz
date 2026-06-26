import { sanityClient } from './sanity';
export interface Categoria {
  _id: string;
  nome: string;
  slug: { current: string };
  descricao: string;
  ordem: number;
}

export interface Pizza {
  _id: string;
  nome: string;
  slug: { current: string };
  descricao: string;
  preco: number;
  categoria: Categoria;
  imagem: { asset: { _ref: string } };
  ingredientes: string[];
  destaque: boolean;
  disponivel: boolean;
  ordem: number;
}

export interface Unidade {
  _id: string;
  nome: string;
  slug: { current: string };
  endereco: string;
  cep: string;
  telefone: string;
  whatsapp: string;
  email: string;
  horarios: Record<string, string>;
  mapa: { lat: number; lng: number };
  wabiz: string;
  instagram: string;
  destaque: boolean;
  ordem: number;
}

export interface Banner {
  _id: string;
  titulo: string;
  subtitulo: string;
  imagem: { asset: { _ref: string } };
  textoBotao: string;
  linkBotao: string;
  ativo: boolean;
  ordem: number;
}

export interface Promocao {
  _id: string;
  titulo: string;
  descricao: string;
  imagem?: { asset: { _ref: string } };
  desconto?: number;
  dataInicio: string;
  dataFim: string;
  ativa: boolean;
  ordem: number;
}

export interface Configuracoes {
  _id: string;
  nomePizzaria: string;
  slogan: string;
  logo?: { asset: { _ref: string } };
  descricao: string;
  telefone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  facebook: string;
  wabiz: string;
  googleAnalyticsId: string;
}

export interface GaleriaItem {
  cloudinaryUrl?: string;
  cloudinaryPosterUrl?: string;
  cloudinaryPublicId?: string;
  _id: string;
  titulo: string;
  descricao?: string;
  tipo: 'imagem' | 'video';
  ordem: number;
  destaque: boolean;
  ativo?: boolean;
  imagem?: { asset?: { _ref?: string; url?: string } } | string;
  video?: { asset?: { _ref?: string; url?: string } } | string;
  poster?: { asset?: { _ref?: string; url?: string } } | string;
}

// Queries
export const QUERIES = {
  categorias: `*[_type == "categoria"] | order(ordem asc) {
    _id, nome, slug, descricao, ordem
  }`,

  pizzas: `*[_type == "pizza" && disponivel == true] | order(ordem asc) {
    _id, nome, slug, descricao, preco, 
    categoria-> {_id, nome, slug},
    imagem, ingredientes, destaque, disponivel, ordem
  }`,

  pizzasDestaque: `*[_type == "pizza" && destaque == true && disponivel == true] | order(ordem asc) [0...4] {
    _id, nome, slug, descricao, preco, 
    categoria-> {_id, nome, slug},
    imagem, ingredientes, destaque, disponivel, ordem
  }`,

  unidades: `*[_type == "unidade"] | order(ordem asc) {
    _id, nome, slug, endereco, cep, telefone, whatsapp, email,
    horarios, mapa, wabiz, instagram, destaque, ordem
  }`,

  unidadesDestaque: `*[_type == "unidade" && destaque == true] | order(ordem asc) {
    _id, nome, slug, endereco, cep, telefone, whatsapp, email,
    horarios, mapa, wabiz, instagram, destaque, ordem
  }`,

  banners: `*[_type == "banner" && ativo == true] | order(ordem asc) {
    _id, titulo, subtitulo, imagem, textoBotao, linkBotao, ativo, ordem
  }`,

  promocoesAtivas: `*[_type == "promocao" && ativa == true && dataInicio <= now() && dataFim >= now()] | order(ordem asc) {
    _id, titulo, descricao, imagem, desconto, dataInicio, dataFim, ativa, ordem
  }`,

  configuracoes: `*[_type == "configuracoes"][0] {
    _id, nomePizzaria, slogan, logo, descricao, telefone, whatsapp,
    email, instagram, facebook, wabiz, googleAnalyticsId
  }`,

  galeria: `*[_type == "galeria" && ativo == true] | order(ordem asc) {
    _id, titulo, descricao, tipo, ordem, destaque, ativo,
    cloudinaryUrl, cloudinaryPosterUrl, cloudinaryPublicId, imagem,
    "video": video{asset->{_id, url}},
    poster
  }`,
};

// Fetch functions with error handling
export async function fetchCategorias(): Promise<Categoria[]> {
  try {
    if (!sanityClient) return [];
    return await sanityClient.fetch(QUERIES.categorias);
  } catch {
    console.warn('Sanity offline, using fallback data');
    return [];
  }
}

export async function fetchPizzas(): Promise<Pizza[]> {
  try {
    if (!sanityClient) return [];
    return await sanityClient.fetch(QUERIES.pizzas);
  } catch {
    console.warn('Sanity offline, using fallback data');
    return [];
  }
}

export async function fetchPizzasDestaque(): Promise<Pizza[]> {
  try {
    if (!sanityClient) return [];
    return await sanityClient.fetch(QUERIES.pizzasDestaque);
  } catch {
    console.warn('Sanity offline, using fallback data');
    return [];
  }
}

export async function fetchUnidades(): Promise<Unidade[]> {
  try {
    if (!sanityClient) return [];
    return await sanityClient.fetch(QUERIES.unidades);
  } catch {
    console.warn('Sanity offline, using fallback data');
    return [];
  }
}

export async function fetchUnidadesDestaque(): Promise<Unidade[]> {
  try {
    if (!sanityClient) return [];
    return await sanityClient.fetch(QUERIES.unidadesDestaque);
  } catch {
    console.warn('Sanity offline, using fallback data');
    return [];
  }
}

export async function fetchBanners(): Promise<Banner[]> {
  try {
    if (!sanityClient) return [];
    return await sanityClient.fetch(QUERIES.banners);
  } catch {
    console.warn('Sanity offline, using fallback data');
    return [];
  }
}

export async function fetchPromocoesAtivas(): Promise<Promocao[]> {
  try {
    if (!sanityClient) return [];
    return await sanityClient.fetch(QUERIES.promocoesAtivas);
  } catch {
    console.warn('Sanity offline, using fallback data');
    return [];
  }
}

export async function fetchConfiguracoes(): Promise<Configuracoes | null> {
  try {
    if (!sanityClient) return null;
    return await sanityClient.fetch(QUERIES.configuracoes);
  } catch {
    console.warn('Sanity offline, using fallback data');
    return null;
  }
}

export async function fetchGaleria(): Promise<GaleriaItem[]> {
  try {
    if (!sanityClient) return [];
    return await sanityClient.fetch(QUERIES.galeria);
  } catch {
    console.warn('Sanity offline, using fallback data');
    return [];
  }
}
