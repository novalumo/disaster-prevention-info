import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import { MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type Shelter = {
  id: string;
  name: string;
  address: string;
  type?: '福祉施設' | '学校施設' | '公共施設';
  mapUrl?: string;
  phone?: string;
  maxCapacity?: number;
  currentCapacity?: number;
};

type CapacityStatus = {
  label: string;
  color: 'green' | 'yellow' | 'red';
  percentage: number;
};

function getCapacityStatus(current: number, max: number): CapacityStatus | null {
  if (!max) return null;
  
  const percentage = (current / max) * 100;
  
  if (percentage >= 90) {
    return {
      label: '満員に近い',
      color: 'red',
      percentage,
    };
  } else if (percentage >= 70) {
    return {
      label: 'やや混雑',
      color: 'yellow',
      percentage,
    };
  } else {
    return {
      label: '空きあり',
      color: 'green',
      percentage,
    };
  }
}

export default function ShelterInfoCard() {
  const shelters: Shelter[] = [
    {
      id: 'himawari',
      name: '介護老人福祉施設「ひまわり」',
      address: '大船渡市大船渡町字山馬越１９７',
      type: '福祉施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市大船渡町字山馬越１９７',
    },
    {
      id: 'seijin',
      name: '特別養護老人ホーム　成仁ハウス百年の里',
      address: '大船渡市立根町字宮田９－１',
      type: '福祉施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市立根町字宮田９－１',
    },
    {
      id: 'ofunato-jhs',
      name: '大船渡中学校（屋内体育館）',
      address: '大船渡市大船渡町字永沢94番地1',
      type: '学校施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市大船渡町字永沢94番地1',
    },
    {
      id: 'inokawa-es',
      name: '猪川小学校（屋内体育館）',
      address: '大船渡市猪川町字轆轤石23番地',
      type: '学校施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市猪川町字轆轤石23番地',
    },
    {
      id: 'keisen-en',
      name: '介護老人保健施設「気仙苑」',
      address: '大船渡市大船渡町字山馬越188',
      type: '福祉施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市大船渡町字山馬越188',
    },
    {
      id: 'fukushi-no-sato',
      name: '岩手県立福祉の里センター',
      address: '大船渡市立根町字田ノ上30-20',
      type: '公共施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市立根町字田ノ上30-20',
    },
    {
      id: 'sanriku-no-sono',
      name: 'さんりくの園',
      address: '大船渡市三陸町越喜来字所通91',
      type: '福祉施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市三陸町越喜来字所通91',
    },
    {
      id: 'rias-hall',
      name: 'リアスホール',
      address: '大船渡市盛町字下舘下18番地1',
      type: '公共施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市盛町字下舘下18番地1',
    },
    {
      id: 'ofunato-1st-jhs',
      name: '大船渡第一中学校（屋内体育館）',
      address: '大船渡市立根町字宮田86番地',
      type: '学校施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市立根町字宮田86番地',
    },
    {
      id: 'sanriku-center',
      name: '三陸公民館',
      address: '大船渡市三陸町越喜来字前田36－1',
      type: '公共施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市三陸町越喜来字前田36－1',
    },
    {
      id: 'yoshikirai-es',
      name: '越喜来小学校（屋内体育館）',
      address: '大船渡市三陸町越喜来字小出24-4',
      type: '学校施設',
      mapUrl: 'https://maps.google.com/?q=大船渡市三陸町越喜来字小出24-4',
    },
  ];

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
                            収容状況: {shelter.currentCapacity || 0}人 / {shelter.maxCapacity || '---'}人
                          </span>
                          {shelter.maxCapacity && shelter.currentCapacity && (
                            <span
                              className={cn(
                                'px-2 py-0.5 rounded text-xs font-medium',
                                {
                                  'bg-red-100 text-red-700': getCapacityStatus(shelter.currentCapacity, shelter.maxCapacity)?.color === 'red',
                                  'bg-yellow-100 text-yellow-700': getCapacityStatus(shelter.currentCapacity, shelter.maxCapacity)?.color === 'yellow',
                                  'bg-green-100 text-green-700': getCapacityStatus(shelter.currentCapacity, shelter.maxCapacity)?.color === 'green',
                                }
                              )}
                            >
                              {getCapacityStatus(shelter.currentCapacity, shelter.maxCapacity)?.label}
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
