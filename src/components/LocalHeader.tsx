import { cn } from '@/lib/cn';
import { format } from 'date-fns';
import Link from 'next/link';

type MenuItem = {
  id: string;
  label: string;
  href: string;
};

type LocalHeaderProps = {
  areaName: string;
  description: string;
  lastUpdated?: string;
  className?: string;
  menuItems?: MenuItem[];
};

export default function LocalHeader({
  areaName,
  description,
  lastUpdated,
  className,
  menuItems,
}: LocalHeaderProps) {
  return (
    <header className={cn('bg-blue-700 text-white py-6', className)}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{areaName}の防災情報</h1>
            <p className="mt-2">{description}</p>
            {lastUpdated && (
              <p className="mt-2 text-sm">
                最終更新日:{' '}
                <strong>{format(lastUpdated, 'yyyy年MM月dd日 HH:mm')}</strong>
              </p>
            )}
          </div>
          {menuItems && menuItems.length > 0 && (
            <nav className="ml-4">
              <ul className="flex space-x-6">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-200 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
