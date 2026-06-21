import type { Pizza, Unidade, Categoria, Banner, Configuracoes } from './sanity-queries';
import {
  fetchPizzas as sanityFetchPizzas,
  fetchPizzasDestaque as sanityFetchPizzasDestaque,
  fetchUnidades as sanityFetchUnidades,
  fetchUnidadesDestaque as sanityFetchUnidadesDestaque,
  fetchCategorias as sanityFetchCategorias,
  fetchBanners as sanityFetchBanners,
  fetchConfiguracoes as sanityFetchConfiguracoes,
} from './sanity-queries';
import {
  fallbackPizzas,
  fallbackUnidades,
  fallbackCategorias,
  fallbackConfiguracoes,
} from './sanity-fallback';

const isSanityConfigured = !!(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== ''
);

export async function getPizzas(): Promise<Pizza[]> {
  if (!isSanityConfigured) return fallbackPizzas;
  const data = await sanityFetchPizzas();
  return data.length > 0 ? data : fallbackPizzas;
}

export async function getPizzasDestaque(): Promise<Pizza[]> {
  if (!isSanityConfigured) return fallbackPizzas.filter((p) => p.destaque);
  const data = await sanityFetchPizzasDestaque();
  return data.length > 0 ? data : fallbackPizzas.filter((p) => p.destaque);
}

export async function getUnidades(): Promise<Unidade[]> {
  if (!isSanityConfigured) return fallbackUnidades;
  const data = await sanityFetchUnidades();
  return data.length > 0 ? data : fallbackUnidades;
}

export async function getUnidadesDestaque(): Promise<Unidade[]> {
  if (!isSanityConfigured) return fallbackUnidades.filter((u) => u.destaque);
  const data = await sanityFetchUnidadesDestaque();
  return data.length > 0 ? data : fallbackUnidades.filter((u) => u.destaque);
}

export async function getCategorias(): Promise<Categoria[]> {
  if (!isSanityConfigured) return fallbackCategorias;
  const data = await sanityFetchCategorias();
  return data.length > 0 ? data : fallbackCategorias;
}

export async function getBanners(): Promise<Banner[]> {
  if (!isSanityConfigured) return [];
  const data = await sanityFetchBanners();
  return data;
}

export async function getConfiguracoes(): Promise<Configuracoes> {
  if (!isSanityConfigured) return fallbackConfiguracoes;
  const data = await sanityFetchConfiguracoes();
  return data || fallbackConfiguracoes;
}
