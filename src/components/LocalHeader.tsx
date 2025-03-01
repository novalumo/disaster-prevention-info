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
        {/* 最終更新日を右上に配置 */}
        {lastUpdated && (
          <div className="flex justify-end mb-3">
            <div className="bg-white/10 px-3 py-1.5 rounded-md text-sm">
              最終更新日:{' '}
              <strong>{format(lastUpdated, 'yyyy年MM月dd日 HH:mm')}</strong>
            </div>
          </div>
        )}

        {/* メインコンテンツ */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold">{areaName}の防災情報</h1>
            <p className="mt-2">{description}</p>
          </div>

          {/* メニュー */}
          {menuItems && menuItems.length > 0 && (
            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap gap-3 md:gap-2">
                {menuItems.map((item) => (
                  <li key={item.id} className="w-full md:w-auto">
                    <Link
                      href={item.href}
                      className="block px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-center font-medium"
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
