import InfoCard from '@/components/ui/InfoCard';

export default function ShelterInfoCard() {
  const shelterList = [
    'リアスホール',
    '岩手県立福祉の里センター',
    '第一中学校体育館',
    '大船渡中学校体育館',
    '猪川小学校体育館',
  ];
  return <InfoCard title="避難所情報" listItems={shelterList} />;
}
