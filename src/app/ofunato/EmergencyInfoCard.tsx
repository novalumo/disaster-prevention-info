import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import List, { ListItem } from '@/components/ui/List';

// https://crisis.yahoo.co.jp/evacuation/03/03203/
export default function EmergencyInfoCard() {
  const evacuationAreas = [
    '上甫嶺地域',
    '合足地域',
    '外口地域',
    '大洞地域',
    '大立地域',
    '宿地域',
    '山口地域',
    '後ノ入地域',
    '森っこ地域',
    '永浜地域',
    '清水地域',
    '生形地域',
    '甫嶺東地域',
    '甫嶺西地域',
    '綾里地区全域',
    '蛸ノ浦地域',
    '長崎地域',
  ];

  return (
    <Card>
      <Heading as="h2" color="primary" className="mb-4">
        避難指示
      </Heading>
      <List className="mb-4">
        {evacuationAreas.map((area) => (
          <ListItem key={`area-${area}`}>{area}</ListItem>
        ))}
      </List>
    </Card>
  );
}
