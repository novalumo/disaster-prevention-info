import InfoCard from '@/components/ui/InfoCard';

export default function NewsCard() {
  const newsList = [
    '2024/06/15 大船渡市災害復興支援基金の受付開始',
    '2024/06/14 ボランティア募集説明会の開催について',
    '2024/06/13 支援物資の受付場所と時間のお知らせ',
    '2024/06/12 災害義援金の配分について',
  ];

  return <InfoCard title="最新のお知らせ" titleAs="h3" listItems={newsList} />;
}
