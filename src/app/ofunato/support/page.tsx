import DonationInfoCard from '@/app/ofunato/support/DonationInfoCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '支援・募金情報 - 大船渡市 山林火災情報',
  description: '大船渡市の被災地域への支援方法を確認できます。',
  openGraph: {
    title: '支援・募金情報 - 大船渡市 山林火災情報',
    description: '大船渡市の被災地域への支援方法を確認できます。',
  },
};

export default function SupportPage() {
  return <DonationInfoCard />;
}
