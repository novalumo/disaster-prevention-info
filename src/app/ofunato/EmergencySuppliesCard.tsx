import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import List, { ListItem } from '@/components/ui/List';

export default function EmergencySuppliesCard() {
  const suppliesList = [
    '□ 非常食・飲料水',
    '□ 懐中電灯・予備電池',
    '□ 携帯ラジオ',
    '□ 救急用品',
  ];

  return (
    <Card>
      <Heading as="h3" color="primary" className="mb-4">
        防災グッズチェックリスト
      </Heading>
      <List className="mb-4">
        {suppliesList.map((item) => (
          <ListItem key={`supply-${item}`}>{item}</ListItem>
        ))}
      </List>
    </Card>
  );
}
