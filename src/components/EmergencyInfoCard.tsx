import Card from './ui/Card';
import Heading from './ui/Heading';

export default function EmergencyInfoCard() {
  return (
    <Card>
      <Heading as="h2" color="primary" className="mb-4">
        緊急情報
      </Heading>
      <p className="text-gray-600">現在、緊急の警報はありません</p>
    </Card>
  );
}
