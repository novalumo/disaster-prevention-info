import InfoCard from '@/components/ui/InfoCard';

export default function ShelterInfoCard() {
  const shelterList = ['○○小学校体育館', '○○市民センター', '○○公民館'];

  return <InfoCard title="避難所情報" listItems={shelterList} />;
}
