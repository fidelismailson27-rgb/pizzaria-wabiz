'use client';

import { useState, useEffect } from 'react';
import { generateWhatsAppLink, getWhatsAppMensagemUnidade } from '@/lib/wabiz';

interface WhatsAppFloatProps {
  telefone: string;
  nomeUnidade?: string;
}

export default function WhatsAppFloat({
  telefone,
  nomeUnidade = 'Venerato Pizzas',
}: WhatsAppFloatProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const link = generateWhatsAppLink(telefone, getWhatsAppMensagemUnidade(nomeUnidade));

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white animate-pulse shadow-[0_0_30px_rgba(34,197,94,.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,.8)]"
      aria-label="Contato via WhatsApp"
    >
      <span className="text-lg">💬</span>
      <span className="hidden font-semibold md:inline">Pedir no WhatsApp</span>
    </a>
  );
}
