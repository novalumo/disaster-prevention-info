import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '防災情報まとめサイト',
    template: '%s | 防災情報まとめサイト',
  },
  openGraph: {
    siteName: '防災情報まとめサイト',
    title: {
      default: '防災情報まとめサイト',
      template: '%s | 防災情報まとめサイト',
    },
  },
  twitter: {
    title: {
      default: '防災情報まとめサイト',
      template: '%s | 防災情報まとめサイト',
    },
    creator: '@novalumo_jp',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  );
}
