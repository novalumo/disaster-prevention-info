import Card from './ui/Card';
import Heading from './ui/Heading';
import List, { ListItem } from './ui/List';

export default function EmergencySuppliesCard() {
  return (
    <Card>
      <Heading as="h3" color="primary" className="mb-3">
        防災グッズチェックリスト
      </Heading>
      <List>
        <ListItem>□ 非常食・飲料水</ListItem>
        <ListItem>□ 懐中電灯・予備電池</ListItem>
        <ListItem>□ 携帯ラジオ</ListItem>
        <ListItem>□ 救急用品</ListItem>
      </List>
    </Card>
  );
}
