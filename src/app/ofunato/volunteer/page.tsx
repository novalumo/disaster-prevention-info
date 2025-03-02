'use client';

import VolunteerInfoCard from '@/app/ofunato/volunteer/VolunteerInfoCard';
import LocalHeader from '@/components/LocalHeader';
import ContactAlert from '@/components/ContactAlert';
import { getLastUpdated } from '@/lib/time';
import OfunatoBottomNav from '../components/OfunatoBottomNav';

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocalHeader
        areaName="大船渡市"
        description="ボランティア募集情報をご確認ください。"
        lastUpdated={getLastUpdated()}
      />
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <main className="container mx-auto px-4 py-8 pb-20">
        <VolunteerInfoCard />
      </main>
      <OfunatoBottomNav />
    </div>
  );
}
