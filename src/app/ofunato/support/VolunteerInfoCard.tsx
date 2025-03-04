'use client';
import Heading from '@/components/ui/Heading';
import { Button } from '@mui/material';

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
            ３月４日より、災害ボランティアセンターの活動が開始しました。
            <br />
            当面は、事前登録いただいた市内の皆さまに物資整理等で活動いただく予定です。
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <div className="font-bold text-yellow-800 mb-2">
            災害ボランティア予備登録のお願い
          </div>
          <div className="leading-loose flex flex-col gap-2">
            <p className="text-gray-600">
              今後、大船渡市内で災害ボランティアへご参加いただく個人・団体の皆さまの
              <strong>登録フォーム</strong>をつくりました。
            </p>
            <p className="text-gray-600 text-sm">
              ※市内・市外・県外問わず、ご登録が可能です。
            </p>
            <p className="text-gray-600">
              ご登録いただいた皆さまには、ボランティアの規模、内容等にあわせ、ボランティア募集の情報をお送りします。
              <br />
              積極的なご登録、よろしくおねがいします。
            </p>
            <p className="text-gray-600 text-sm">
              ※募集情報は、ご登録いただいた連絡先にお送りします。お電話でのお問い合わせはお控えくださいますよう、お願いいたします。
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>
                <span className="font-bold">＜個人向け＞</span>
                <br />
                <a
                  href="https://forms.gle/zaPs2E2eDbr61Cn59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  https://forms.gle/zaPs2E2eDbr61Cn59
                </a>
              </li>
              <li>
                <span className="font-bold">＜団体向け＞</span>
                <br />
                <a
                  href="https://forms.gle/gvvpivsn4wFH2x287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  https://forms.gle/gvvpivsn4wFH2x287
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-600">
          火災が終息し、ボランティアの受入が可能となった際には、改めてお知らせいたします。
        </p>
        <div className="flex gap-2">
          <Button
            variant="contained"
            href="http://ofunato-shakyo.com/volunteercategory/saivolu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            詳細を見る
          </Button>
        </div>
      </div>
    </section>
  );
}
