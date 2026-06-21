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
    default: 'Pizzaria Premium | A Melhor Pizza da Cidade',
    template: '%s | Pizzaria Premium',
  },
  description:
    'Descubra a experiência única da nossa pizzaria. Pizzas artesanais com ingredientes selecionados. Peça agora pela WAbiz!',
  keywords: ['pizzaria', 'pizza', 'pizza artesanal', 'melhor pizza', 'delivery', 'WAbiz'],
  authors: [{ name: 'Pizzaria Premium' }],
  creator: 'Pizzaria Premium',
  publisher: 'Pizzaria Premium',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pizzaria-wabiz.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pizzaria-wabiz.vercel.app',
    siteName: 'Pizzaria Premium',
    title: 'Pizzaria Premium | A Melhor Pizza da Cidade',
    description:
      'Descubra a experiência única da nossa pizzaria. Pizzas artesanais com ingredientes selecionados.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizzaria Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizzaria Premium | A Melhor Pizza da Cidade',
    description:
      'Descubra a experiência única da nossa pizzaria. Pizzas artesanais com ingredientes selecionados.',
    images: ['/og-image.jpg'],
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
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f09332' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <WhatsAppFloat telefone="5511999990001" nomeUnidade="Pizzaria Premium" />
      </body>
    </html>
  );
}
