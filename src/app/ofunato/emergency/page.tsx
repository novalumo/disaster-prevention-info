'use client';

import EmergencyInfoCard from '@/app/ofunato/emergency/EmergencyInfoCard';
import LocalHeader from '@/components/LocalHeader';
import Footer from '@/components/Footer';
import ContactAlert from '@/components/ContactAlert';
import { getLastUpdated } from '@/lib/time';
import OfunatoBottomNav from '../components/OfunatoBottomNav';

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocalHeader
        areaName="大船渡市"
        description="避難情報をご確認ください。"
        lastUpdated={getLastUpdated()}
      />
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <main className="container mx-auto px-4 py-8 pb-20">
        <EmergencyInfoCard />
      </main>
      <Footer />
      <OfunatoBottomNav />
    </div>
  );
}
