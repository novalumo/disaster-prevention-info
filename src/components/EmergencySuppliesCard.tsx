import InfoCard from './ui/InfoCard';

export default function EmergencySuppliesCard() {
  const suppliesList = [
    '□ 非常食・飲料水',
    '□ 懐中電灯・予備電池',
    '□ 携帯ラジオ',
    '□ 救急用品',
  ];

  return (
    <InfoCard
      title="防災グッズチェックリスト"
      titleAs="h3"
      listItems={suppliesList}
    />
  );
}
