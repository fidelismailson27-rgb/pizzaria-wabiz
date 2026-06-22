export function generateWAbizLink(): string {
  return 'https://veneratopizzas.wabiz.delivery/';
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
  campaign: 'venerato_pizzas',
} as const;
