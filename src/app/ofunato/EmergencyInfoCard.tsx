import InfoCard from '@/components/ui/InfoCard';

export default function EmergencyInfoCard() {
  return (
    <InfoCard
      title="避難指示"
      listItems={[
        '赤崎町　宿・後ノ入・森っこ、大洞・生形・山口地域',
        '赤崎町　大立・永浜・清水・蛸ノ浦・長崎・外口',
      ]}
    />
  );
}
