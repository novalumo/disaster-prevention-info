import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
};

export default function Button({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  const baseStyles =
    'px-4 py-2 rounded-md transition-all duration-200 font-medium shadow-sm hover:shadow focus:ring-2 focus:ring-offset-2 disabled:opacity-50';

  const variantStyles = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline:
      'bg-transparent border-2 border-blue-700 text-blue-700 hover:bg-blue-50 focus:ring-blue-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
}
