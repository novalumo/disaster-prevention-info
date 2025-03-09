import Heading from '@/components/ui/Heading';
import OfunatoContainer from '@/app/ofunato/components/OfunatoContainer';
import {
  WarningOutlined,
  InfoOutlined,
  CheckCircleOutlined,
  NotificationsActiveOutlined,
} from '@mui/icons-material';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

type EvacuationArea = {
  id: string;
  name: string;
  district: string;
  status: '避難指示' | '避難勧告' | '避難準備' | '避難指示解除';
  updatedAt?: string;
};

export default function EmergencyInfoCard() {
  // 避難情報のサンプルデータ
  const evacuationAreas: EvacuationArea[] = [
    // 赤崎町
    {
      id: 'attari',
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
      status: '避難指示解除',
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
      id: 'nochinoiri',
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
      status: '避難指示解除',
    },
    {
      id: 'shizu',
      name: '清水地域',
      district: '赤崎町',
      status: '避難指示解除',
    },
    {
      id: 'oikata',
      name: '生形地域',
      district: '赤崎町',
      status: '避難指示解除',
    },
    {
      id: 'takonoura',
      name: '蛸ノ浦地域',
      district: '赤崎町',
      status: '避難指示解除',
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
      status: '避難指示解除',
    },
    {
      id: 'horei-west',
      name: '甫嶺西地域',
      district: '三陸町越喜来',
      status: '避難指示解除',
    },
    {
      id: 'kami-horei',
      name: '上甫嶺地域',
      district: '三陸町越喜来',
      status: '避難指示解除',
    },
  ];

  // 地区ごとにグループ化
  const groupedByDistrict = evacuationAreas.reduce(
    (acc, area) => {
      if (!acc[area.district]) {
        acc[area.district] = [];
      }
      acc[area.district].push(area);
      return acc;
    },
    {} as Record<string, EvacuationArea[]>,
  );

  // ステータスの優先順位を定義
  const statusPriority = {
    避難指示: 0,
    避難勧告: 1,
    避難準備: 2,
    避難指示解除: 3,
  };

  // 地区ごとにソートし、さらにその中でステータスに基づいて並び替え
  const sortedDistricts = Object.entries(groupedByDistrict)
    .sort((a, b) => a[0].localeCompare(b[0], 'ja'))
    .map(
      ([district, areas]) =>
        [
          district,
          areas.sort(
            (a, b) => statusPriority[a.status] - statusPriority[b.status],
          ),
        ] as [string, EvacuationArea[]],
    );

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

  // ステータスに応じたアイコンを取得
  const getStatusIcon = (status: string) => {
    switch (status) {
      case '避難指示':
        return <WarningOutlined fontSize="small" className="mr-1" />;
      case '避難勧告':
        return (
          <NotificationsActiveOutlined fontSize="small" className="mr-1" />
        );
      case '避難準備':
        return <InfoOutlined fontSize="small" className="mr-1" />;
      case '避難指示解除':
        return <CheckCircleOutlined fontSize="small" className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <OfunatoContainer>
      <Heading as="h2" color="primary" className="mb-4">
        避難情報
      </Heading>
      <div className="space-y-6">
        <div className="divide-y divide-gray-100">
          {sortedDistricts.map(([district, areas]) => (
            <div key={`district-${district}`} className="py-4">
              <div className="font-bold text-gray-700 mb-3 text-lg flex items-center">
                <MapPinIcon className="h-5 w-5 mr-1.5 text-gray-600" />
                {district}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {areas.map((area) => (
                  <div
                    key={area.id}
                    className={`p-3 rounded border ${getStatusStyle(area.status)}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="font-medium text-gray-800">
                        {area.name}
                      </div>
                      <span
                        className={`text-sm font-medium px-2 py-0.5 rounded border ${getStatusLabelStyle(area.status)} flex items-center`}
                      >
                        {getStatusIcon(area.status)}
                        {area.status}
                      </span>
                    </div>
                    {area.updatedAt && (
                      <div className="text-gray-500 text-xs mt-2 flex items-center">
                        <ClockIcon className="h-3.5 w-3.5 mr-1" />
                        更新: {area.updatedAt}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </OfunatoContainer>
  );
}
