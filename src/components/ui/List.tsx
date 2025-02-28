import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ListProps = {
  children: ReactNode;
  className?: string;
  type?: 'ul' | 'ol';
};

export default function List({
  children,
  className = '',
  type = 'ul',
}: ListProps) {
  const Component = type;

  return (
    <Component className={twMerge('space-y-2 text-gray-600', className)}>
      {children}
    </Component>
  );
}

type ListItemProps = {
  children: ReactNode;
  className?: string;
};

export function ListItem({ children, className = '' }: ListItemProps) {
  return <li className={className}>{children}</li>;
}
