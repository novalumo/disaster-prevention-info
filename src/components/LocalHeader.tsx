import { cn } from '@/lib/cn';

export default function LocalHeader({
  areaName,
  description,
  lastUpdated,
  className,
}: {
  areaName: string;
  description: string;
  lastUpdated?: string;
  className?: string;
}) {
  return (
    <header className={cn('bg-blue-700 text-white py-6', className)}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">{areaName}の防災情報</h1>
        <p className="mt-2">{description}</p>
        {lastUpdated && (
          <p className="mt-2 text-sm">
            最終更新日: <strong>{lastUpdated}</strong>
          </p>
        )}
      </div>
    </header>
  );
}
