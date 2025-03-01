'use client';
import { useState } from 'react';
import Card from './Card';
import Heading from './Heading';
import Button from './Button';
import Link from 'next/link';

type AccountDetail = {
  id: string;
  label: string;
  value: string;
};

type DonationOrganizationCardProps = {
  organizationName: string;
  note?: string;
  amount?: string | number;
  accountInfo?: string | AccountDetail[];
  websiteUrl?: string;
  websiteLabel?: string;
  className?: string;
};

export default function DonationOrganizationCard({
  organizationName,
  note,
  amount,
  accountInfo,
  websiteUrl,
  websiteLabel = '公式サイトへ',
  className,
}: DonationOrganizationCardProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, itemId?: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(itemId || 'all');
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  // 振込先情報が文字列の場合（後方互換性のため）
  const renderStringAccountInfo = () => {
    const isAllCopied = copiedItem === 'all';
    return (
      <div className="mt-1 p-3 bg-gray-50 rounded border border-gray-200 relative">
        <p className="text-gray-600 pr-20">{accountInfo as string}</p>
        <Button
          variant={isAllCopied ? 'secondary' : 'outline'}
          className="absolute right-2 top-2 py-1 px-2 text-sm"
          onClick={() => handleCopy(accountInfo as string, 'all')}
        >
          {isAllCopied ? 'コピー済み' : 'コピー'}
        </Button>
      </div>
    );
  };

  // 振込先情報が項目ごとに分かれている場合
  const renderDetailedAccountInfo = () => {
    const details = accountInfo as AccountDetail[];
    return (
      <div className="mt-1 bg-gray-50 rounded border border-gray-200 divide-y divide-gray-200">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="p-3 flex justify-between items-center"
          >
            <div>
              <span className="font-semibold text-gray-700">
                {detail.label}:{' '}
              </span>
              <span className="text-gray-600">{detail.value}</span>
            </div>
            <Button
              variant={copiedItem === detail.id ? 'secondary' : 'outline'}
              className="py-1 px-2 text-sm ml-2"
              onClick={() => handleCopy(detail.value, detail.id)}
            >
              {copiedItem === detail.id ? 'コピー済み' : 'コピー'}
            </Button>
          </div>
        ))}
        <div className="p-3 flex justify-end">
          <Button
            variant={copiedItem === 'all' ? 'secondary' : 'primary'}
            className="py-1 px-2 text-sm"
            onClick={() =>
              handleCopy(
                details.map((d) => `${d.label}: ${d.value}`).join('\n'),
                'all',
              )
            }
          >
            全てコピー
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Card className={`${className || ''}`}>
      <Heading as="h3" color="primary" className="mb-3">
        {organizationName}
      </Heading>

      {amount && (
        <div className="mb-3">
          <span className="font-semibold text-gray-700">目標金額: </span>
          <span className="text-gray-600">
            {typeof amount === 'number'
              ? `${amount.toLocaleString()}円`
              : amount}
          </span>
        </div>
      )}

      {accountInfo && (
        <div className="mb-4">
          <span className="font-semibold text-gray-700">振込先: </span>
          {Array.isArray(accountInfo)
            ? renderDetailedAccountInfo()
            : renderStringAccountInfo()}
        </div>
      )}

      {note && (
        <div className="mb-4 p-3 bg-gray-50 rounded border border-gray-100">
          <span className="font-semibold text-gray-700 block mb-1">備考: </span>
          <p className="text-gray-600 text-sm">{note}</p>
        </div>
      )}

      {websiteUrl && (
        <div className="mt-4">
          <Link
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="primary">{websiteLabel}</Button>
          </Link>
        </div>
      )}
    </Card>
  );
}
