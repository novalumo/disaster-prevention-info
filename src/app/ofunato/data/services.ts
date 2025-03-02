export type SupportFacility = {
  id: string;
  name: string;
  type: '入浴施設' | '送迎バス' | '食事提供';
  address?: string;
  phone?: string;
  hours?: string[];
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
    hours: ['10:00 - 20:00', '火曜休'],
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
    hours: ['11:00 - 20:00'],
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
    hours: ['10:00 - 20:00', '月曜休'],
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
    hours: ['10:00 - 20:00', '水曜休'],
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
    hours: [
      '月・水・金は男性',
      '火・木・土は女性',
      '日曜日：午前は男性（10時リアスホール発）、午後は女性（11時15分リアスホール発）',
    ],
    details: '',
    notes: [
      '送迎有で、出発は①大船渡一中17時ごろ、②リアスホール18時10分ごろ、③リアスホール19時20分ごろ――の３往復制。',
    ],
    mapUrl: 'https://maps.app.goo.gl/8SLjXXhhEkmKmvAc8',
    // 39.10127222517526, 141.71738872404205
  },
];

// 送迎バス
export const shuttleBuses: SupportFacility[] = [
  // {
  //   id: 'bus-1',
  //   name: '避難所巡回バス',
  //   type: '送迎バス',
  //   details: '避難所と主要施設を結ぶ無料送迎バスを運行しています。',
  //   schedule: [
  //     {
  //       date: '2024-03-04',
  //       time: '9:00 - 17:00',
  //       route: [
  //         '大船渡市民体育館（9:00発）',
  //         '大船渡市役所（9:15発）',
  //         '大船渡病院（9:30発）',
  //         '大船渡駅（9:45発）',
  //       ],
  //     },
  //   ],
  //   notes: [
  //     '定員に達した場合は次の便をご利用ください',
  //     '運行状況は天候により変更になる場合があります',
  //   ],
  // },
];

// 食事提供
export const mealFacilities: SupportFacility[] = [
  // 黒船本店
  {
    id: 'meal-1',
    name: '【避難者無料】黒船本店',
    type: '食事提供',
    address: '大船渡市猪川町藤沢口39',
    details: 'ラーメン&チャーハン',
    notes: ['証明書は特に求めません', '避難してますと言って頂ければOK'],
    mapUrl: 'https://maps.app.goo.gl/jPShq5A33j3LqwJZ8',
    // 39.10085781205102, 141.69172943316974
  },
  // 黒船SECOND
  {
    id: 'meal-2',
    name: '【避難者無料】黒船SECOND',
    type: '食事提供',
    address: '大船渡市大船渡町茶屋前3-2-2140 キャッセンフードヴィレッジ',
    details: 'ラーメン&秋刀魚節ご飯',
    notes: ['証明書は特に求めません', '避難してますと言って頂ければOK'],
    mapUrl: 'https://maps.app.goo.gl/YQknZrdBhbdK1Xg6A',
    // 39.06201257352936, 141.72170033343636
  },
  // 三平食堂
  {
    id: 'meal-3',
    name: '【避難者無料】三平食堂',
    type: '食事提供',
    hours: ['11:00 - 19:00'],
    details:
      '綾里地区住民の方限定で食事を無料提供しています。メニュー表の中からお好きなメニューを選べます（麺類・ごはん類・定食・お子様メニューなど）全70品',
    notes: [
      'テイクアウトOK',
      'おかわり、大盛りも可能',
      '何度でも利用可能（毎日でもOK）',
      '食事なしのお茶っこ飲みもOK',
      '提供時間はかかりますが確実に食べられます',
      '避難指示が発令された場合は調理中・食事中でも避難優先',
      '山林火災の状況により営業形態が変わることがあります',
    ],
    mapUrl: 'https://maps.app.goo.gl/SJEBAi4oFZfRwq4g6',
    // 39.12181101093444, 141.8117025392604
  },
  // よしの珈琲
  {
    id: 'meal-4',
    name: '【避難者無料】よしの珈琲',
    type: '食事提供',
    details:
      '大船渡林野火災により避難している方を対象に、ドリンクを無料で提供しています',
    notes: ['コーヒーを飲みに来るだけでもOK', '避難者の方が対象です'],
    mapUrl: 'https://maps.app.goo.gl/7cubrQHmxKbie8p98',
    // 39.08521444281153, 141.70999226699215
  },
];

export const supportFacilities: SupportFacility[] = [
  ...bathFacilities,
  ...shuttleBuses,
  ...mealFacilities,
];
