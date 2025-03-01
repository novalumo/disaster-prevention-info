import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import { MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Shelter = {
  id: string;
  name: string;
  address: string;
  type?: '福祉施設' | '学校施設' | '公共施設';
  mapUrl?: string;
};

export default function ShelterInfoCard() {
  const shelters: Shelter[] = [
    {
      id: 'himawari',
      name: '介護老人福祉施設「ひまわり」',
      address: '大船渡町字山馬越１９７',
      type: '福祉施設',
      mapUrl: 'https://maps.google.com/?q=大船渡町字山馬越１９７',
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
      address: '岩手県大船渡市大船渡町字永沢94番地1',
      type: '学校施設',
      mapUrl: 'https://maps.google.com/?q=岩手県大船渡市大船渡町字永沢94番地1',
    },
    {
      id: 'inokawa-es',
      name: '猪川小学校（屋内体育館）',
      address: '岩手県大船渡市猪川町字轆轤石23番地',
      type: '学校施設',
      mapUrl: 'https://maps.google.com/?q=岩手県大船渡市猪川町字轆轤石23番地',
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
      address: '岩手県大船渡市盛町字下舘下18番地1',
      type: '公共施設',
      mapUrl: 'https://maps.google.com/?q=岩手県大船渡市盛町字下舘下18番地1',
    },
    {
      id: 'ofunato-1st-jhs',
      name: '大船渡第一中学校（屋内体育館）',
      address: '岩手県大船渡市立根町字宮田86番地',
      type: '学校施設',
      mapUrl: 'https://maps.google.com/?q=岩手県大船渡市立根町字宮田86番地',
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
      address: '岩手県大船渡市三陸町越喜来字小出24-4',
      type: '学校施設',
      mapUrl: 'https://maps.google.com/?q=岩手県大船渡市三陸町越喜来字小出24-4',
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
