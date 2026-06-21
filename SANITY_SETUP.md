# Configuração do Sanity CMS

## Passo 1: Criar conta no Sanity

1. Acesse https://www.sanity.io/
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Anote o **Project ID**

## Passo 2: Configurar variáveis de ambiente

Edite o arquivo `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Passo 3: Criar datasets

```bash
npx sanity dataset create production
```

## Passo 4: Inserir dados iniciais

Acesse o Sanity Studio:

```bash
cd /root/pizzaria-wabiz
npx sanity dev
```

O Studio estará disponível em http://localhost:3333

### Criar categorias:
1. Clássicas
2. Especiais
3. Doces
4. Bebidas

### Criar pizzas:
Adicione as pizzas com nome, descrição, preço, categoria, imagem e ingredientes.

### Criar unidades:
Adicione as 3 unidades com endereço, telefone, horários e coordenadas.

### Criar configurações:
Adicione as configurações gerais do site (nome, slogan, telefone, etc).

## Passo 5: Deploy

```bash
# Build
npm run build

# Deploy no Vercel
vercel --prod
```

## Notas

- Enquanto o Sanity não estiver configurado, o site usa dados estáticos (fallback)
- As imagens são servidas pelo CDN do Sanity (cdn.sanity.io)
- O CSP foi atualizado para permitir o Sanity CDN
