import Heading from '@/components/ui/Heading';
import {
  MapPinIcon,
  PhoneIcon,
  InformationCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { shelters } from '@/archives/ofunato/data/shelters';
import OfunatoContainer from '@/archives/ofunato/components/OfunatoContainer';
import {
  HomeWorkOutlined,
  School,
  HomeOutlined,
  AccessibilityNew,
} from '@mui/icons-material';

export type Shelter = {
  id: string;
  name: string;
  address: string;
  type?: '福祉施設' | '学校施設' | '公共施設';
  phone?: string;
  maxCapacity?: number;
  currentCapacity?: number;
  note?: string;
  mapUrl?: string;
  position?: {
    lat: number;
    lng: number;
  };
};

type CapacityStatus = {
  label: string;
  color: 'green' | 'yellow' | 'red';
  percentage: number;
};

function getCapacityStatus(
  current: number,
  max: number,
): CapacityStatus | null {
  if (!max) return null;

  const percentage = (current / max) * 100;

  if (percentage >= 90) {
    return {
      label: '満員に近い',
      color: 'red',
      percentage,
    };
  }

  if (percentage >= 70) {
    return {
      label: 'やや混雑',
      color: 'yellow',
      percentage,
    };
  }

  return {
    label: '空きあり',
    color: 'green',
    percentage,
  };
}

// 避難所タイプ別のアイコンを取得
const getShelterTypeIcon = (type?: string) => {
  switch (type) {
    case '福祉施設':
      return (
        <AccessibilityNew fontSize="small" className="text-blue-600 mr-1" />
      );
    case '学校施設':
      return <School fontSize="small" className="text-green-600 mr-1" />;
    case '公共施設':
      return (
        <HomeWorkOutlined fontSize="small" className="text-purple-600 mr-1" />
      );
    default:
      return <HomeOutlined fontSize="small" className="text-gray-600 mr-1" />;
  }
};

export default function ShelterInfoCard() {
  // 施設タイプごとにグループ化
  const groupedShelters = shelters.reduce(
    (acc, shelter) => {
      const type = shelter.type || 'その他';
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(shelter);
      return acc;
    },
    {} as Record<string, Shelter[]>,
  );

  return (
    <OfunatoContainer>
      <Heading as="h2" color="primary" className="mb-4">
        避難所情報
      </Heading>
      <div className="space-y-6">
        {Object.entries(groupedShelters).map(([type, shelters]) => (
          <div key={type} className="space-y-2">
            <h3 className="font-bold text-gray-700 text-lg border-b pb-1">
              {type}
            </h3>
            <div className="space-y-3">
              {shelters.map((shelter) => (
                <div
                  key={shelter.id}
                  className="bg-white p-3 rounded border border-gray-100"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="font-bold text-gray-800 flex items-center">
                        {getShelterTypeIcon(shelter.type)}
                        {shelter.name}
                      </div>
                      <div className="text-gray-600 text-sm mt-1 flex items-start">
                        <MapPinIcon className="h-4 w-4 flex-shrink-0 mt-0.5 mr-1" />
                        <span>{shelter.address}</span>
                      </div>
                      {shelter.phone && (
                        <div className="text-gray-600 text-sm flex items-center">
                          <PhoneIcon className="h-4 w-4 mr-1" />
                          <span>TEL: {shelter.phone}</span>
                        </div>
                      )}
                      {shelter.note && (
                        <div className="text-gray-600 text-sm flex items-start">
                          <InformationCircleIcon className="h-4 w-4 flex-shrink-0 mt-0.5 mr-1" />
                          <span>{shelter.note}</span>
                        </div>
                      )}
                      {(shelter.maxCapacity || shelter.currentCapacity) && (
                        <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                          <span className="flex items-center">
                            <UserGroupIcon className="h-4 w-4 mr-1" />
                            収容状況: {shelter.currentCapacity || 0}人 /{' '}
                            {shelter.maxCapacity || '---'}人
                          </span>
                          {shelter.maxCapacity && shelter.currentCapacity && (
                            <span
                              className={cn(
                                'px-2 py-0.5 rounded text-xs font-medium',
                                {
                                  'bg-red-100 text-red-700':
                                    getCapacityStatus(
                                      shelter.currentCapacity,
                                      shelter.maxCapacity,
                                    )?.color === 'red',
                                  'bg-yellow-100 text-yellow-700':
                                    getCapacityStatus(
                                      shelter.currentCapacity,
                                      shelter.maxCapacity,
                                    )?.color === 'yellow',
                                  'bg-green-100 text-green-700':
                                    getCapacityStatus(
                                      shelter.currentCapacity,
                                      shelter.maxCapacity,
                                    )?.color === 'green',
                                },
                              )}
                            >
                              {
                                getCapacityStatus(
                                  shelter.currentCapacity,
                                  shelter.maxCapacity,
                                )?.label
                              }
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    {shelter.mapUrl && (
                      <Link
                        href={shelter.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex flex-col items-center"
                      >
                        <MapPinIcon className="h-6 w-6" />
                        <span className="text-xs mt-1 flex items-center">
                          地図
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </OfunatoContainer>
  );
}
