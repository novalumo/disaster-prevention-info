'use client';
import { useState } from 'react';
import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline';

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
        <p className="text-gray-600 pr-12">{accountInfo as string}</p>
        <Button
          variant={isAllCopied ? 'secondary' : 'outline'}
          className="absolute right-2 top-2 p-1.5"
          onClick={() => handleCopy(accountInfo as string, 'all')}
          title={isAllCopied ? 'コピー済み' : 'コピーする'}
        >
          {isAllCopied ? (
            <CheckIcon className="h-5 w-5" />
          ) : (
            <DocumentDuplicateIcon className="h-5 w-5" />
          )}
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
              className="p-1.5 ml-2"
              onClick={() => handleCopy(detail.value, detail.id)}
              title={copiedItem === detail.id ? 'コピー済み' : 'コピーする'}
            >
              {copiedItem === detail.id ? (
                <CheckIcon className="h-5 w-5" />
              ) : (
                <DocumentDuplicateIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        ))}
        <div className="p-3 flex justify-end">
          <Button
            variant={copiedItem === 'all' ? 'secondary' : 'primary'}
            className="p-1.5 flex items-center gap-1.5"
            onClick={() =>
              handleCopy(
                details.map((d) => `${d.label}: ${d.value}`).join('\n'),
                'all',
              )
            }
            title={
              copiedItem === 'all' ? 'コピー済み' : '全ての情報をコピーする'
            }
          >
            {copiedItem === 'all' ? (
              <>
                <CheckIcon className="h-5 w-5" />
                <span className="text-sm">コピー済み</span>
              </>
            ) : (
              <>
                <DocumentDuplicateIcon className="h-5 w-5" />
                <span className="text-sm">全ての情報をコピー</span>
              </>
            )}
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
          <span className="font-semibold text-gray-700">金額: </span>
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
