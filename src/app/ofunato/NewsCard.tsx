import InfoCard from '@/components/ui/InfoCard';

export default function NewsCard() {
  const newsList = [
    '2024/02/26 防災訓練のお知らせ',
    '2024/02/25 ハザードマップ更新',
    '2024/02/24 避難所情報更新',
  ];

  return <InfoCard title="最新のお知らせ" titleAs="h3" listItems={newsList} />;
}
