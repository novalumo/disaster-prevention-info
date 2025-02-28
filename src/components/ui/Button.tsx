import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

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
  const baseStyles = 'px-4 py-2 rounded transition-colors';

  const variantStyles = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline:
      'bg-transparent border border-blue-700 text-blue-700 hover:bg-blue-50',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
}
