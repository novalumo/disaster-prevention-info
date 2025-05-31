import AreaCard from '@/components/AreaCard';
import Heading from '@/components/ui/Heading';
// import { getLastUpdated } from '@/lib/time';

// 地区データの型定義
type AreaData = {
  name: string;
  description: string;
  path: string;
  imageUrl?: string;
  lastUpdated: string;
};

// 地区データ
const areas: AreaData[] = [
  // {
  //   name: '大船渡市',
  //   description: '大船渡市の山林火災に関する情報を確認できます。',
  //   path: '/ofunato',
  //   // imageUrl: '/images/ofunato.jpg',
  //   lastUpdated: getLastUpdated(),
  // },
];

export default function HomeContent() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section>
        <Heading as="h2" className="text-center mb-8">
          地域を選択
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas?.length ? (
            areas.map((area) => (
              <AreaCard
                key={area.path}
                name={area.name}
                description={area.description}
                path={area.path}
                imageUrl={area.imageUrl}
                lastUpdated={area.lastUpdated}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">現在情報はありません。</p>
          )}
        </div>
      </section>

      <section className="mt-16">
        <Heading as="h2" className="text-center mb-8">
          防災情報について
        </Heading>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            このポータルサイトでは、各地域の防災情報を提供しています。避難所の場所や連絡先、ハザードマップ、防災グッズのチェックリストなど、災害時に役立つ情報を確認できます。
          </p>
          <p className="text-gray-700 mb-4">
            日頃から防災情報を確認し、災害に備えることが大切です。ご家族やご近所の方と一緒に、避難経路や避難場所を確認しておきましょう。
          </p>
          <p className="text-gray-700">
            緊急時は、各自治体の指示に従って行動してください。
          </p>
        </div>
      </section>
    </main>
  );
}
