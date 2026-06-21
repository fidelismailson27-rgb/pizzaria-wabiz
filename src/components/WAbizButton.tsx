'use client';

import { generateWAbizLink, UTM_CONFIG } from '@/lib/wabiz';

interface WAbizButtonProps {
  unidade?: string;
  utmContent?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WAbizButton({
  unidade = 'centro',
  utmContent,
  className = 'btn-primary',
  children = 'Pedir Agora',
}: WAbizButtonProps) {
  return (
    <a
      href={generateWAbizLink({
        unidade,
        utmSource: UTM_CONFIG.source,
        utmMedium: UTM_CONFIG.medium,
        utmCampaign: UTM_CONFIG.campaign,
        utmContent,
      })}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
