import Heading from '@/components/ui/Heading';
import DonationOrganizationCard from '@/components/ui/DonationOrganizationCard';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

type AccountDetail = {
  id: string;
  label: string;
  value: string;
};

type DonationOrganization = {
  id: string;
  organizationName: string;
  note?: string;
  amount?: string | number;
  accountInfo?: string | AccountDetail[];
  websiteUrl?: string;
  websiteLabel?: string;
};

const donationOrganizations: DonationOrganization[] = [
  {
    // 金融機関: 岩手銀行
    // 支店名: 大船渡支店
    // 口座種別: 普通
    // 口座番号: 2122172
    // 口座名義: 大船渡市災害義援金（林野火災）
    id: 'ofunato-city',
    organizationName: '大船渡市',
    note: '「災害義援金」または「災害見舞金」のいずれかを判別するため、お振込の際のご依頼人名をお確かめください。詳しくは以下のX投稿をご覧ください。',
    accountInfo: [
      { id: 'ofunato-city-bank', label: '金融機関', value: '岩手銀行' },
      { id: 'ofunato-city-branch', label: '支店名', value: '大船渡支店' },
      { id: 'ofunato-city-type', label: '口座種別', value: '普通' },
      { id: 'ofunato-city-number', label: '口座番号', value: '2122172' },
      {
        id: 'ofunato-city-name',
        label: '口座名義',
        value: '大船渡市災害義援金（林野火災）',
      },
      {
        id: 'ofunato-city-name-kana',
        label: '名義カナ',
        value: 'オオフナトシサイガイギエンキン（リンヤカサイ）',
      },
    ],
    websiteUrl: 'https://x.com/ofunato_city/status/1895270348461088914/photo/1',
    websiteLabel: 'Xの投稿（詳細）を見る',
  },
  {
    // 金融機関: 気仙沼信用金庫
    // 支店名: 大船渡支店
    // 口座種別: 普通
    // 口座番号: 1084642
    // 口座名義: 一般社団法人大船渡地域戦略
    id: 'ofunato-ss',
    organizationName: '一般社団法人大船渡地域戦略',
    note: '飲食店による炊き出し、ホテル・旅館による寝具やお風呂の提供などに活用されます。',
    accountInfo: [
      { id: 'ofunato-ss-bank', label: '金融機関', value: '気仙沼信用金庫' },
      { id: 'ofunato-ss-branch', label: '支店名', value: '大船渡支店' },
      { id: 'ofunato-ss-type', label: '口座種別', value: '普通' },
      { id: 'ofunato-ss-number', label: '口座番号', value: '1084642' },
      {
        id: 'ofunato-ss-name',
        label: '口座名義',
        value: '一般社団法人大船渡地域戦略',
      },
      {
        id: 'ofunato-ss-name-kana',
        label: '名義カナ',
        value: 'シヤ）オオフナトチイキセンリヤク',
      },
    ],
    websiteUrl: 'https://www.ofunato-ss.com/news/detail/20250227-fire',
    websiteLabel: '特設ページを見る',
  },
  {
    // ・ゆうちょ銀行
    // 口座番号：02260-8-114405
    // 加入者名：特定非営利活動法人おはなしころりん
    // ・ゆうちょ銀行以外からの振込先
    // 銀行名：ゆうちょ銀行　金融機関コード：9900　店番：229
    // 預金種目：当座　店名：二二九店　口座番号：0114405
    // 加入者名：特定非営利活動法人おはなしころりん
    id: 'ohanashikororin',
    organizationName: '特定非営利活動法人おはなしころりん',
    note: 'ゆうちょ銀行の場合は、口座番号 02260-8-114405 でお振込ください。被災してお住まいを失った方への義援金に活用させていただきます。',
    accountInfo: [
      { id: 'ohanashikororin-bank', label: '金融機関', value: 'ゆうちょ銀行' },
      { id: 'ohanashikororin-branch', label: '支店名', value: '二二九店' },
      { id: 'ohanashikororin-type', label: '口座種別', value: '当座' },
      { id: 'ohanashikororin-number', label: '口座番号', value: '0114405' },
      {
        id: 'ohanashikororin-name',
        label: '口座名義',
        value: '特定非営利活動法人おはなしころりん',
      },
      {
        id: 'ohanashikororin-name-kana',
        label: '名義カナ',
        value: 'トクヒ）オハナシコロリン',
      },
    ],
    websiteUrl: 'https://www.ohanashikororin.org/',
    websiteLabel: '公式サイトへ',
  },
  {
    id: 'ofunato-jc',
    organizationName: '一般社団法人大船渡青年会議所',
    note: '適切なタイミングで各所へ聞き取りの上、必要物資の購入や活動に充てさせていただきます。',
    accountInfo: [
      { id: 'ofunato-jc-bank', label: '金融機関', value: '東北銀行' },
      { id: 'ofunato-jc-branch', label: '支店名', value: '大船渡支店' },
      { id: 'ofunato-jc-type', label: '口座種別', value: '普通' },
      { id: 'ofunato-jc-number', label: '口座番号', value: '5046480' },
      {
        id: 'ofunato-jc-name',
        label: '口座名義',
        value: '一般社団法人大船渡青年会議所',
      },
      {
        id: 'ofunato-jc-name-kana',
        label: '名義カナ',
        value: 'シヤ）オオフナトセイネンカイギショ',
      },
    ],
    websiteUrl: 'https://www.facebook.com/ofunatojc/',
    websiteLabel: 'Facebookページを見る',
  },
  {
    id: 'kizuna-sanriku',
    organizationName: '特定非営利活動法人 絆プロジェクト三陸',
    note: '現地の状況を踏まえ、必要な物資の購入や支援活動に充てさせていただきます。',
    accountInfo: [
      { id: 'kizuna-sanriku-bank', label: '金融機関', value: 'ゆうちょ銀行' },
      {
        id: 'kizuna-sanriku-branch',
        label: '支店名',
        value: '八三八（ハチサンハチ）',
      },
      { id: 'kizuna-sanriku-type', label: '口座種別', value: '普通' },
      { id: 'kizuna-sanriku-number', label: '口座番号', value: '2388005' },
      {
        id: 'kizuna-sanriku-name',
        label: '口座名義',
        value: '特定非営利活動法人絆プロジェクト三陸',
      },
      {
        id: 'kizuna-sanriku-name-kana',
        label: '名義カナ',
        value: 'トクヒ）キズナプロジェクトサンリク',
      },
    ],
    websiteUrl: 'https://www.facebook.com/kizuna.sanriku.jp/',
    websiteLabel: 'Facebookページを見る',
  },
  {
    id: 'yahoo-donation',
    organizationName: 'Yahoo!基金',
    note: '2025/03/31 18:00 まで。本募金には、500万円を上限金額としてLINEヤフー株式会社からのマッチング寄付が適用されます。',
    amount: '100円〜',
    websiteUrl: 'https://donation.yahoo.co.jp/detail/1630066',
    websiteLabel: 'Yahoo!基金のページを見る',
  },
  {
    id: 'kyassen-caravan',
    organizationName: '株式会社キャッセン大船渡',
    note: 'ご支援一口につき１枚のステッカーを後日、お送りさせていただきます。',
    amount: '1,000円',
    websiteUrl: 'https://kyassencaravan.com/item-list?campaignId=10271',
    websiteLabel: 'キャッセンキャラバンのページを見る',
  },
  {
    id: 'furusato-choice-saigai',
    organizationName: '【ふるさと納税・災害支援型】ふるさとチョイス',
    amount: '2,000円〜',
    websiteUrl: 'https://www.furusato-tax.jp/saigai/detail/2608',
    websiteLabel: 'ふるさとチョイスのページを見る',
  },
  {
    id: 'furusato-choice-saigai-normal',
    organizationName: '【ふるさと納税・通常】ふるさとチョイス',
    amount: '1,000円〜',
    websiteUrl:
      'https://www.furusato-tax.jp/city/product/03203?incsoldout=1&city-product_all',
    websiteLabel: 'ふるさとチョイスのページを見る',
  },
  {
    id: 'satofuru-saigai-normal',
    organizationName: '【ふるさと納税・災害支援型】さとふる',
    amount: '1,000円〜',
    websiteUrl:
      'https://www.satofull.jp/oenkifu/oenkifu_detail.php?page_id=518',
    websiteLabel: 'さとふるのページを見る',
  },
  {
    id: 'yumechan',
    organizationName: 'NPO法人AidTAKATA たかたのゆめちゃん事務局',
    note: 'オンラインショップ経由の募金でゆめちゃんからお礼有',
    amount: '3,000円',
    websiteUrl: 'https://yumenohouse.thebase.in/items/100154325',
    websiteLabel: 'ゆめちゃんマーケットを見る',
  },
];

export default function DonationInfoCard() {
  // 銀行振込とその他の寄付方法に分類
  const bankTransferOrgs = donationOrganizations.filter(
    (org) => org.accountInfo,
  );
  const otherDonationOrgs = donationOrganizations.filter(
    (org) => !org.accountInfo,
  );

  return (
    <section className="space-y-12">
      <div>
        <Heading as="h2" color="primary" className="mb-4">
          募金先情報
        </Heading>
        <p className="text-gray-600 mb-6">
          被災地域を支援するための募金先情報です。ご協力をお願いいたします。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#bank-transfer"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            <ArrowDownIcon className="h-4 w-4" />
            <span>銀行振込による寄付</span>
            <span className="text-sm text-gray-500">
              （{bankTransferOrgs.length}件）
            </span>
          </a>
          <a
            href="#other-methods"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            <ArrowDownIcon className="h-4 w-4" />
            <span>その他の寄付方法</span>
            <span className="text-sm text-gray-500">
              （{otherDonationOrgs.length}件）
            </span>
          </a>
        </div>
      </div>

      <div id="bank-transfer">
        <Heading as="h3" color="secondary" className="mb-4">
          銀行振込による寄付
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {bankTransferOrgs.map((org) => (
            <DonationOrganizationCard
              className="border"
              key={org.id}
              organizationName={org.organizationName}
              note={org.note}
              amount={org.amount}
              accountInfo={org.accountInfo}
              websiteUrl={org.websiteUrl}
              websiteLabel={org.websiteLabel}
            />
          ))}
        </div>
      </div>

      <div id="other-methods">
        <Heading as="h3" color="secondary" className="mb-4">
          その他の寄付方法
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {otherDonationOrgs.map((org) => (
            <DonationOrganizationCard
              className="border"
              key={org.id}
              organizationName={org.organizationName}
              note={org.note}
              amount={org.amount}
              accountInfo={org.accountInfo}
              websiteUrl={org.websiteUrl}
              websiteLabel={org.websiteLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
