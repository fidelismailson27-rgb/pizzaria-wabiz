# Pizzaria WAbiz - Site Institucional Premium

## Overview

Site institucional premium para pizzaria, com design sofisticado e experienvia visual envolvente. O site serve como vitrine da marca, apresentando cardápio, história, localização e canais de contato. Não possui funcionalidades de carrinho, pagamento ou gerenciamento de pedidos — essas funcionalidades são tratadas pela plataforma WAbiz.

## User Scenarios & Testing

### Primary User Flows

1. **Descoberta da Marca**: Visitante acessa o site, visualiza a apresentação visual premium (hero section com vídeo/imagens de alta qualidade), e imediatamente compreende o posicionamento da pizzaria.

2. **Exploração do Cardápio**: Visitante navega pelo cardápio visual, visualiza fotos profissionais de cada pizza, filtra por categorias (clássicas, especiais, doces), e visualiza preços.

3. **Encontrar a Unidade**: Visitante acessa a página de localização, visualiza mapa interativo, obtém endereço, horário de funcionamento e telefone.

4. **Contato via WAbiz**: Visitante clica em "Pedir agora" ou "WhatsApp" e é redirecionado para a plataforma WAbiz para realizar o pedido.

5. **Compartilhamento Social**: Visitante compartilha fotos do cardápio ou promoções nas redes sociais.

### Acceptance Scenarios

- DADO que o visitante acessou o site, QUANDO a página carrega em até 3 segundos, ENTÃO o visitante visualiza o hero section com vídeo ou imagem de alta qualidade
- DADO que o visitante está no cardápio, QUANDO filtra por "Especiais", ENTÃO apenas pizzas da categoria especial são exibidas com fotos e preços
- DADO que o visitante quer fazer um pedido, QUANDO clica em "Pedir agora", ENTÃO é redirecionado para a WAbiz com contexto do item selecionado
- DADO que o visitante está na página de localização, QUANDO visualiza o mapa, ENTÃO obtém endereço, horários e opção de abrir no Google Maps
- DADO que o visitante está em dispositivo móvel, QUANDO navega pelo site, ENTÃO a experiência é fluida e responsiva

### Edge Cases

- Usuário com conexão lenta: site deve funcionar com imagens de baixa resolução (lazy loading)
- Usuário sem JavaScript: conteúdo essencial deve ser acessível
- SEO: páginas devem ser indexáveis por motores de busca
- Acessibilidade: navegação por teclado e leitores de tela

## Functional Requirements

### FR-01: Hero Section Premium
- Exibição de vídeo ou carrossel de imagens de alta qualidade em tela cheia
- Texto sobreposto com nome da pizzaria e slogan
- Botão CTA "Ver Cardápio" e "Pedir Agora"
- Animação suave ao scroll

### FR-02: Cardápio Visual
- Grid de pizzas com fotos profissionais
- Categorias: Clássicas, Especiais, Doces, Bebidas
- Exibição de nome, descrição curta e preço
- Filtro por categoria
- Modal ou página de detalhes com foto ampliada e ingredientes

### FR-03: Sobre a Pizzaria
- Seção de história da pizzaria com timeline visual
- Valores e diferenciais da marca
- Fotos do ambiente e equipe
- Galeria de imagens

### FR-04: Localização e Contato
- Mapa interativo com endereço
- Horário de funcionamento
- Telefone e WhatsApp
- Link para Google Maps
- Redes sociais (Instagram, Facebook)

### FR-05: Integração WAbiz
- Botão "Pedir Agora" que redireciona para WAbiz
- Botão WhatsApp com link para atendimento
- Contexto passado ao WAbiz (quando aplicável)

### FR-06: Design Responsivo
- Layout adaptado para mobile, tablet e desktop
- Menu hamburguer em dispositivos móveis
- Touch-friendly em elementos interativos

### FR-07: Performance
- Lazy loading de imagens
- Otimização de assets (compressão, formatos modernos)
- Cache de navegador

### FR-08: SEO e Métricas
- Meta tags otimizadas (title, description, OG tags)
- Schema.org para restaurante
- Integração com Google Analytics
- Sitemap XML

## Success Criteria

- Site carrega completamente em até 3 segundos em conexão 4G
- 100% das páginas são responsivas em dispositivos móveis
- Taxa de rejeição menor que 40% (benchmark do setor gastronômico)
- Visitantes conseguem encontrar informação de contato em até 2 cliques
- 95% das imagens carregam via lazy loading sem impacto na experiência
- Score Lighthouse acima de 90 em todas as categorias
- Site é acessível conforme WCAG 2.1 nível AA

## Key Entities

- **Pizzaria**: Entidade principal com nome, slogan, logo, história
- **Pizza**: Item do cardápio com nome, descrição, preço, foto, categoria
- **Categoria**: Agrupamento de pizzas (Clássicas, Especiais, Doces)
- **Unidade**: Localização física com endereço, horário, telefone
- **RedeSocial**: Links para plataformas sociais

## Assumptions

- A pizzaria possui fotos profissionais de alta qualidade do cardápio e ambiente
- A WAbiz fornece link de integração para pedidos (deep link ou URL personalizada)
- O site será estático (SSG/SSR) para máxima performance e SEO
- Não será necessário painel administrativo para gerenciar conteúdo (atualização via código ou CMS headless simples)
- A pizzaria possui no máximo 3 unidades físicas
- O cardápio contém até 50 itens
- Não há necessidade de multilíngua na primeira versão

## Out of Scope

- Sistema de pedidos online (carrinho, checkout, pagamento)
- Painel administrativo para gerenciamento de pedidos
- Sistema de fidelidade ou cupons
- Agendamento de reservas
- Delivery tracking
- Integração com iFood, Rappi ou outras plataformas de delivery

## Dependencies

- WAbiz: Plataforma de pedidos para redirecionamento
- Google Maps API: Para exibição de mapa
- Hosting: Servidor para deploy do site estático
- CDN: Para distribuição de assets de mídia
