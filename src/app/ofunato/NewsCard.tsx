import InfoCard from '@/components/ui/InfoCard';

export default function NewsCard() {
  const newsList = [''];

  return <InfoCard title="最新のお知らせ" titleAs="h3" listItems={newsList} />;
}
