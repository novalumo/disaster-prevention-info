import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={twMerge('bg-white p-6 rounded-lg shadow-md', className)}>
      {children}
    </div>
  );
}
