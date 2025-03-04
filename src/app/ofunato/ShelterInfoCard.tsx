import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import { MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { shelters } from '@/app/ofunato/data/shelters';

export type Shelter = {
  id: string;
  name: string;
  address: string;
  type?: '福祉施設' | '学校施設' | '公共施設';
  mapUrl?: string;
  phone?: string;
  maxCapacity?: number;
  currentCapacity?: number;
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
    <Card>
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
                  className="bg-gray-50 p-3 rounded border border-gray-100"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="font-bold text-gray-800">
                        {shelter.name}
                      </div>
                      <div className="text-gray-600 text-sm mt-1">
                        {shelter.address}
                      </div>
                      {shelter.phone && (
                        <div className="text-gray-600 text-sm">
                          TEL: {shelter.phone}
                        </div>
                      )}
                      {(shelter.maxCapacity || shelter.currentCapacity) && (
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <span>
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
                        className="flex-shrink-0 text-blue-600 hover:text-blue-700 transition-colors text-center"
                        title="地図で見る"
                      >
                        <MapPinIcon className="h-6 w-6 mx-auto" />
                        <span className="text-xs mt-1 block">地図</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
