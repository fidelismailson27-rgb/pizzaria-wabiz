#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RAW_DIR="$ROOT_DIR/public/gallery/raw"
OUT_DIR="$ROOT_DIR/public/gallery"
IMAGE_QUALITY="${IMAGE_QUALITY:-80}"
VIDEO_CRF="${VIDEO_CRF:-30}"
KEEP_AUDIO="${KEEP_AUDIO:-0}"

if ! command -v ffmpeg >/dev/null 2>&1 || ! command -v ffprobe >/dev/null 2>&1; then
  echo "ffmpeg/ffprobe nao encontrado."
  echo "Instale com: apt install -y ffmpeg imagemagick webp"
  exit 1
fi

if ! command -v cwebp >/dev/null 2>&1 && ! command -v magick >/dev/null 2>&1 && ! command -v convert >/dev/null 2>&1; then
  echo "Nenhum otimizador de imagem encontrado."
  echo "Instale com: apt install -y ffmpeg imagemagick webp"
  exit 1
fi

mkdir -p "$RAW_DIR" "$OUT_DIR"

shopt -s nullglob nocaseglob

optimize_video() {
  local input="$1"
  local filename
  local basename
  local output
  local poster_jpg
  local audio_args

  filename="$(basename "$input")"
  basename="${filename%.*}"
  output="$OUT_DIR/$basename.mp4"
  poster_jpg="$OUT_DIR/$basename-poster.jpg"

  if [[ "$KEEP_AUDIO" == "1" ]]; then
    audio_args=(-c:a aac -b:a 96k)
  else
    audio_args=(-an)
  fi

  echo "Otimizando video: $filename"
  ffmpeg -y -i "$input" \
    -vf "scale='if(gt(iw/ih,16/9),min(1280,iw),-2)':'if(gt(iw/ih,16/9),-2,min(720,ih))':force_original_aspect_ratio=decrease" \
    -c:v libx264 -preset slow -crf "$VIDEO_CRF" -pix_fmt yuv420p \
    "${audio_args[@]}" \
    -movflags +faststart \
    "$output"

  ffmpeg -y -ss 00:00:01 -i "$output" -frames:v 1 -q:v 3 "$poster_jpg" >/dev/null 2>&1 || true
}

optimize_image() {
  local input="$1"
  local filename
  local basename
  local output

  filename="$(basename "$input")"
  basename="${filename%.*}"
  output="$OUT_DIR/$basename.webp"

  echo "Otimizando imagem: $filename"
  if command -v cwebp >/dev/null 2>&1; then
    cwebp -quiet -q "$IMAGE_QUALITY" -resize 1600 0 "$input" -o "$output"
  elif command -v magick >/dev/null 2>&1; then
    magick "$input" -auto-orient -resize '1600x1600>' -quality "$IMAGE_QUALITY" "$output"
  else
    convert "$input" -auto-orient -resize '1600x1600>' -quality "$IMAGE_QUALITY" "$output"
  fi
}

video_files=("$RAW_DIR"/*.mp4 "$RAW_DIR"/*.mov "$RAW_DIR"/*.m4v "$RAW_DIR"/*.webm)
image_files=("$RAW_DIR"/*.jpg "$RAW_DIR"/*.jpeg "$RAW_DIR"/*.png)

if (( ${#video_files[@]} == 0 && ${#image_files[@]} == 0 )); then
  echo "Nenhuma midia encontrada em public/gallery/raw."
  echo "Coloque videos/imagens nessa pasta e rode novamente."
  exit 0
fi

for file in "${video_files[@]}"; do
  optimize_video "$file"
done

for file in "${image_files[@]}"; do
  optimize_image "$file"
done

echo "Midias otimizadas em public/gallery."
