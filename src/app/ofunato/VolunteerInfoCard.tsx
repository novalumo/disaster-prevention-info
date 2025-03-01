'use client';
import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

export default function VolunteerInfoCard() {
  const handleViewMore = () => {
    // ボランティア情報の詳細ページへ遷移する処理
    console.log('ボランティア情報の詳細を表示');
  };

  return (
    <Card>
      <Heading as="h2" color="primary" className="mb-4">
        ボランティア募集
      </Heading>
      <p className="text-gray-600 mb-4">
        大船渡市では、復興支援のためのボランティアを募集しています。現地での活動や遠隔でのサポートなど、様々な形で参加いただけます。
      </p>
      <Button onClick={handleViewMore}>詳細を見る</Button>
    </Card>
  );
}
