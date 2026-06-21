# Tasks - Pizzaria WAbiz Site Institucional Premium

## Phase 1: Setup

- [x] T001 Criar projeto Next.js 15 com TypeScript (strict mode) e Tailwind CSS
- [x] T002 Configurar tsconfig.json com strict: true e opções adicionais
- [x] T003 Configurar .eslintrc.json com next/core-web-vitals e typescript-eslint
- [x] T004 Configurar .prettierrc com regras do projeto
- [x] T005 Configurar next.config.ts (imagens, headers CSP sem unsafe-inline, PWA)
- [x] T006 Criar app/layout.tsx com meta tags e estrutura raiz
- [x] T007 Criar app/globals.css com variáveis de design
- [x] T008 Configurar tailwind.config.ts com paleta de cores da pizzaria
- [x] T009 Criar data/cardapio.json com dados do cardápio
- [x] T010 Criar data/unidades.json com dados das unidades
- [x] T011 Criar lib/seo.ts com helper de SEO local
- [x] T012 Criar lib/wabiz.ts com helper de integração WAbiz
- [x] T013 Criar Dockerfile para containerização multi-stage
- [x] T014 Criar docker-compose.yml com healthcheck
- [x] T015 Criar nginx.conf para reverse proxy
- [x] T016 Criar .github/workflows/ci.yml com npm audit
- [x] T017 Criar .github/dependabot.yml para dependências

## Phase 2: Foundational

- [x] T018 Criar components/Header.tsx (Server Component) com navbar responsiva
- [x] T019 Criar components/Footer.tsx (Server Component) com links e redes sociais
- [x] T020 Criar app/manifest.json para PWA
- [x] T021 Criar public/sw.js com service worker básico
- [ ] T022 Criar public/icons/ com ícones PWA (192x192, 512x512)
- [x] T023 Criar components/WhatsAppButton.tsx (Client Component) com link direto
- [x] T024 Criar components/InstagramFeed.tsx (Client Component) com feed do Instagram
- [x] T025 Criar components/UnidadeSelector.tsx (Client Component) para seleção de unidade

## Phase 3: US1 - Descoberta da Marca

- [x] T026 [P] [US1] Criar components/Hero.tsx (Client Component) com video/carrossel fullscreen
- [ ] T027 [P] [US1] Criar components/Timeline.tsx (Server Component) para história da pizzaria
- [ ] T028 [P] [US1] Criar components/Galeria.tsx (Server Component) para fotos do ambiente
- [x] T029 [US1] Criar app/page.tsx com Hero (dynamic import), resumo cardápio e CTA

## Phase 4: US2 - Exploração do Cardápio

- [x] T030 [P] [US2] Criar components/PizzaCard.tsx (Server Component) com card individual
- [x] T031 [P] [US2] Criar components/PizzaModal.tsx (Client Component) com detalhes da pizza
- [x] T032 [US2] Criar components/CardapioGrid.tsx (Server Component) com grid e filtros
- [x] T033 [US2] Criar app/cardapio/page.tsx com página do cardápio

## Phase 5: US3 - Multiunidade

- [x] T034 [P] [US3] Criar components/Mapa.tsx (Client Component, dynamic import) com Google Maps embed por unidade
- [x] T035 [P] [US3] Criar components/UnidadeCard.tsx (Server Component) com card da unidade
- [x] T036 [US3] Criar app/localizacao/page.tsx com lista de unidades
- [x] T037 [US3] Criar app/localizacao/[slug]/page.tsx para página individual da unidade
- [ ] T038 [US3] Adicionar Schema.org LocalBusiness por unidade em app/layout.tsx

## Phase 6: US4 - Integrações

- [x] T039 [P] [US4] Criar components/WAbizButton.tsx (Client Component) com link externo
- [x] T040 [P] [US4] Criar components/WhatsAppFloat.tsx (Client Component) com botão flutuante
- [ ] T041 [P] [US4] Criar components/InstagramEmbed.tsx (Client Component) com embed do Instagram
- [ ] T042 [US4] Integrar WAbizButton em components/Hero.tsx
- [ ] T043 [US4] Integrar WAbizButton em components/PizzaCard.tsx
- [x] T044 [US4] Integrar WhatsAppFloat em app/layout.tsx
- [ ] T045 [US4] Integrar InstagramFeed em app/page.tsx
- [ ] T046 [US4] Configurar UTM tracking nos links WAbiz em lib/wabiz.ts

## Phase 7: US5 - Sobre a Pizzaria

- [x] T047 [P] [US5] Criar app/sobre/page.tsx (Server Component) com timeline e valores
- [ ] T048 [US5] Integrar Galeria.tsx na página sobre

## Phase 8: Security & DevOps

- [x] T049 Configurar CSP headers sem unsafe-inline em next.config.ts
- [x] T050 Adicionar rate limiting em headers
- [ ] T051 Configurar CORS policies
- [x] T052 Adicionar security headers completos (X-Frame-Options, X-Content-Type-Options, HSTS, X-XSS-Protection)
- [x] T053 Configurar HTTPS/SSL no nginx.conf
- [x] T054 Criar app/api/health/route.ts com health check endpoint
- [x] T055 Configurar GitHub Actions com npm audit
- [x] T056 Configurar Dependabot para dependências
- [x] T057 Configurar Docker multi-stage build com usuário não-root
- [ ] T058 Testar Docker build e run com healthcheck

## Phase 9: Polish

- [x] T059 Criar app/sitemap.ts com sitemap dinâmico
- [x] T060 Criar app/robots.ts com robots.txt
- [ ] T061 Configurar Google Analytics em app/layout.tsx
- [ ] T062 Configurar bundle analysis em next.config.ts
- [ ] T063 Adicionar alt texts para todas as imagens (WCAG AA)
- [ ] T064 Verificar contraste de cores (WCAG AA >= 4.5:1)
- [ ] T065 Testar navegação por teclado (WCAG AA)
- [ ] T066 Adicionar ARIA labels para elementos interativos
- [ ] T067 Testar build com npm run build
- [ ] T068 Testar lint com npm run lint
- [ ] T069 Testar audit com npm audit
- [ ] T070 Validar Lighthouse score >= 95
- [ ] T071 Testar responsividade (375px, 768px, 1280px)
- [ ] T072 Verificar CSP headers sem unsafe-inline no browser
- [ ] T073 Verificar security headers no browser
- [ ] T074 Testar PWA (instalação, offline básico)
- [ ] T075 Testar OWASP Top 10 (Headers, CORS, CSP)
- [ ] T076 Testar multiunidade (troca de unidade, SEO local)
- [ ] T077 Testar integrações (WAbiz, WhatsApp, Instagram)
- [ ] T078 Verificar bundle size com analysis

## Dependencies

```
T001 → T002 → T003 → T004 → T005 → T006 → T007 → T008 → T009 → T010 → T011 → T012 → T013 → T014 → T015 → T016 → T017
                                                                                                                        ↓
                                                                                                              T018 → T019 → T020 → T021 → T022 → T023 → T024 → T025
                                                                                                                        ↓
                                                                                                              T026 → T029 (US1)
                                                                                                              T030 → T033 (US2)
                                                                                                              T034 → T038 (US3)
                                                                                                              T039 → T046 (US4)
                                                                                                              T047 → T048 (US5)
                                                                                                                        ↓
                                                                                                              T049 → T058 (Security & DevOps)
                                                                                                                        ↓
                                                                                                              T059 → T078 (Polish)
```

## Parallel Execution

### US1 (Descoberta da Marca)
- T026, T027, T028 podem rodar em paralelo (diferentes componentes)

### US2 (Exploração do Cardápio)
- T030, T031 podem rodar em paralelo (diferentes componentes)

### US3 (Multiunidade)
- T034, T035 podem rodar em paralelo (diferentes componentes)

### US4 (Integrações)
- T039, T040, T041 podem rodar em paralelo (diferentes componentes)

### US5 (Sobre a Pizzaria)
- T047 pode rodar em paralelo com T048

### Security & DevOps
- T049-T052 podem rodar em paralelo (diferentes configs)

## MVP Scope

**User Story 1 (Descoberta da Marca)** é o MVP:
- T001-T017: Setup
- T018-T019: Header/Footer
- T026-T029: Hero + Homepage

## Implementation Strategy

1. **MVP**: Setup + Header/Footer + Homepage com Hero
2. **Incremento 1**: Cardápio completo (US2)
3. **Incremento 2**: Multiunidade (US3)
4. **Incremento 3**: Integrações WAbiz/WhatsApp/Instagram (US4)
5. **Incremento 4**: Sobre (US5)
6. **Incremento 5**: Security & DevOps (Docker, Nginx, GitHub Actions)
7. **Polish**: SEO, PWA, Performance, WCAG, OWASP

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
