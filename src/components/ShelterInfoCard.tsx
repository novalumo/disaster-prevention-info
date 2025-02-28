import Card from './ui/Card';
import Heading from './ui/Heading';
import List, { ListItem } from './ui/List';

export default function ShelterInfoCard() {
  return (
    <Card>
      <Heading as="h2" color="primary" className="mb-4">
        避難所情報
      </Heading>
      <List>
        <ListItem>○○小学校体育館</ListItem>
        <ListItem>○○市民センター</ListItem>
        <ListItem>○○公民館</ListItem>
      </List>
    </Card>
  );
}
