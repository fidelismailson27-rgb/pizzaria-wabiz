'use client';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function trackCTAClick(buttonName: string, page: string, destinationUrl: string) {
  if (!GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', 'click_cta', {
    button_name: buttonName,
    page,
    destination_url: destinationUrl,
  });
}
