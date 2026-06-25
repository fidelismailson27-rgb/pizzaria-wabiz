'use client';

import { useState, type ChangeEvent } from 'react';
import { Box, Button, Card, Flex, Stack, Text } from '@sanity/ui';
import { PatchEvent, set, unset, type StringInputProps } from 'sanity';

interface UploadResponse {
  secure_url: string;
  optimized_url?: string;
  public_id: string;
  resource_type: 'image' | 'video' | string;
  poster_url?: string | null;
}

type UploadStatus = 'idle' | 'uploading' | 'done' | 'error';

function getTipo(resourceType: string) {
  return resourceType === 'video' ? 'video' : 'imagem';
}

export default function CloudinaryUploadInput(props: StringInputProps) {
  const { onChange, value } = props;
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<UploadResponse | null>(null);

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    setStatus('uploading');
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'venerato/galeria');
    formData.append('resourceType', file.type.startsWith('video/') ? 'video' : 'image');

    try {
      const response = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        body: formData,
      });
      const result = (await response.json()) as UploadResponse & { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Falha no upload para Cloudinary.');
      }

      const cloudinaryUrl = result.optimized_url || result.secure_url;
      const patches: any[] = [
        set(cloudinaryUrl, ['cloudinaryUrl']),
        set(result.public_id, ['cloudinaryPublicId']),
        set(getTipo(result.resource_type), ['tipo']),
        set(`Upload concluído: ${new Date().toLocaleString('pt-BR')}`),
      ];

      if (result.poster_url) {
        patches.push(set(result.poster_url, ['cloudinaryPosterUrl']));
      } else {
        patches.push(unset(['cloudinaryPosterUrl']));
      }

      onChange(PatchEvent.from(patches));
      setPreview(result);
      setStatus('done');
    } catch (uploadError) {
      setStatus('error');
      setError(uploadError instanceof Error ? uploadError.message : 'Erro desconhecido no upload.');
    } finally {
      event.currentTarget.value = '';
    }
  }

  const previewUrl = preview?.optimized_url || preview?.secure_url || value;
  const isVideo = preview?.resource_type === 'video';

  return (
    <Stack space={3}>
      <Card border padding={3} radius={2}>
        <Stack space={3}>
          <Text size={1} weight="semibold">
            Upload direto para Cloudinary
          </Text>
          <Text muted size={1}>
            Selecione uma imagem ou vídeo. Os campos Cloudinary do documento serão preenchidos
            automaticamente. URLs manuais continuam funcionando.
          </Text>
          <Flex align="center" gap={3}>
            <Button
              as="label"
              mode="ghost"
              text={status === 'uploading' ? 'Enviando...' : 'Selecionar arquivo'}
              disabled={status === 'uploading'}
            >
              <input
                accept="image/*,video/*"
                disabled={status === 'uploading'}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                type="file"
              />
            </Button>
            {status === 'done' && (
              <Text size={1} style={{ color: '#2e7d32' }}>
                Upload concluído
              </Text>
            )}
            {status === 'error' && (
              <Text size={1} style={{ color: '#c62828' }}>
                Erro
              </Text>
            )}
          </Flex>
          {error && (
            <Text size={1} style={{ color: '#c62828' }}>
              {error}
            </Text>
          )}
          {previewUrl && (
            <Box>
              {isVideo ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  src={previewUrl}
                  style={{ borderRadius: 8, maxHeight: 240, maxWidth: '100%', width: '100%' }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt="Preview Cloudinary"
                  src={previewUrl}
                  style={{ borderRadius: 8, maxHeight: 240, maxWidth: '100%', objectFit: 'cover' }}
                />
              )}
            </Box>
          )}
        </Stack>
      </Card>
    </Stack>
  );
}
