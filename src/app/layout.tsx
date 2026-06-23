import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Venerato Pizzas | A Melhor Pizza da Cidade',
    template: '%s | Venerato Pizzas',
  },
  description:
    'Descubra a experiência única da Venerato Pizzas. Pizzas artesanais com ingredientes selecionados. Peça agora pela WAbiz!',
  keywords: [
    'pizza',
    'pizza artesanal',
    'melhor pizza',
    'delivery',
    'Venerato',
    'WAbiz',
    'Taboão da Serra',
  ],
  authors: [{ name: 'Venerato Pizzas' }],
  creator: 'Venerato Pizzas',
  publisher: 'Venerato Pizzas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://venerato-pizzas.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://venerato-pizzas.vercel.app',
    siteName: 'Venerato Pizzas',
    title: 'Venerato Pizzas | A Melhor Pizza da Cidade',
    description:
      'Descubra a experiência única da Venerato Pizzas. Pizzas artesanais com ingredientes selecionados.',
    images: [
      {
        url: '/brand/logo-venerato-transparent.png',
        width: 1200,
        height: 630,
        alt: 'Venerato Pizzas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venerato Pizzas | A Melhor Pizza da Cidade',
    description:
      'Descubra a experiência única da Venerato Pizzas. Pizzas artesanais com ingredientes selecionados.',
    images: ['/brand/logo-venerato-transparent.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/brand/logo-venerato-transparent.png',
    shortcut: '/brand/logo-venerato-transparent.png',
    apple: '/brand/logo-venerato-transparent.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFF8E7' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1115' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans antialiased" style={{ backgroundColor: '#FFF8E7' }}>
        {children}
        <WhatsAppFloat telefone="5511947445932" nomeUnidade="Venerato Pizzas" />
      </body>
    </html>
  );
}
