import LocalHeader from '@/components/LocalHeader';
import EmergencyInfoCard from '@/app/ofunato/EmergencyInfoCard';
import ShelterInfoCard from '@/app/ofunato/ShelterInfoCard';
import DonationInfoCard from '@/app/ofunato/DonationInfoCard';
import Heading from '@/components/ui/Heading';
import Footer from '@/components/Footer';
import ContactAlert from '@/components/ContactAlert';
import { getLastUpdated } from '@/lib/time';

const menuItems = [
  { id: 'emergency', label: '避難情報', href: '#emergency' },
  { id: 'shelter', label: '避難所', href: '#shelter' },
  { id: 'support', label: '支援・募金', href: '#support' },
];

export default function OfunatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocalHeader
        areaName="大船渡市"
        description="大船渡市の山林火災に関する情報をまとめています。"
        lastUpdated={getLastUpdated()}
        menuItems={menuItems}
      />
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <main className="container mx-auto px-4 py-8">
        <section id="emergency" className="grid grid-cols-1 gap-6">
          <EmergencyInfoCard />
          <ShelterInfoCard />
        </section>

        <section id="support" className="mt-12">
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
