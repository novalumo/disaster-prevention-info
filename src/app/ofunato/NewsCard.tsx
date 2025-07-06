import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import List, { ListItem } from '@/components/ui/List';

export default function NewsCard() {
  const newsList = [''];

  return (
    <Card>
      <Heading as="h3" color="primary" className="mb-4">
        最新のお知らせ
      </Heading>
      {newsList.length > 0 && newsList[0] !== '' ? (
        <List className="mb-4">
          {newsList.map((item) => (
            <ListItem key={`news-${item}`}>{item}</ListItem>
          ))}
        </List>
      ) : (
        <p className="text-gray-600 mb-4">現在、新しいお知らせはありません。</p>
      )}
    </Card>
  );
}
