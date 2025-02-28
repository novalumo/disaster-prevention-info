import Header from '@/components/Header';
import MainContent from '@/app/ofunato/MainContent';
import Footer from '@/components/Footer';

export default function OfunatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
