import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import DonationOrganizationList from '@/app/ofunato/DonationOrganizationList';

const donationOrganizations = [
  {
    id: 'ofunato-fund',
    organizationName: '大船渡市災害復興支援基金',
    purpose: '被災者の生活再建と地域の復興支援',
    amount: 50000000,
    accountInfo: [
      { id: 'ofunato-bank', label: '金融機関', value: '○○銀行' },
      { id: 'ofunato-branch', label: '支店名', value: '大船渡支店' },
      { id: 'ofunato-type', label: '口座種別', value: '普通' },
      { id: 'ofunato-number', label: '口座番号', value: '1234567' },
      {
        id: 'ofunato-name',
        label: '口座名義',
        value: '大船渡市災害復興支援基金',
      },
    ],
    websiteUrl: 'https://example.com/ofunato-fund',
    websiteLabel: '基金の詳細を見る',
  },
  {
    id: 'red-cross',
    organizationName: '日本赤十字社 大船渡支部',
    purpose: '被災者への医療支援と生活必需品の提供',
    accountInfo: [
      { id: 'redcross-bank', label: '金融機関', value: '△△銀行' },
      { id: 'redcross-branch', label: '支店名', value: '大船渡支店' },
      { id: 'redcross-type', label: '口座種別', value: '普通' },
      { id: 'redcross-number', label: '口座番号', value: '7654321' },
      {
        id: 'redcross-name',
        label: '口座名義',
        value: '日本赤十字社大船渡支部',
      },
    ],
    websiteUrl: 'https://example.com/red-cross',
  },
  {
    id: 'volunteer-center',
    organizationName: '大船渡災害ボランティアセンター',
    purpose: 'ボランティア活動の運営と支援物資の配布',
    amount: '随時受付中',
    accountInfo: [
      { id: 'volunteer-bank', label: '金融機関', value: '□□銀行' },
      { id: 'volunteer-branch', label: '支店名', value: '大船渡支店' },
      { id: 'volunteer-type', label: '口座種別', value: '普通' },
      { id: 'volunteer-number', label: '口座番号', value: '9876543' },
      {
        id: 'volunteer-name',
        label: '口座名義',
        value: '大船渡災害ボランティアセンター',
      },
    ],
    websiteUrl: 'https://example.com/volunteer',
    websiteLabel: 'ボランティア情報',
  },
];

export default function DonationInfoCard() {
  return (
    <Card>
      <Heading as="h2" color="primary" className="mb-4">
        募金先情報
      </Heading>
      <p className="text-gray-600 mb-6">
        被災地域の復興を支援するための募金先情報です。ご協力をお願いいたします。
      </p>
      <DonationOrganizationList organizations={donationOrganizations} />
    </Card>
  );
}
