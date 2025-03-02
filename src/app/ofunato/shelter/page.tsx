'use client';

import ShelterInfoCard from '@/app/ofunato/shelter/ShelterInfoCard';
import LocalHeader from '@/components/LocalHeader';
import Footer from '@/components/Footer';
import ContactAlert from '@/components/ContactAlert';
import { getLastUpdated } from '@/lib/time';
import OfunatoBottomNav from '../components/OfunatoBottomNav';

export default function ShelterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocalHeader
        areaName="大船渡市"
        description="避難所情報をご確認ください。"
        lastUpdated={getLastUpdated()}
      />
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <main className="container mx-auto px-4 py-8 pb-20">
        <ShelterInfoCard />
      </main>
      <Footer />
      <OfunatoBottomNav />
    </div>
  );
}
