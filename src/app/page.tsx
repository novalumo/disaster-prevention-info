import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
