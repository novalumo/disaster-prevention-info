import Link from 'next/link';
import Card from './ui/Card';
import Heading from './ui/Heading';
import Button from './ui/Button';

type AreaCardProps = {
  name: string;
  description: string;
  path: string;
  imageUrl?: string;
};

export default function AreaCard({
  name,
  description,
  path,
  imageUrl,
}: AreaCardProps) {
  return (
    <Card className="flex flex-col h-full">
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
      <Link href={path} className="mt-auto">
        <Button className="w-full">詳細を見る</Button>
      </Link>
    </Card>
  );
}
