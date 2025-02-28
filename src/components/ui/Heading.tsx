import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  children: ReactNode;
  as?: HeadingLevel;
  className?: string;
  color?: 'default' | 'primary' | 'secondary';
};

export default function Heading({
  children,
  as: Component = 'h2',
  className = '',
  color = 'default',
}: HeadingProps) {
  const colorStyles = {
    default: 'text-gray-800',
    primary: 'text-blue-700',
    secondary: 'text-gray-600',
  };

  const sizeStyles = {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl font-bold',
    h3: 'text-xl font-bold',
    h4: 'text-lg font-bold',
    h5: 'text-base font-bold',
    h6: 'text-sm font-bold',
  };

  return (
    <Component
      className={twMerge(sizeStyles[Component], colorStyles[color], className)}
    >
      {children}
    </Component>
  );
}
