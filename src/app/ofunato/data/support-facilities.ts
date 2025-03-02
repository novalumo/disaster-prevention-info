export type SupportFacility = {
  id: string;
  name: string;
  type: '入浴施設' | '送迎バス' | '食事提供';
  address?: string;
  phone?: string;
  hours?: string;
  details: string;
  notes?: string[];
  mapUrl?: string;
  capacity?: number;
  currentUsers?: number;
  schedule?: {
    date: string;
    time: string;
    route?: string[];
  }[];
};

// サンプルデータ
export const supportFacilities: SupportFacility[] = [
  {
    id: 'bath-1',
    name: '大船渡市民体育館',
    type: '入浴施設',
    address: '大船渡市大船渡町字野々田10-1',
    phone: '0192-27-1111',
    hours: '10:00 - 20:00',
    details:
      '避難者の方は無料でご利用いただけます。タオルと着替えをご持参ください。',
    notes: [
      '利用時間は1人1時間まで',
      '定員に達した場合は入場制限を行う場合があります',
    ],
    mapUrl: 'https://maps.google.com/?q=39.0667,141.7167',
    capacity: 50,
    currentUsers: 20,
  },
  {
    id: 'bus-1',
    name: '避難所巡回バス',
    type: '送迎バス',
    details: '避難所と主要施設を結ぶ無料送迎バスを運行しています。',
    schedule: [
      {
        date: '2024-03-04',
        time: '9:00 - 17:00',
        route: [
          '大船渡市民体育館（9:00発）',
          '大船渡市役所（9:15発）',
          '大船渡病院（9:30発）',
          '大船渡駅（9:45発）',
        ],
      },
    ],
    notes: [
      '定員に達した場合は次の便をご利用ください',
      '運行状況は天候により変更になる場合があります',
    ],
  },
  {
    id: 'meal-1',
    name: '大船渡市民食堂',
    type: '食事提供',
    address: '大船渡市大船渡町字茶屋前7-8',
    phone: '0192-27-2222',
    hours: '11:30 - 14:00, 17:00 - 20:00',
    details: '避難者の方に温かい食事を無料で提供しています。',
    notes: [
      '避難所発行の利用証をご提示ください',
      'アレルギーをお持ちの方は事前にお申し出ください',
    ],
    mapUrl: 'https://maps.google.com/?q=39.0667,141.7167',
  },
];
