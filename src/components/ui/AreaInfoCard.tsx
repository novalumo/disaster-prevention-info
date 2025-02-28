import Link from 'next/link';
import Card from './Card';
import Heading from './Heading';
import Button from './Button';

type AreaInfoCardProps = {
  name: string;
  description: string;
  path: string;
  imageUrl?: string;
  lastUpdated?: string;
  buttonText?: string;
  className?: string;
};

export default function AreaInfoCard({
  name,
  description,
  path,
  imageUrl,
  lastUpdated,
  buttonText = '詳細を見る',
  className,
}: AreaInfoCardProps) {
  return (
    <Card className={`flex flex-col h-full ${className || ''}`}>
      {imageUrl && (
        <div className="h-40 mb-4 overflow-hidden rounded-md">
          <img
            src={imageUrl}
            alt={`${name}の画像`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <Heading as="h2" color="primary" className="mb-2">
        {name}
      </Heading>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>

      {lastUpdated && (
        <div className="text-sm text-gray-500 mb-3">
          最終更新: {lastUpdated}
        </div>
      )}

      <Link href={path} className="mt-auto">
        <Button className="w-full">{buttonText}</Button>
      </Link>
    </Card>
  );
}
