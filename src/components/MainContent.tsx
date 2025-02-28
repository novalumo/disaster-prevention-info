import EmergencyInfoCard from './EmergencyInfoCard';
import ShelterInfoCard from './ShelterInfoCard';
import DisasterMapCard from './DisasterMapCard';
import EmergencySuppliesCard from './EmergencySuppliesCard';
import NewsCard from './NewsCard';

export default function MainContent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EmergencyInfoCard />
        <ShelterInfoCard />
        <DisasterMapCard />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">防災情報</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EmergencySuppliesCard />
          <NewsCard />
        </div>
      </section>
    </main>
  );
}
