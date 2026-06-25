# Galeria de Mídia Venerato

A home possui uma galeria editável pelo Sanity. O fluxo recomendado é enviar fotos e vídeos pelo próprio Sanity Studio para o Cloudinary. O site usa a URL Cloudinary otimizada quando ela existe e mantém fallback para uploads do Sanity e mídias locais.

## Cloudinary

1. Crie uma conta em <https://cloudinary.com/>.
2. No painel do Cloudinary, copie:
   - Cloud name
   - API key
   - API secret
3. Configure as variáveis localmente em `.env.local`:

```bash
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=seu_api_secret
```

4. Configure as mesmas variáveis na Vercel:
   - Project Settings
   - Environment Variables
   - Adicione `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` e `CLOUDINARY_API_SECRET`
   - Redeploy após salvar

Nunca compartilhe `CLOUDINARY_API_SECRET` e nunca commite `.env.local`.

## Testar conexão

```bash
npm run cloudinary:check
```

Resultado esperado:

```text
CLOUDINARY CONNECTION OK
```

O script mascara a API key e não imprime o secret.

## Subir mídia pelo Sanity

1. Abra o Sanity Studio.
2. Crie ou edite um documento do tipo **Galeria**.
3. Use o campo **Upload Cloudinary**.
4. Selecione uma foto ou vídeo.
5. Aguarde o estado **Upload concluído**.
6. O Studio preenche automaticamente:
   - `cloudinaryUrl`
   - `cloudinaryPosterUrl`, quando for vídeo e houver poster gerado
   - `cloudinaryPublicId`
   - `tipo`, como `imagem` ou `video`
7. Salve/publique o documento.

Campos disponíveis:

- `titulo`: nome curto da mídia.
- `descricao`: texto opcional para aparecer sobre a mídia.
- `tipo`: `imagem` ou `video`.
- `uploadCloudinary`: input de upload direto para Cloudinary.
- `cloudinaryUrl`: URL otimizada da mídia no Cloudinary.
- `cloudinaryPosterUrl`: poster/capa do vídeo no Cloudinary.
- `cloudinaryPublicId`: identificador do asset no Cloudinary.
- `imagem`: fallback/manual via Sanity para fotos.
- `video`: fallback/manual via Sanity para vídeos.
- `poster`: fallback/manual via Sanity para poster de vídeo.
- `ordem`: número para ordenar a galeria.
- `destaque`: destaca o card na home.
- `ativo`: exibe quando ligado.

## Fallback manual

Se o upload direto falhar, ainda é possível colar uma URL manualmente em `cloudinaryUrl` e, para vídeo, preencher `cloudinaryPosterUrl`.

Também é possível usar upload nativo do Sanity pelos campos `imagem`, `video` e `poster`. A prioridade usada pela home é:

1. `cloudinaryUrl`
2. Upload do Sanity (`imagem` ou `video`)
3. Fallback local
4. Placeholder "Mídia em breve"

## Limites recomendados

- Fotos: até 20MB.
- Vídeos: até 100MB.
- Ideal para vídeos: 3MB a 12MB.
- Evite vídeos de 30MB+ quando possível.

Cloudinary otimiza a entrega, mas arquivos muito grandes ainda deixam upload, processamento e preview mais lentos.

## Otimização local opcional

O script `scripts/optimize-media.sh` processa arquivos colocados em:

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

Imagens são exportadas como WebP:

- largura máxima 1600px
- qualidade padrão 80, configurável por `IMAGE_QUALITY`

Uso:

```bash
bash scripts/optimize-media.sh
```

Manter áudio:

```bash
KEEP_AUDIO=1 bash scripts/optimize-media.sh
```

Ajustar qualidade:

```bash
VIDEO_CRF=28 IMAGE_QUALITY=82 bash scripts/optimize-media.sh
```

Se faltar dependência:

```bash
apt install -y ffmpeg imagemagick webp
```

## Fallback local atual

Quando o Sanity está vazio ou indisponível, a home usa:

- `public/products/pudim-copo.jpg`
- `public/products/empada.jpg`
- `public/pizzas/moda-casa.jpg`
- `public/videos/venerato-hero.mp4`

Isso mantém build e home funcionando mesmo sem conteúdo publicado no Sanity.
