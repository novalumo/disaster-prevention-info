import type { Metadata } from 'next';
import { getLastUpdated } from '@/lib/time';
import ContactAlert from '@/components/ContactAlert';
import OfunatoHeader from './components/OfunatoHeader';
import OfunatoBottomNav from './components/OfunatoBottomNav';

export const metadata: Metadata = {
  title: '大船渡市 山林火災情報',
  description: '大船渡市の山林火災に関する情報をまとめています。',
  openGraph: {
    title: '大船渡市 山林火災情報',
    description: '大船渡市の山林火災に関する情報をまとめています。',
  },
};

export default function OfunatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <OfunatoHeader lastUpdated={getLastUpdated()} />
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <main className="container mx-auto px-4 py-8 pb-20">{children}</main>
      <OfunatoBottomNav />
    </div>
  );
}
