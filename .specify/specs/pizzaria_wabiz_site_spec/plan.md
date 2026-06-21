# Plano Técnico - Pizzaria WAbiz Site Institucional Premium

## Contexto Técnico

| Item | Escolha |
|------|---------|
| Framework | Next.js 15 (App Router) |
| Estilo | Tailwind CSS |
| Hospedagem | Vercel + Docker + Nginx |
| Idioma | TypeScript (strict mode) |
| Linting | ESLint + Prettier |
| PWA | Service Worker + Manifest |
| SEO | Local SEO (Google Business) |
| Acessibilidade | WCAG AA |
| Segurança | CSP + OWASP Top 10 |
| CI/CD | GitHub Actions |
| Pedidos/Pagamentos | WAbiz (plataforma externa) |
| Multiunidade | Sim (até 3 unidades) |

## Arquitetura

```
pizzaria-wabiz/
├── app/
│   ├── layout.tsx          # Layout raiz (header, footer, PWA meta)
│   ├── page.tsx            # Homepage (hero, sobre, CTA)
│   ├── cardapio/
│   │   └── page.tsx        # Cardápio com filtros
│   ├── localizacao/
│   │   ├── page.tsx        # Lista de unidades
│   │   └── [slug]/
│   │       └── page.tsx    # Página individual da unidade
│   ├── sobre/
│   │   └── page.tsx        # História, timeline, galeria
│   ├── api/
│   │   └── health/
│   │       └── route.ts    # Health check endpoint
│   ├── manifest.json       # PWA manifest
│   ├── sitemap.ts          # Sitemap dinâmico
│   ├── robots.ts           # Robots.txt
│   └── globals.css
├── components/
│   ├── Header.tsx          # Navbar responsiva
│   ├── Footer.tsx          # Links, redes sociais
│   ├── Hero.tsx            # Video/carrossel fullscreen
│   ├── CardapioGrid.tsx    # Grid de pizzas com filtro
│   ├── PizzaCard.tsx       # Card individual da pizza
│   ├── PizzaModal.tsx      # Modal de detalhes
│   ├── Mapa.tsx            # Google Maps embed por unidade
│   ├── UnidadeCard.tsx     # Card da unidade
│   ├── UnidadeSelector.tsx # Seletor de unidade
│   ├── Timeline.tsx        # Timeline da história
│   ├── Galeria.tsx         # Galeria de imagens
│   ├── WhatsAppButton.tsx  # Botão WhatsApp
│   ├── WhatsAppFloat.tsx   # Botão flutuante WhatsApp
│   ├── InstagramFeed.tsx   # Feed do Instagram
│   ├── InstagramEmbed.tsx  # Embed do Instagram
│   └── WAbizButton.tsx     # Botão WAbiz
├── lib/
│   ├── seo.ts              # Helper de SEO local
│   └── wabiz.ts            # Helper de integração WAbiz
├── data/
│   ├── cardapio.json       # Dados do cardápio
│   └── unidades.json       # Dados das unidades
├── public/
│   ├── images/             # Fotos do cardápio e ambiente
│   ├── icons/              # Ícones PWA
│   └── sw.js               # Service Worker
├── .github/
│   ├── workflows/
│   │   └── ci.yml          # GitHub Actions CI/CD
│   └── dependabot.yml      # Dependabot config
├── .eslintrc.json          # Configuração ESLint
├── .prettierrc             # Configuração Prettier
├── Dockerfile              # Containerização multi-stage
├── docker-compose.yml      # Orquestração
├── nginx.conf              # Reverse proxy
├── next.config.ts          # Configuração Next.js 15
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

## Configurações Obrigatórias

### TypeScript Strict Mode (tsconfig.json)
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### ESLint + Prettier
```json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}

// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### CSP sem unsafe-inline
```typescript
// next.config.ts
headers: [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-eval' https://www.googletagmanager.com",
          "style-src 'self'",
          "img-src 'self' https://maps.googleapis.com data:",
          "font-src 'self'",
          "connect-src 'self' https://www.google-analytics.com",
          "frame-src https://www.google.com https://maps.google.com"
        ].join('; ')
      }
    ]
  }
]
```

### Server Components vs Client Components
```typescript
// Server Component (default)
async function CardapioPage() {
  const cardapio = await getCardapio();
  return <CardapioGrid items={cardapio} />;
}

// Client Component (apenas quando necessário)
'use client';
function PizzaModal({ pizza }: { pizza: Pizza }) {
  const [isOpen, setIsOpen] = useState(false);
  return <Modal isOpen={isOpen}>...</Modal>;
}
```

### Dynamic Imports (componentes pesados)
```typescript
import dynamic from 'next/dynamic';

const PizzaModal = dynamic(() => import('./components/PizzaModal'), {
  loading: () => <p>Carregando...</p>,
  ssr: false
});

const Mapa = dynamic(() => import('./components/Mapa'), {
  loading: () => <div>Carregando mapa...</div>,
  ssr: false
});
```

### Image Optimization
```typescript
import Image from 'next/image';

<Image
  src="/images/pizzas/margherita.jpg"
  alt="Pizza Margherita"
  width={400}
  height={300}
  priority={true}
  placeholder="blur"
  blurDataURL="/images/placeholder.jpg"
/>
```

### Bundle Analysis
```bash
# package.json
{
  "scripts": {
    "analyze": "ANALYZE=true next build"
  }
}

# next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});
```

### Dependabot (.github/dependabot.yml)
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
```

### npm audit no CI
```yaml
# .github/workflows/ci.yml
- name: Run security audit
  run: npm audit --audit-level=high
```

### WCAG AA
```typescript
// Contrast ratio >= 4.5:1 for normal text
// Touch targets >= 44x44px
// Alt texts for all images
// Keyboard navigation support
// ARIA labels for interactive elements
```

### Rate Limiting (next.config.ts)
```typescript
headers: [
  {
    source: '/api/:path*',
    headers: [
      { key: 'X-RateLimit-Limit', value: '100' },
      { key: 'X-RateLimit-Remaining', value: '99' }
    ]
  }
]
```

## Fluxos de Implementação

### Fase 1: Setup do Projeto
1. Criar projeto Next.js 15 com TypeScript (strict) e Tailwind
2. Configurar ESLint + Prettier
3. Configurar next.config.ts (imagens, headers CSP sem unsafe-inline)
4. Criar layout raiz com header, footer e meta tags PWA
5. Configurar Google Analytics
6. Criar Dockerfile multi-stage
7. Criar docker-compose.yml
8. Criar nginx.conf
9. Criar .github/workflows/ci.yml com npm audit
10. Criar .github/dependabot.yml

### Fase 2: Componentes Core
1. **Header.tsx**: Server Component, navbar responsiva
2. **Footer.tsx**: Server Component, links e redes sociais
3. **Hero.tsx**: Client Component (interação), video/carrossel
4. **cardapio.json**: Dados do cardápio
5. **unidades.json**: Dados das unidades
6. **WhatsAppButton.tsx**: Client Component (link externo)
7. **InstagramFeed.tsx**: Client Component (embed)
8. **UnidadeSelector.tsx**: Client Component (estado local)

### Fase 3: Páginas
1. **Homepage**: Server Component com Client Components dinâmicos
2. **Cardápio**: Server Component com filtros
3. **Localização**: Server Component com mapa dinâmico
4. **Localização/[slug]**: Server Component com SEO local
5. **Sobre**: Server Component com galeria

### Fase 4: Integrações
1. Botão "Pedir Agora" → link WAbiz (com UTM tracking)
2. Botão WhatsApp → link direto
3. Botão flutuante WhatsApp
4. Feed/Embed do Instagram
5. Google Maps API (embed) por unidade
6. Schema.org LocalBusiness por unidade
7. PWA: Service Worker + manifest.json

### Fase 5: Segurança & DevOps
1. CSP headers sem unsafe-inline
2. Rate limiting
3. CORS policies
4. Security headers completos
5. HTTPS/SSL no nginx.conf
6. Health check endpoint
7. GitHub Actions com npm audit
8. Dependabot para dependências
9. Docker multi-stage build

### Fase 6: Otimização
1. Lazy loading de imagens (next/image)
2. Dynamic imports para componentes pesados
3. Bundle analysis
4. Meta tags (SEO local + Open Graph)
5. Sitemap XML dinâmico
6. Performance (Lighthouse >= 95)
7. WCAG AA (alt texts, contraste, teclado)

## Segurança - OWASP Top 10

### Headers de Segurança Completos (next.config.ts)
```typescript
headers: [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-eval' https://www.googletagmanager.com",
          "style-src 'self'",
          "img-src 'self' https://maps.googleapis.com data:",
          "font-src 'self'",
          "connect-src 'self' https://www.google-analytics.com",
          "frame-src https://www.google.com https://maps.google.com"
        ].join('; ')
      },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
      { key: 'X-XSS-Protection', value: '1; mode=block' }
    ]
  }
]
```

### OWASP Top 10 Coverage
| Vulnerabilidade | Mitigação |
|-----------------|-----------|
| A01: Broken Access Control | CSP, CORS, Rate Limiting |
| A02: Cryptographic Failures | HTTPS/SSL, No sensitive data in client |
| A03: Injection | Input validation, No SQL/NoSQL |
| A04: Insecure Design | Security headers, OWASP checklist |
| A05: Security Misconfiguration | CSP, CORS, Headers |
| A06: Vulnerable Components | npm audit, Dependabot |
| A07: Auth Failures | No auth (static site) |
| A08: Data Integrity | CSP, SRI |
| A09: Logging | Error boundaries, Analytics |
| A10: SSRF | No server-side requests |

## Multiunidade

### Estrutura de Dados (unidades.json)
```json
{
  "unidades": [
    {
      "id": "centro",
      "nome": "Pizzaria Centro",
      "slug": "centro",
      "endereco": "Rua X, 123 - Centro",
      "telefone": "+55-11-99999-9999",
      "whatsapp": "5511999999999",
      "horarios": {
        "segunda": "18:00-23:00",
        "terca": "18:00-23:00",
        "quarta": "18:00-23:00",
        "quinta": "18:00-23:00",
        "sexta": "18:00-00:00",
        "sabado": "18:00-00:00",
        "domingo": "18:00-23:00"
      },
      "mapa": {
        "lat": -23.5505,
        "lng": -46.6333
      },
      "wabiz": "https://wabiz.com.br/pizzaria-centro"
    }
  ]
}
```

### SEO Local por Unidade
- Schema.org LocalBusiness para cada unidade
- Meta tags `og:locale`, `geo.region`, `geo.position`
- Sitemap com URLs por unidade
- Google Business Profile para cada unidade

## Integrações

### WAbiz (Links Externos)
| Evento | Ação |
|--------|------|
| Clique "Pedir Agora" | Redirect para `https://wabiz.com.br/{slug}?utm_source=site&utm_medium=cta` |
| Clique WhatsApp | Redirect para `https://wa.me/5511999999999` |
| Compartilhar | Web Share API (ou fallback copy link) |

**Escopo WAbiz**:
- Carrinho de compras
- Pagamento online
- Painel de pedidos
- Delivery tracking
- Fidelidade/cupons

### WhatsApp
- Botão no footer com link direto
- Botão flutuante no canto inferior direito
- Link: `https://wa.me/{telefone}?text={mensagem}`

### Instagram
- Feed do Instagram na homepage
- Embed de postagens específicas
- Link para perfil

### Google Maps
- Embed do mapa por unidade
- Link para Google Maps
- Coordenadas para Schema.org

## Docker

### Dockerfile (Multi-stage)
```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
RUN chown -R nextjs:nodejs /app
USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

### docker-compose.yml
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app
```

### nginx.conf
```nginx
events {
    worker_connections 1024;
}
http {
    upstream app {
        server app:3000;
    }
    server {
        listen 80;
        server_name localhost;
        location / {
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
```

## GitHub Actions

### .github/workflows/ci.yml
```yaml
name: CI/CD
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm audit --audit-level=high
      - run: npm run lint
      - run: npm run build
      - run: npm test
  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Arquivos Críticos

| Arquivo | Responsabilidade |
|---------|-----------------|
| `tsconfig.json` | TypeScript strict mode |
| `.eslintrc.json` | ESLint config |
| `.prettierrc` | Prettier config |
| `next.config.ts` | Headers CSP (sem unsafe-inline), imagens, PWA |
| `app/layout.tsx` | Meta tags, PWA, analytics |
| `app/page.tsx` | Homepage com hero e seções |
| `app/cardapio/page.tsx` | Cardápio com filtros |
| `app/localizacao/page.tsx` | Lista de unidades |
| `app/localizacao/[slug]/page.tsx` | Página individual da unidade |
| `app/manifest.json` | PWA manifest |
| `app/sitemap.ts` | Sitemap dinâmico |
| `app/api/health/route.ts` | Health check endpoint |
| `lib/seo.ts` | Helper SEO local |
| `lib/wabiz.ts` | Helper integração WAbiz |
| `components/Hero.tsx` | Video/carrossel premium |
| `components/CardapioGrid.tsx` | Grid responsivo de pizzas |
| `components/Mapa.tsx` | Google Maps embed por unidade |
| `components/UnidadeCard.tsx` | Card da unidade |
| `components/WhatsAppFloat.tsx` | Botão flutuante WhatsApp |
| `components/InstagramFeed.tsx` | Feed do Instagram |
| `components/WAbizButton.tsx` | Botão WAbiz |
| `data/cardapio.json` | Dados do cardápio |
| `data/unidades.json` | Dados das unidades |
| `Dockerfile` | Containerização multi-stage |
| `docker-compose.yml` | Orquestração |
| `nginx.conf` | Reverse proxy |
| `.github/workflows/ci.yml` | GitHub Actions CI/CD |
| `.github/dependabot.yml` | Dependabot config |

## Verificação

1. **Build**: `npm run build` sem erros
2. **Lint**: `npm run lint` sem warnings
3. **Audit**: `npm audit` sem vulnerabilities high/critical
4. **Lighthouse**: Score >= 95 em todas categorias
5. **PWA**: `lighthouse` audit PWA pass
6. **Responsivo**: Testar em mobile (375px), tablet (768px), desktop (1280px)
7. **Multiunidade**: Testar troca de unidade e SEO local
8. **Links WAbiz**: Verificar redirecionamento correto com UTM
9. **SEO**: Validar meta tags, Schema.org e sitemap
10. **CSP**: Verificar headers sem unsafe-inline
11. **OWASP**: Verificar todos os headers de segurança
12. **Docker**: Testar build e run com healthcheck
13. **GitHub Actions**: Verificar CI/CD com npm audit
14. **WCAG AA**: Testar navegação por teclado, contraste, alt texts
15. **Bundle**: Verificar tamanho do bundle com analysis

## Checklist de Qualidade

- [ ] Hero section com video/carrossel funcional
- [ ] Cardápio com filtros por categoria
- [ ] Modal de detalhes da pizza
- [ ] Multiunidade com seleção e páginas individuais
- [ ] Google Maps por unidade
- [ ] Botões WAbiz e WhatsApp funcionais
- [ ] Botão flutuante WhatsApp
- [ ] Feed/Embed do Instagram
- [ ] Menu hamburguer mobile
- [ ] Lazy loading de imagens (next/image)
- [ ] Dynamic imports para componentes pesados
- [ ] Meta tags SEO completas
- [ ] Schema.org LocalBusiness por unidade
- [ ] Sitemap XML dinâmico
- [ ] Google Analytics configurado
- [ ] PWA manifest.json
- [ ] Service Worker funcional
- [ ] CSP headers sem unsafe-inline
- [ ] Security headers completos (OWASP)
- [ ] UTM tracking nos links WAbiz
- [ ] Docker build e run com healthcheck
- [ ] GitHub Actions CI/CD com npm audit
- [ ] Dependabot configurado
- [ ] Nginx reverse proxy
- [ ] Health check endpoint
- [ ] Lighthouse >= 95
- [ ] WCAG AA (alt texts, contraste, teclado)
- [ ] TypeScript strict mode
- [ ] ESLint + Prettier sem erros
- [ ] Bundle analysis pass

## Checklist de Conformidade

- [x] Next.js 15 App Router
- [x] TypeScript strict mode
- [x] ESLint + Prettier
- [x] npm audit no CI
- [x] Dependabot
- [x] CSP sem unsafe-inline
- [x] Security headers completos
- [x] Image optimization do Next.js
- [x] Server Components por padrão
- [x] Client Components apenas quando necessário
- [x] Dynamic imports para componentes pesados
- [x] Bundle analysis
- [x] Lighthouse >= 95
- [x] WCAG AA
- [x] Docker multi-stage
- [x] Healthcheck endpoint
- [x] Rate limiting
- [x] Structured Data LocalBusiness por unidade
- [x] Tailwind CSS
- [x] PWA
- [x] SEO Local
- [x] GitHub Actions
- [x] Nginx
- [x] Multiunidade
- [x] Integração WhatsApp
- [x] Integração Instagram
- [x] Integração WAbiz via links externos
- [x] Google Maps por unidade
- [x] OWASP Top 10
- [x] Sem sistema próprio de pedidos ou pagamentos
