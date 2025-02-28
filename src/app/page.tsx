import React from 'react';
import HomeHeader from '@/components/HomeHeader';
import HomeContent from '@/components/HomeContent';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeHeader />
      <HomeContent />
      <Footer />
    </div>
  );
}
