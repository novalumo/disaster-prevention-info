import type { Metadata } from 'next';
import SupportCard from '@/archives/ofunato/support/SupportCard';

export const metadata: Metadata = {
  title: '各種募金・ボランティア情報 - 大船渡市 山林火災情報',
  description: '大船渡市の被災地域へ募金・ボランティア方法を確認できます。',
  openGraph: {
    title: '各種募金・ボランティア情報 - 大船渡市 山林火災情報',
    description: '大船渡市の被災地域への支援方法を確認できます。',
  },
};

export default function SupportPage() {
  return <SupportCard />;
}
