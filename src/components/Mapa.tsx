'use client';

import { generateGoogleMapsLink } from '@/lib/wabiz';

interface MapaProps {
  endereco: string;
  lat: number;
  lng: number;
  nome: string;
}

export default function Mapa({ endereco, lat, lng, nome }: MapaProps) {
  const mapsUrl = generateGoogleMapsLink(endereco);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      {/* Map embed */}
      <div className="relative aspect-video bg-dark-100">
        <iframe
          title={`Mapa - ${nome}`}
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzIxLjAiUyA0NsKwMzgnNTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-dark-900">{nome}</h3>
        <p className="mt-1 text-sm text-dark-500">{endereco}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center text-sm font-medium text-primary-500 hover:underline"
        >
          Abrir no Google Maps →
        </a>
      </div>
    </div>
  );
}
