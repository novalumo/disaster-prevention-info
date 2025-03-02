import type { Metadata } from 'next';
import SupportFacilitiesCard from './SupportFacilitiesCard';

export const metadata: Metadata = {
  title: '避難者支援施設 - 大船渡市 山林火災情報',
  description:
    '大船渡市の避難者支援施設（入浴、送迎バス、食事提供）の情報を確認できます。',
  openGraph: {
    title: '避難者支援施設 - 大船渡市 山林火災情報',
    description:
      '大船渡市の避難者支援施設（入浴、送迎バス、食事提供）の情報を確認できます。',
  },
};

export default function SupportFacilitiesPage() {
  return <SupportFacilitiesCard />;
}
