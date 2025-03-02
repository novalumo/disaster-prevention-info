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

// 入浴施設
export const bathFacilities: SupportFacility[] = [
  // 【五葉温泉】10～20時（火曜休）避難者対象でリアスホールからバス送迎有り。一般客も同じ時間に有料で利用可
  {
    id: 'bath-1',
    name: '五葉温泉',
    type: '入浴施設',
    address: '大船渡市日頃市町字赤坂西風山1-5',
    phone: '0192-22-5400',
    hours: '10:00 - 20:00 (火曜休)',
    details: '',
    notes: [
      '避難者対象でリアスホールからバス送迎有り',
      '一般客も同じ時間に有料で利用可',
    ],
    mapUrl: 'https://maps.app.goo.gl/V2mHefskCbg8HcSa7',
    // 39.162430526835905, 141.71523133321728
  },
  // 【大船渡温泉】11～20時。三陸公民館からバスの送迎あり、同じく一般利用可
  {
    id: 'bath-2',
    name: '大船渡温泉',
    type: '入浴施設',
    address: '大船渡市大船渡町字丸森29番1',
    phone: '0192-26-1717',
    hours: '11:00 - 20:00',
    details: '',
    notes: ['三陸公民館からバスの送迎あり', '同じく一般利用可'],
    mapUrl: 'https://maps.app.goo.gl/DnA3cbrz5T9rrLk56',
    // 39.02929903140382, 141.7139010969424
  },
  // 【Ｙ・Ｓセンター】10～20時（月曜休）
  {
    id: 'bath-3',
    name: 'Y・Sセンター',
    type: '入浴施設',
    address: '大船渡市立根町下欠１２５−１２',
    phone: '',
    hours: '10:00 - 20:00 (月曜休)',
    details: '',
    notes: [],
    mapUrl: 'https://maps.app.goo.gl/W8y17XvMYCDetScx7',
    // 39.10209418118228, 141.72042419623378
  },
  // 【夏虫のお湯っこ】10～20時（水曜休）。越喜来小発着、さんりくの園経由でバス送迎有、９日（日）まで、利用は避難者限定
  {
    id: 'bath-4',
    name: '夏虫のお湯っこ',
    type: '入浴施設',
    address: '大船渡市三陸町越喜来字小出59-1',
    phone: '0192-44-3711',
    hours: '10:00 - 20:00 (水曜休)',
    details: '越喜来小発着、さんりくの園経由でバス送迎有、９日（日）まで',
    notes: ['利用は避難者限定'],
    mapUrl: 'https://maps.app.goo.gl/gMTYf7eYxzPCTwKbA',
    // 39.13863125645727, 141.78123465916207
  },
  // 【富美岡荘】
  /*
  月・水・金→男性　
  火・木・土→女性　
  送迎有で、出発は
  ①大船渡一中17時ごろ　
  ②リアスホール18時10分ごろ　
  ③リアスホール19時20分ごろ
  ――の３往復制。
  日曜日は、午前が男性対象で10時リアスホール発、女性は11時15分ごろリアスホール発
  */
  {
    id: 'bath-5',
    name: '富美岡荘',
    type: '入浴施設',
    address: '大船渡市猪川町字冨岡148番地',
    phone: '0192-21-1118',
    hours: '',
    details: '',
    notes: [
      '月・水・金→男性',
      '火・木・土→女性',
      '送迎有で、出発は①大船渡一中17時ごろ、②リアスホール18時10分ごろ、③リアスホール19時20分ごろ――の３往復制。',
      '日曜日は、午前が男性対象で10時リアスホール発、女性は11時15分ごろリアスホール発',
    ],
    mapUrl: 'https://maps.app.goo.gl/8SLjXXhhEkmKmvAc8',
    // 39.10127222517526, 141.71738872404205
  },
];

// 送迎バス
export const shuttleBuses: SupportFacility[] = [
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
];

// 食事提供
export const mealFacilities: SupportFacility[] = [
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

export const supportFacilities: SupportFacility[] = [
  ...bathFacilities,
  ...shuttleBuses,
  ...mealFacilities,
];
