export type SupportFacility = {
  id: string;
  name: string;
  type:
    | '入浴施設'
    | '送迎バス'
    | '食事提供'
    | '宿泊施設'
    | '学習施設'
    | 'ペット関連';
  address?: string[];
  phone?: string[];
  hours?: string[];
  details?: string[];
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
    address: ['大船渡市日頃市町字赤坂西風山1-5'],
    phone: ['0192-22-5400'],
    hours: ['10:00 - 20:00', '火曜休'],
    details: [],
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
    address: ['大船渡市大船渡町字丸森29番1'],
    phone: ['0192-26-1717'],
    hours: ['11:00 - 20:00'],
    details: [],
    notes: ['三陸公民館からバスの送迎あり', '同じく一般利用可'],
    mapUrl: 'https://maps.app.goo.gl/DnA3cbrz5T9rrLk56',
    // 39.02929903140382, 141.7139010969424
  },
  // 【Ｙ・Ｓセンター】10～20時（月曜休）
  {
    id: 'bath-3',
    name: 'Y・Sセンター',
    type: '入浴施設',
    address: ['大船渡市立根町下欠１２５−１２'],
    phone: [],
    hours: ['10:00 - 20:00', '月曜休'],
    details: [],
    notes: [],
    mapUrl: 'https://maps.app.goo.gl/W8y17XvMYCDetScx7',
    // 39.10209418118228, 141.72042419623378
  },
  // 【夏虫のお湯っこ】10～20時（水曜休）。越喜来小発着、さんりくの園経由でバス送迎有、９日（日）まで、利用は避難者限定
  {
    id: 'bath-4',
    name: '夏虫のお湯っこ',
    type: '入浴施設',
    address: ['大船渡市三陸町越喜来字小出59-1'],
    phone: ['0192-44-3711'],
    hours: ['10:00 - 20:00', '水曜休'],
    details: ['越喜来小発着、さんりくの園経由でバス送迎有、９日（日）まで'],
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
    address: ['大船渡市猪川町字冨岡148番地'],
    phone: ['0192-21-1118'],
    hours: [
      '月・水・金は男性',
      '火・木・土は女性',
      '日曜日：午前は男性（10時リアスホール発）、午後は女性（11時15分リアスホール発）',
    ],
    details: [],
    notes: [
      '送迎有で、出発は①大船渡一中17時ごろ、②リアスホール18時10分ごろ、③リアスホール19時20分ごろ――の３往復制。',
    ],
    mapUrl: 'https://maps.app.goo.gl/8SLjXXhhEkmKmvAc8',
    // 39.10127222517526, 141.71738872404205
  },
  // 【大船渡市魚市場共用施設】シャワー室
  {
    id: 'bath-6',
    name: '大船渡市魚市場共用施設（シャワー室）',
    type: '入浴施設',
    address: ['大船渡市大船渡町字永沢174'],
    hours: ['10:00 - 15:00'],
    details: ['3月4日から開始', '個室のシャワー室 5室（女性限定）'],
    notes: ['利用時は現地スタッフに避難者であることをお伝えください'],
    mapUrl: 'https://maps.app.goo.gl/Kgo4M2yQFHQLQL6e6',
    // 39.05196652049663, 141.72268829669216
  },
  // 【蔵ハウス大船渡】シャワー室
  {
    id: 'bath-7',
    name: '蔵ハウス大船渡（シャワー室）',
    type: '入浴施設',
    address: ['大船渡市盛町字町3番地1'],
    hours: ['17:00 - 20:00'],
    details: ['3月4日から開始', '個室のシャワー室 6室（女性限定）'],
    mapUrl: 'https://maps.app.goo.gl/cyo9jZhu2rXnisXD7',
    // 39.086743233113346, 141.70778454945727
  },
  // 【碁石海岸キャンプ場】シャワー室
  {
    id: 'bath-8',
    name: '碁石海岸キャンプ場（シャワー室）',
    type: '入浴施設',
    address: ['大船渡市末崎町字大浜221-68'],
    hours: ['9:00 - 20:00'],
    details: ['避難者に対してシャワー室を無料開放しています'],
    notes: [
      '利用時は碁石海岸インフォメーションセンター窓口で職員に声がけが必要です',
      '3月16日まで一般の方の利用は中止となっています',
    ],
    mapUrl: 'https://maps.app.goo.gl/KrDRxpRwdQgwQUy7A',
    // 38.99211076300236, 141.7421176381869
  },
];

// 送迎バス
export const shuttleBuses: SupportFacility[] = [
  // {
  //   id: 'bus-1',
  //   name: '避難所巡回バス',
  //   type: '送迎バス',
  //   details: ['避難所と主要施設を結ぶ無料送迎バスを運行しています。'],
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
    address: ['大船渡市猪川町藤沢口39'],
    details: ['ラーメン&チャーハン'],
    notes: [
      '証明書は特に求めません',
      '避難してますと言って頂ければOK',
      '仮設住宅が完成するまで継続',
    ],
    mapUrl: 'https://maps.app.goo.gl/jPShq5A33j3LqwJZ8',
    // 39.10085781205102, 141.69172943316974
  },
  // 黒船SECOND
  {
    id: 'meal-2',
    name: '【避難者無料】黒船SECOND',
    type: '食事提供',
    address: ['大船渡市大船渡町茶屋前3-2-2140 キャッセンフードヴィレッジ'],
    details: ['ラーメン&秋刀魚節ご飯'],
    notes: [
      '証明書は特に求めません',
      '避難してますと言って頂ければOK',
      '仮設住宅が完成するまで継続',
    ],
    mapUrl: 'https://maps.app.goo.gl/YQknZrdBhbdK1Xg6A',
    // 39.06201257352936, 141.72170033343636
  },
  // 三平食堂
  {
    id: 'meal-3',
    name: '【避難者無料】三平食堂',
    type: '食事提供',
    hours: ['11:00 - 19:00'],
    details: [
      '綾里地区住民の方限定で食事を無料提供しています。メニュー表の中からお好きなメニューを選べます（麺類・ごはん類・定食・お子様メニューなど）全70品',
    ],
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
    details: [
      '大船渡林野火災により避難している方を対象に、ドリンクを無料で提供しています',
    ],
    notes: ['コーヒーを飲みに来るだけでもOK', '避難者の方が対象です'],
    mapUrl: 'https://maps.app.goo.gl/7cubrQHmxKbie8p98',
    // 39.08521444281153, 141.70999226699215
  },
  // BBQ&BUFFET Happy
  {
    id: 'meal-5',
    name: '【避難者無料】BBQ&BUFFET Happy',
    type: '食事提供',
    address: ['大船渡市大船渡町野々田153-4'],
    hours: ['11:00 - 14:00'],
    details: ['山火事で避難している方向けにランチを無料提供しています'],
    notes: ['住所のわかるものの提示が必要です'],
    mapUrl: 'https://maps.app.goo.gl/BFkFpAHHnWrdxH8s6',
    // 39.06140450220428, 141.7233545258845
  },
  // スター市場食堂
  {
    id: 'meal-6',
    name: '【避難者無料】スター市場食堂',
    type: '食事提供',
    address: ['大船渡市立根町桑原16-1'],
    details: ['醤油ラーメンを無料提供しています'],
    notes: [
      'ご注文の際、現住所の確認できるものをご提示お願いします',
      '混雑を避けるため当面の間、食堂メニューは醤油ラーメンのみの提供となります',
    ],
    mapUrl: 'https://maps.app.goo.gl/D3QDzP3pHbN7S3EUA',
    // 39.106306667789596, 141.71120191057133
  },
  // スター市場食堂
  {
    id: 'ichibantei',
    name: '【避難者無料】壱番亭',
    type: '食事提供',
    address: ['大船渡市盛町字下舘下22-1'],
    details: [
      '避難指示対象区域の方は、現住所を確認できる書類（免許証・マイナカード等）をご提示頂きましたら、ラーメン全種類無料で提供させて頂きます。',
      'その他サイシングループ各店舗では、避難者様対象のお食事10%割引を行なっております。',
      '対象店舗: やまなか家大船渡店、ホットポット、すしランド',
    ],
    notes: ['トッピング追加はお代を頂きますのでご了承ください。'],
    mapUrl: 'https://maps.app.goo.gl/rseqUoQJikmP9dka9',
    // 39.07765204108655, 141.712137705511
  },
];

// 宿泊施設
export const accommodationFacilities: SupportFacility[] = [
  {
    id: 'accommodation-1',
    name: '星逢える宿 森のコテージ気仙沼',
    type: '宿泊施設',
    address: ['宮城県気仙沼市松崎地生１３０−１２'],
    details: [
      'ペットと一緒に避難されている方',
      'やむを得ず車中泊をされている方',
      '高齢の方や小さなお子様がいて、避難所での生活が難しい方',
      '',
      '当施設は小規模で既に満室の日もありますので、長期のご宿泊は難しいですが、2～3日でもベッドでゆっくり休みたいという方に、無料で客室を開放いたします。',
    ],
    notes: [
      'すでに満室の日もあるため、ご希望に添えない場合がございます',
      '小規模施設のため、多くのお問い合わせをいただいた場合は、お断りすることがあるかもしれません',
      '現状、お食事の提供はございません',
      'お風呂・トイレはお部屋にはなく共同です',
      'ペットは小型犬を対象としています。中型犬、大型犬、その他ペット同伴はご相談の上',
      'ペットのみの一時預かりは出来ません',
    ],
    mapUrl: 'https://maps.app.goo.gl/x1xbMw4dYXzofSsG6',
    // 38.86975348925128, 141.56041649291993
  },
  {
    id: 'accommodation-2',
    name: '【避難者無料】玉乃湯',
    type: '宿泊施設',
    address: ['岩手県陸前高田市竹駒町字上壺104-8'],
    phone: ['0192-55-6866'],
    details: [
      '避難されている方向けに3部屋を無料で提供しています。ロッツ株式会社による支援です。',
    ],
    notes: [
      'お部屋の利用は電話でのお問い合わせが必要です',
      '無料の入浴サービスも実施しています',
    ],
    mapUrl: 'https://maps.app.goo.gl/CRCvL6AMK63GFTHQ8',
    capacity: 3,
    // 39.064504352431854, 141.63055810325736
  },
];

// 学習施設
export const studyFacilities: SupportFacility[] = [
  {
    id: 'sakari-elementary-school',
    name: '盛小学校',
    type: '学習施設',
    address: ['大船渡市盛町字沢川30'],
    hours: ['9:00 - 11:30'],
    details: [
      '希望する児童を対象に学習支援等を実施。',
      '対象: 綾里小学校、赤崎小学校',
    ],
    mapUrl: 'https://maps.app.goo.gl/VEHQSEKAGBxVcVz17',
    // 39.08185762298179, 141.70476560815612
  },
  {
    id: 'ofunato-junuor-high-school',
    name: '大船渡中学校',
    type: '学習施設',
    address: ['大船渡市大船渡町字永沢94番地1号'],
    hours: ['9:00 - 11:30'],
    details: [
      '希望する児童・生徒を対象に学習支援等を実施。',
      '対象小学校: 綾里小学校、赤崎小学校',
      '対象中学校: 東朋中学校（5日 (水) から 7日 (金) まで）',
    ],
    mapUrl: 'https://maps.app.goo.gl/JqLynCrCmaJYyYDn7',
    // 39.05331130660046, 141.7173983487243
  },
  {
    id: 'ikawa-elementary-school',
    name: '猪川小学校',
    type: '学習施設',
    address: ['大船渡市猪川町字轆轤石23'],
    hours: ['9:00 - 11:30'],
    details: [
      '希望する児童を対象に学習支援等を実施。',
      '対象: 綾里小学校、赤崎小学校',
    ],
    mapUrl: 'https://maps.app.goo.gl/8hxgSYFZxdHvgEXm9',
    // 39.09400131913394, 141.71081257560508
  },
  {
    id: 'daiichi-junior-high-school',
    name: '大船渡第一中学校',
    type: '学習施設',
    address: ['大船渡市立根町字宮田89番地'],
    hours: ['9:00 - 11:30'],
    details: [
      '希望する児童を対象に学習支援等を実施。',
      '対象: 綾里小学校、赤崎小学校',
    ],
    mapUrl: 'https://maps.app.goo.gl/ykXq9gBayJjCFX9S7',
    // 39.102503397458506, 141.71379212594383
  },
  {
    id: 'okirai-elementary-school',
    name: '越喜来小学校',
    type: '学習施設',
    address: ['大船渡市三陸町越喜来字小出24-4'],
    hours: ['9:00 - 11:30'],
    details: [
      '希望する児童を対象に学習支援等を実施。',
      '対象: 綾里小学校、赤崎小学校',
    ],
    mapUrl: 'https://maps.app.goo.gl/1PEFYfoymHNgv5dj6',
    // 39.12608245616374, 141.8100134553959
  },
  {
    id: 'ofunato-public-library',
    name: '大船渡市立図書館',
    type: '学習施設',
    address: ['大船渡市盛町字下舘下18-1'],
    hours: ['9:00 - 19:00', '土・日・祝日は17:00まで', '火曜休館'],
    details: [
      '受験生や休校中の児童・生徒らに利用を呼びかけ。ゆっくり静かに過ごせて、集中できる空間を提供してくれます。',
    ],
    mapUrl: 'https://maps.app.goo.gl/XDkxjH13hiQye5Xr7',
    // 39.07773818425187, 141.70993245934733
  },
  {
    id: 'rikuzentakata-public-library',
    name: '陸前高田市立図書館',
    type: '学習施設',
    address: ['陸前高田市高田町字館の沖303番地7'],
    hours: ['9:00 - 20:00', '土・日・祝日は19:00まで', '月曜休館'],
    details: [
      '受験生や休校中の児童・生徒らに利用を呼びかけ。ゆっくり静かに過ごせて、集中できる空間を提供してくれます。',
    ],
    mapUrl: 'https://maps.app.goo.gl/8btstbyzfS2xtHeUA',
    // 39.01657768674185, 141.62890452655574
  },
  {
    id: 'sunlia',
    name: 'サンリア臨時学習ルーム',
    type: '学習施設',
    address: ['大船渡市盛町字町10番地11 1F多目的ルーム(旧美容室)'],
    phone: ['0192-26-3939（代表）'],
    hours: ['9:00 - 19:00'],
    details: [
      '使用料金：無料',
      '開設者：協同組合南三陸ショッピングセンター',
      '開設期間：令和7年3月2日(日)~当面の間',
      '',
      '現在発災している大船渡市内山林火災に際し、被災学生等の学習支援のためサンリア館内に学習ルームを臨時開設します。ぜひご活用くださいませ。',
    ],
    notes: [
      '主に学生~児童の自習ルームとして運用します（使用条件:年齢・被災の有無は問いません）',
      '管理人は常駐しません',
      '飲食は禁止（蓋付きの飲み物（水筒・ペットボトル）は可）',
      '場所取り（事前予約、荷物を置く）はできません',
      '周りのお客様の迷惑にならないよう静かに利用していただきます',
      '当面は長机とパイプイスのみの設備となります',
      'イベント開催時は使用出来ません',
    ],
    mapUrl: 'https://maps.app.goo.gl/7egMhsc9JXQ8agQi8',
    // 39.08760934444737, 141.7092322587848
  },
];

// ペット関連施設
export const petFacilities: SupportFacility[] = [
  {
    id: 'pet-1',
    name: '大船渡保健福祉環境センター（雫石町・動物いのちの会いわて）',
    type: 'ペット関連',
    phone: ['0192－27－9923（内線 243）'],
    hours: ['9：00～17：00'],
    details: [
      '避難所にペットをお連れの皆様へ',
      '大船渡保健福祉環境センター（大船渡保健所）では、避難所に動物を連れて避難されている方の動物の一時預かり等のご相談に応じています。',
      'お電話にてご相談ください。',
    ],
    notes: ['2日〜無料で一時預かり'],
  },
  {
    id: 'pet-2',
    name: 'グリーンピア三陸みやこ',
    type: 'ペット関連',
    phone: ['0193-68-9111 (宮古市危機管理監危機管理課)'],
    details: [
      '宮古市でペット同行・同伴避難を受け入れています。',
      '申し込みフォーム: https://logoform.jp/form/4cHy/948172',
      '（申し込み受け付け後、担当者から折り返しご連絡いたします。）',
    ],
    notes: [
      'ペット用のフード、飲用水のほか、ペットシーツ等、お世話に必要な物品については飼い主様でご用意願います。',
    ],
  },
  {
    id: 'pet-3',
    name: '旧吉浜中学校',
    type: 'ペット関連',
    phone: ['0192-27-9923 (内線243)'],
    details: [
      '3月8日(土)より、旧吉浜中学校避難所において、ペット同伴避難者向けに受け入れを開始します。',
      '※猫20頭・犬6頭程度',
      '申込先：大船渡保健福祉環境センター',
    ],
    notes: ['https://x.com/FMnemaline875/status/1897922114805809276'],
  },
];

export const supportFacilities: SupportFacility[] = [
  ...bathFacilities,
  ...shuttleBuses,
  ...mealFacilities,
  ...accommodationFacilities,
  ...studyFacilities,
  ...petFacilities,
];
