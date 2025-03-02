'use client';

import ShelterMap from './ShelterMap';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ShelterMapPage() {
  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="h-14 flex items-center gap-4">
            <Link
              href="/ofunato"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>戻る</span>
            </Link>
            <h1 className="font-bold">避難所マップ</h1>
          </div>
        </div>
      </nav>
      <ShelterMap />
    </div>
  );
}
