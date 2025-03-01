import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-100 transition-colors',
        className,
      )}
    >
      {children}
    </div>
  );
}
