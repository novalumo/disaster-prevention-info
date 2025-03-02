'use client';

import DonationInfoCard from '@/app/ofunato/support/DonationInfoCard';
import LocalHeader from '@/components/LocalHeader';
import Footer from '@/components/Footer';
import ContactAlert from '@/components/ContactAlert';
import { getLastUpdated } from '@/lib/time';
import OfunatoBottomNav from '../components/OfunatoBottomNav';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocalHeader
        areaName="大船渡市"
        description="支援・募金情報をご確認ください。"
        lastUpdated={getLastUpdated()}
      />
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <main className="container mx-auto px-4 py-8 pb-20">
        <DonationInfoCard />
      </main>
      <Footer />
      <OfunatoBottomNav />
    </div>
  );
}
