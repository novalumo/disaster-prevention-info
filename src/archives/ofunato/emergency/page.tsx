import type { Metadata } from 'next';
import EmergencyTabs from './EmergencyTabs';

export const metadata: Metadata = {
  title: '避難情報・避難所 - 大船渡市 山林火災情報',
  description: '大船渡市の避難指示・勧告および避難所の最新情報を確認できます。',
  openGraph: {
    title: '避難情報・避難所 - 大船渡市 山林火災情報',
    description:
      '大船渡市の避難指示・勧告および避難所の最新情報を確認できます。',
  },
};

export default function EmergencyPage() {
  return <EmergencyTabs />;
}
