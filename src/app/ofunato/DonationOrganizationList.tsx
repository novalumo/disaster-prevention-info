import DonationOrganizationCard from '@/components/ui/DonationOrganizationCard';

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
  accountInfo: string | AccountDetail[];
  websiteUrl?: string;
  websiteLabel?: string;
};

type DonationOrganizationListProps = {
  organizations: DonationOrganization[];
  className?: string;
};

export default function DonationOrganizationList({
  organizations,
  className,
}: DonationOrganizationListProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${className || ''}`}>
      {organizations.map((org) => (
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
  );
}
