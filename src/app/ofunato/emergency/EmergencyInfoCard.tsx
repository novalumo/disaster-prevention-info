import Heading from '@/components/ui/Heading';
import OfunatoContainer from '@/app/ofunato/components/OfunatoContainer';
type EvacuationArea = {
  id: string;
  name: string;
  district: string;
  status: '避難指示' | '避難勧告' | '避難準備' | '避難指示解除';
  updatedAt?: string;
};

export default function EmergencyInfoCard() {
  // 地区の表示順を定義
  const districtOrder = ['赤崎町', '三陸町綾里', '三陸町越喜来'];

  const evacuationAreas: EvacuationArea[] = [
    // 赤崎町
    {
      id: 'gassoku',
      name: '合足地域',
      district: '赤崎町',
      status: '避難指示',
    },
    {
      id: 'sotoguchi',
      name: '外口地域',
      district: '赤崎町',
      status: '避難指示',
    },
    {
      id: 'ohora',
      name: '大洞地域',
      district: '赤崎町',
      status: '避難指示解除',
    },
    {
      id: 'odachi',
      name: '大立地域',
      district: '赤崎町',
      status: '避難指示',
    },
    {
      id: 'shuku',
      name: '宿地域',
      district: '赤崎町',
      status: '避難指示解除',
    },
    {
      id: 'yamaguchi',
      name: '山口地域',
      district: '赤崎町',
      status: '避難指示解除',
    },
    {
      id: 'ushironoiri',
      name: '後ノ入地域',
      district: '赤崎町',
      status: '避難指示解除',
    },
    {
      id: 'morikko',
      name: '森っこ地域',
      district: '赤崎町',
      status: '避難指示解除',
    },
    {
      id: 'nagahama',
      name: '永浜地域',
      district: '赤崎町',
      status: '避難指示',
    },
    {
      id: 'shimizu',
      name: '清水地域',
      district: '赤崎町',
      status: '避難指示',
    },
    {
      id: 'oigata',
      name: '生形地域',
      district: '赤崎町',
      status: '避難指示解除',
    },
    {
      id: 'takanoura',
      name: '蛸ノ浦地域',
      district: '赤崎町',
      status: '避難指示',
    },
    {
      id: 'nagasaki',
      name: '長崎地域',
      district: '赤崎町',
      status: '避難指示',
    },
    // 三陸町綾里
    {
      id: 'ryori',
      name: '綾里地区全域',
      district: '三陸町綾里',
      status: '避難指示',
    },
    // 三陸町越喜来
    {
      id: 'horei-east',
      name: '甫嶺東地域',
      district: '三陸町越喜来',
      status: '避難指示',
    },
    {
      id: 'horei-west',
      name: '甫嶺西地域',
      district: '三陸町越喜来',
      status: '避難指示',
    },
    {
      id: 'horei',
      name: '上甫嶺地域',
      district: '三陸町越喜来',
      status: '避難指示',
    },
  ];

  // 地区ごとにグループ化
  const groupedAreas = evacuationAreas.reduce(
    (acc, area) => {
      const district = area.district || 'その他';
      if (!acc[district]) {
        acc[district] = [];
      }
      acc[district].push(area);
      return acc;
    },
    {} as Record<string, EvacuationArea[]>,
  );

  // 地区の表示順に並び替え
  const sortedDistricts = Object.entries(groupedAreas).sort(([a], [b]) => {
    const indexA = districtOrder.indexOf(a);
    const indexB = districtOrder.indexOf(b);
    return indexA - indexB;
  });

  // 避難指示のステータスに応じた背景色を設定
  const getStatusStyle = (status: string) => {
    switch (status) {
      case '避難指示':
        return 'bg-red-50 border-red-100';
      case '避難勧告':
        return 'bg-yellow-50 border-yellow-100';
      case '避難準備':
        return 'bg-blue-50 border-blue-100';
      case '避難指示解除':
        return 'bg-green-50 border-green-100';
      default:
        return 'bg-gray-50 border-gray-100';
    }
  };

  const getStatusLabelStyle = (status: string) => {
    switch (status) {
      case '避難指示解除':
        return 'text-green-700 bg-white border-green-100';
      default:
        return 'text-red-600 bg-white border-red-100';
    }
  };

  return (
    <OfunatoContainer>
      <Heading as="h2" color="primary" className="mb-4">
        避難情報
      </Heading>
      <div className="space-y-6">
        {sortedDistricts.map(([district, areas]) => (
          <div key={district} className="space-y-2">
            <h3 className="font-semibold text-gray-700 text-lg border-b pb-1">
              {district}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {areas.map((area) => (
                <div
                  key={area.id}
                  className={`p-3 rounded border ${getStatusStyle(area.status)}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="font-medium text-gray-800">{area.name}</div>
                    <span
                      className={`text-sm font-medium px-2 py-0.5 rounded border ${getStatusLabelStyle(area.status)}`}
                    >
                      {area.status}
                    </span>
                  </div>
                  {area.updatedAt && (
                    <div className="text-gray-500 text-xs mt-1">
                      更新: {area.updatedAt}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </OfunatoContainer>
  );
}
