'use client';

import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

export default function DisasterMapCard() {
  const handleViewMap = () => {
    // マップを表示する処理
    console.log('マップを表示');
  };

  return (
    <Card>
      <Heading as="h2" color="primary" className="mb-4">
        防災マップ
      </Heading>
      <p className="text-gray-600 mb-4">
        ハザードマップや避難経路の確認ができます
      </p>
      <Button onClick={handleViewMap}>マップを見る</Button>
    </Card>
  );
}
