import Card from './ui/Card';
import Heading from './ui/Heading';
import List, { ListItem } from './ui/List';

export default function NewsCard() {
  return (
    <Card>
      <Heading as="h3" color="primary" className="mb-3">
        最新のお知らせ
      </Heading>
      <List>
        <ListItem>2024/02/26 防災訓練のお知らせ</ListItem>
        <ListItem>2024/02/25 ハザードマップ更新</ListItem>
        <ListItem>2024/02/24 避難所情報更新</ListItem>
      </List>
    </Card>
  );
}
