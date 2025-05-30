import type { Metadata, Viewport } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Noto_Sans_JP } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';

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
  icons: {
    icon: '/images/favicon/icon.png',
    shortcut: '/images/favicon/icon.png',
    apple: '/images/favicon/icon.png',
    other: {
      rel: 'icon',
      url: '/images/favicon/icon.png',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#1d4ed8',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} scroll-smooth`}>
      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''}
      />
      <body className={'font-base antialiased'}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
