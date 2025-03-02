import EmergencyInfoCard from '@/app/ofunato/emergency/EmergencyInfoCard';
import ContactAlert from '@/components/ContactAlert';
import { getLastUpdated } from '@/lib/time';
import OfunatoBottomNav from '../components/OfunatoBottomNav';
import OfunatoHeader from '../components/OfunatoHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '避難情報 - 大船渡市 山林火災情報',
  description: '大船渡市の避難指示・勧告などの最新情報を確認できます。',
  openGraph: {
    title: '避難情報 - 大船渡市 山林火災情報',
    description: '大船渡市の避難指示・勧告などの最新情報を確認できます。',
  },
};

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <OfunatoHeader lastUpdated={getLastUpdated()} />
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <main className="container mx-auto px-4 py-8 pb-20">
        <EmergencyInfoCard />
      </main>
      <OfunatoBottomNav />
    </div>
  );
}
