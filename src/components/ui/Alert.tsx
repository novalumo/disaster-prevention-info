'use client';
import { useState, type ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type AlertVariant = 'info' | 'warning' | 'error' | 'success';

type AlertProps = {
  title?: string;
  children: ReactNode;
  variant?: AlertVariant;
  dismissible?: boolean;
  className?: string;
};

const variantStyles = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  success: 'bg-green-50 border-green-200 text-green-800',
};

export default function Alert({
  title,
  children,
  variant = 'info',
  dismissible = false,
  className = '',
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={`border rounded-md p-4 mb-4 ${variantStyles[variant]} ${className}`}
      role="alert"
    >
      {title && <h3 className="font-semibold mb-1">{title}</h3>}
      <div className="flex items-start">
        <div className="flex-grow">{children}</div>
        {dismissible && (
          <button
            type="button"
            className="ml-3 -mt-1 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsVisible(false)}
            aria-label="閉じる"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
