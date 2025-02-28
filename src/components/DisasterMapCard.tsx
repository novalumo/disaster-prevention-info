import Card from './ui/Card';
import Heading from './ui/Heading';
import Button from './ui/Button';

export default function DisasterMapCard() {
  return (
    <Card>
      <Heading as="h2" color="primary" className="mb-4">
        防災マップ
      </Heading>
      <p className="text-gray-600">ハザードマップや避難経路の確認ができます</p>
      <Button className="mt-4">マップを見る</Button>
    </Card>
  );
}
