import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import ShelterMap from './ShelterMap';

export default function ShelterMapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <Heading as="h1" color="primary" className="mb-4">
          避難所マップ
        </Heading>
        <ShelterMap />
      </Card>
    </div>
  );
}
