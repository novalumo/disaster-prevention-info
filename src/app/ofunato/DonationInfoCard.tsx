import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import DonationOrganizationList from '@/app/ofunato/DonationOrganizationList';

const donationOrganizations = [
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
    note: 'ゆうちょ銀行の場合は、口座番号 02260-8-114405 でお振込ください。',
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
    ],
    websiteUrl: 'https://www.ohanashikororin.org/',
    websiteLabel: '公式サイトへ',
  },
];

export default function DonationInfoCard() {
  return (
    <Card>
      <Heading as="h2" color="primary" className="mb-4">
        募金先情報
      </Heading>
      <p className="text-gray-600 mb-6">
        被災地域を支援するための募金先情報です。ご協力をお願いいたします。
      </p>
      <DonationOrganizationList organizations={donationOrganizations} />
    </Card>
  );
}
