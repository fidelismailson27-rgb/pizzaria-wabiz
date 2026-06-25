# Galeria de Mídia Venerato

Este projeto possui uma galeria editável pelo Sanity para fotos e vídeos reais da Venerato. A home usa os itens ativos do schema `galeria` e cai para fallback local quando o Sanity está vazio ou indisponível.

## Campos no Sanity

Crie documentos do tipo **Galeria** com:

- `titulo`: nome curto da mídia.
- `descricao`: texto opcional para aparecer sobre a mídia.
- `tipo`: escolha `imagem` ou `video`.
- `cloudinaryUrl`: URL completa do Cloudinary (prioritário sobre upload do Sanity).
- `cloudinaryPosterUrl`: URL do poster/capa no Cloudinary para vídeos.
- `imagem`: foto principal via Sanity (usada se `cloudinaryUrl` estiver vazio).
- `video`: arquivo de vídeo via Sanity (usado se `cloudinaryUrl` estiver vazio).
- `poster`: imagem de capa via Sanity (usada se `cloudinaryPosterUrl` estiver vazio).
- `ordem`: número para ordenar a galeria.
- `destaque`: marca cards maiores na home.
- `ativo`: deixe ligado para exibir.

## Uso do Cloudinary (recomendado)

O Cloudinary é a forma recomendada de hospedar mídia, pois otimiza automaticamente imagens e vídeos.

### Configuração

1. Crie uma conta no [Cloudinary](https://cloudinary.com/).
2. Faça upload das imagens/vídeos no painel do Cloudinary.
3. Copie a URL completa de cada mídia.
4. No Sanity, cole a URL no campo `cloudinaryUrl`.

### Otimização automática

O componente `GaleriaReal` aplica otimizações automaticamente:

**Imagens:**
- `f_auto` → formato automático (WebP/AVIF conforme o browser)
- `q_auto` → qualidade automática
- `w_1200` → largura máxima de 1200px

**Vídeos:**
- `f_auto` → formato automático
- `q_auto` → qualidade automática

### Exemplo de URL Cloudinary

```
https://res.cloudinary.com/seu-cloud/raw/upload/v1234567890/foto-pizza.jpg
```

Após a otimização automática:
```
https://res.cloudinary.com/seu-cloud/raw/upload/f_auto,q_auto,w_1200/v1234567890/foto-pizza.jpg
```

### Poster para vídeos

Para vídeos, configure `cloudinaryPosterUrl` com a URL de uma imagem de capa. Se não configurado, o vídeo será exibido sem poster.

## Upload via Sanity (alternativa)

Se preferir não usar Cloudinary, faça upload direto no Sanity:

### Como subir fotos

Use fotos reais, bem iluminadas e sem texto embutido sempre que possível. Antes de subir fotos grandes, otimize para WebP:

```bash
bash scripts/optimize-media.sh
```

Coloque os arquivos originais em `public/gallery/raw`. O script gera imagens WebP em `public/gallery` com largura máxima de 1600px e qualidade entre 75 e 82.

### Como subir vídeos

Prefira vídeos curtos, verticais ou horizontais bem enquadrados, com 6 a 15 segundos. O limite recomendado para publicar é **3MB a 12MB** por vídeo. Evite vídeos de **30MB+**, pois eles prejudicam muito o carregamento mobile.

No Sanity:

1. Selecione `tipo = video`.
2. Suba o arquivo otimizado no campo `video`.
3. Suba um `poster` JPG/WebP leve.
4. Preencha `ordem`, `destaque` e `ativo`.

## Prioridade de mídia

O componente `GaleriaReal` verifica as fontes nesta ordem:

1. `cloudinaryUrl` (Cloudinary) — prioridade máxima
2. `imagem`/`video` (Sanity upload) — fallback
3. Placeholder "Mídia em breve" — se nada estiver configurado

## Otimização local

O script `scripts/optimize-media.sh` procura arquivos em:

```text
public/gallery/raw
```

E exporta para:

```text
public/gallery
```

Vídeos são exportados como MP4 H.264 compatível com mobile:

- largura máxima 1280px ou altura máxima 720px
- `crf` padrão 30, configurável por `VIDEO_CRF`
- `preset slow`
- `movflags +faststart`
- `pix_fmt yuv420p`
- sem áudio por padrão
- poster JPG gerado automaticamente

Para manter áudio:

```bash
KEEP_AUDIO=1 bash scripts/optimize-media.sh
```

Para ajustar qualidade:

```bash
VIDEO_CRF=28 IMAGE_QUALITY=82 bash scripts/optimize-media.sh
```

Se faltar dependência, instale:

```bash
apt install -y ffmpeg imagemagick webp
```

## Fallback local

Quando o Sanity estiver vazio ou falhar, a home usa:

- `public/products/pudim-copo.jpg`
- `public/products/empada.jpg`
- `public/pizzas/moda-casa.jpg`
- `public/videos/venerato-hero.mp4`

Isso mantém o build e a home funcionando mesmo sem conteúdo publicado no Sanity.
