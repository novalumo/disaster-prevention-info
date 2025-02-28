'use client';
import InfoCard from '@/components/ui/InfoCard';

export default function VolunteerInfoCard() {
  const handleViewMore = () => {
    // ボランティア情報の詳細ページへ遷移する処理
    console.log('ボランティア情報の詳細を表示');
  };

  return (
    <InfoCard
      title="ボランティア募集"
      content="大船渡市では、復興支援のためのボランティアを募集しています。現地での活動や遠隔でのサポートなど、様々な形で参加いただけます。"
      buttonText="詳細を見る"
      buttonOnClick={handleViewMore}
    />
  );
}
