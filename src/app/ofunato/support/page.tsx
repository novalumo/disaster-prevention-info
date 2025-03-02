import type { Metadata } from 'next';
import SupportCard from './SupportCard';

export const metadata: Metadata = {
  title: '募金・支援情報 - 大船渡市 山林火災情報',
  description: '大船渡市の被災地域への支援方法を確認できます。',
  openGraph: {
    title: '募金・支援情報 - 大船渡市 山林火災情報',
    description: '大船渡市の被災地域への支援方法を確認できます。',
  },
};

export default function SupportPage() {
  return <SupportCard />;
}
