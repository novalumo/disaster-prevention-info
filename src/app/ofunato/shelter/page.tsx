import ShelterInfoCard from '@/app/ofunato/shelter/ShelterInfoCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '避難所情報 - 大船渡市 山林火災情報',
  description: '大船渡市の避難所の場所と収容状況を確認できます。',
  openGraph: {
    title: '避難所情報 - 大船渡市 山林火災情報',
    description: '大船渡市の避難所の場所と収容状況を確認できます。',
  },
};

export default function ShelterPage() {
  return <ShelterInfoCard />;
}
