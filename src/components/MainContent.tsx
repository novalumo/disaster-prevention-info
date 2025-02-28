import EmergencyInfoCard from './EmergencyInfoCard';
import ShelterInfoCard from './ShelterInfoCard';
import DisasterMapCard from './DisasterMapCard';
import EmergencySuppliesCard from './EmergencySuppliesCard';
import NewsCard from './NewsCard';
import Heading from './ui/Heading';

export default function MainContent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EmergencyInfoCard />
        <ShelterInfoCard />
        <DisasterMapCard />
      </section>

      <section className="mt-12">
        <Heading as="h2" className="mb-6">
          防災情報
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EmergencySuppliesCard />
          <NewsCard />
        </div>
      </section>
    </main>
  );
}
