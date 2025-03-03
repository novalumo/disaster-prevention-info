import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Noto_Sans_JP } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
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
    <html lang="ja" className={`${notoSansJP.variable}`}>
      <GoogleTagManager gtmId="GTM-K5FB6RX3" />
      <body className={'font-base antialiased'}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
