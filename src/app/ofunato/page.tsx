import LocalHeader from '@/components/LocalHeader';
import EmergencyInfoCard from '@/app/ofunato/EmergencyInfoCard';
import ShelterInfoCard from '@/app/ofunato/ShelterInfoCard';
import DisasterMapCard from '@/app/ofunato/DisasterMapCard';
import DonationInfoCard from '@/app/ofunato/DonationInfoCard';
import NewsCard from '@/app/ofunato/NewsCard';
import Heading from '@/components/ui/Heading';
import Footer from '@/components/Footer';

export default function OfunatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocalHeader
        areaName="大船渡市"
        description="大船渡市の山林火災に関する情報をまとめています。"
      />
      <main className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 gap-6">
          {/* <EmergencyInfoCard /> */}
          <ShelterInfoCard />
        </section>

        <section className="mt-12">
          <Heading as="h2" className="mb-6">
            支援・募金情報
          </Heading>
          <div className="grid grid-cols-1 gap-6">
            <DonationInfoCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
