'use client';

interface WAbizButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function WAbizButton({
  className = 'btn-primary',
  children = 'Pedir Agora',
}: WAbizButtonProps) {
  return (
    <a
      href="https://veneratopizzas.wabiz.delivery/"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
