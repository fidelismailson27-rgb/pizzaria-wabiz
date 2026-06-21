interface WAbizLinkOptions {
  unidade: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
}

export function generateWAbizLink(options: WAbizLinkOptions): string {
  const baseUrl = `https://wabiz.com.br/pizzaria-premium-${options.unidade}`;

  const params = new URLSearchParams();

  if (options.utmSource) params.append('utm_source', options.utmSource);
  if (options.utmMedium) params.append('utm_medium', options.utmMedium);
  if (options.utmCampaign) params.append('utm_campaign', options.utmCampaign);
  if (options.utmContent) params.append('utm_content', options.utmContent);

  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

export function generateWhatsAppLink(telefone: string, mensagem?: string): string {
  const baseUrl = `https://wa.me/${telefone}`;

  if (mensagem) {
    const encodedMessage = encodeURIComponent(mensagem);
    return `${baseUrl}?text=${encodedMessage}`;
  }

  return baseUrl;
}

export function generateInstagramLink(usuario: string): string {
  return `https://www.instagram.com/${usuario.replace('@', '')}`;
}

export function generateGoogleMapsLink(endereco: string): string {
  const encodedAddress = encodeURIComponent(endereco);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}

export function getWhatsAppMensagemUnidade(nomeUnidade: string): string {
  return `Olá! Gostaria de fazer um pedido na ${nomeUnidade}. Podem me ajudar?`;
}

export const UTM_CONFIG = {
  source: 'site',
  medium: 'cta',
  campaign: 'pizzaria_wabiz',
} as const;
