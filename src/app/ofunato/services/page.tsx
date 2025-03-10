import type { Metadata } from 'next';
import { getAllServicesFromMd } from '../data/utils';
import ServicesCard from '@/app/ofunato/services/ServicesCard';

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

export default function ServicesPage() {
  const bathFacilities = getAllServicesFromMd(
    'src/app/ofunato/data/services/bath',
  );
  const shuttleBuses = getAllServicesFromMd(
    'src/app/ofunato/data/services/bus',
  );
  const mealFacilities = getAllServicesFromMd(
    'src/app/ofunato/data/services/meal',
  );
  const accommodationFacilities = getAllServicesFromMd(
    'src/app/ofunato/data/services/accommodation',
  );
  const studyFacilities = getAllServicesFromMd(
    'src/app/ofunato/data/services/study',
  );
  const petFacilities = getAllServicesFromMd(
    'src/app/ofunato/data/services/pet',
  );
  const supportFacilities = [
    ...bathFacilities,
    ...shuttleBuses,
    ...mealFacilities,
    ...accommodationFacilities,
    ...studyFacilities,
    ...petFacilities,
  ];
  return <ServicesCard supportFacilities={supportFacilities} />;
}
