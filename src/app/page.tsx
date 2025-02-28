import React from 'react';
import HomeHeader from '@/app/HomeHeader';
import HomeContent from '@/app/HomeContent';
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
