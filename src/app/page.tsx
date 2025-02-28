import React from 'react';
import HomeHeader from '@/app/HomeHeader';
import HomeContent from '@/app/HomeContent';
import Footer from '@/components/Footer';
import ContactAlert from '@/components/ContactAlert';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeHeader />
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <HomeContent />
      <Footer />
    </div>
  );
}
