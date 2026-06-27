import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const studioOrigins = 'https://www.sanity.io https://*.sanity.io';
const studioContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://core.sanity-cdn.com https://www.sanity.io https://*.sanity.io",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io https://*.sanity.io https://res.cloudinary.com https://avatars.githubusercontent.com",
  "media-src 'self' blob: https://cdn.sanity.io https://res.cloudinary.com",
  "font-src 'self'",
  "connect-src 'self' https://*.sanity.io https://api.sanity.io https://gnepwp1u.api.sanity.io wss://gnepwp1u.api.sanity.io https://sanity-cdn.com https://*.sanity-cdn.com https://api.cloudinary.com https://res.cloudinary.com",
  'frame-src https://www.google.com https://maps.google.com',
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  `frame-ancestors 'self' ${studioOrigins}`,
].join('; ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' https://maps.googleapis.com https://maps.gstatic.com https://cdn.sanity.io data: blob:",
      "media-src 'self' https://cdn.sanity.io blob:",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.sanity.io",
      'frame-src https://www.google.com https://maps.google.com',
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

const sanityFrameSecurityHeaders = securityHeaders
  .filter((header) => header.key !== 'X-Frame-Options')
  .map((header) => {
    if (header.key !== 'Content-Security-Policy') return header;
    return {
      ...header,
      value: header.value.replace(
        "frame-ancestors 'none'",
        `frame-ancestors 'self' ${studioOrigins}`,
      ),
    };
  });

const studioSecurityHeaders = securityHeaders
  .filter((header) => header.key !== 'X-Frame-Options')
  .map((header) => {
    if (header.key !== 'Content-Security-Policy') return header;
    return {
      ...header,
      value: studioContentSecurityPolicy,
    };
  });

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'maps.googleapis.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: sanityFrameSecurityHeaders,
      },
      {
        source: '/studio/:path*',
        headers: studioSecurityHeaders,
      },
      {
        source: '/((?!$)(?!studio(?:/.*)?$).*)',
        headers: securityHeaders,
      },
      {
        source: '/api/:path*',
        headers: [
          ...securityHeaders,
          { key: 'X-RateLimit-Limit', value: '100' },
          { key: 'X-RateLimit-Remaining', value: '99' },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
