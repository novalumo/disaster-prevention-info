'use client';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

export default function VolunteerInfoCard() {
  return (
    <section>
      <Heading as="h2" color="primary" className="mb-4">
        ボランティア募集
      </Heading>
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded p-4">
          <div className="font-bold text-blue-800 mb-2">
            災害ボランティアセンターからのお知らせ（大船渡市社会福祉協議会）
          </div>
          <p className="text-gray-600">
            火災発生以降、多くの皆さま、団体より、支援の申し入れをいただいておりますが、火災は延焼中であり、現地での活動ができない状態が続いています。
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <div className="font-bold text-yellow-800 mb-2">現在の受付状況</div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>市外からの個人ボランティア：受付停止中</li>
            <li>団体および市内在住の個人ボランティア：受付のみ、活動は未定</li>
          </ul>
        </div>
        <p className="text-gray-600">
          火災が終息し、ボランティアの受入が可能となった際には、改めてお知らせいたします。
        </p>
        <div className="flex gap-2">
          <Button
            onClick={() =>
              window.open(
                'http://ofunato-shakyo.com/volunteercategory/%E7%81%BD%E5%AE%B3%E3%83%9C%E3%83%A9%E3%83%B3%E3%83%86%E3%82%A3%E3%82%A2%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%92%E8%A8%AD%E7%BD%AE%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F/',
                '_blank',
              )
            }
          >
            詳細を見る
          </Button>
        </div>
      </div>
    </section>
  );
}
