import AreaInfoCard from '@/components/ui/AreaInfoCard';

type AreaCardProps = {
  name: string;
  description: string;
  path: string;
  imageUrl?: string;
  lastUpdated: string;
};

export default function AreaCard(props: AreaCardProps) {
  return <AreaInfoCard {...props} />;
}
