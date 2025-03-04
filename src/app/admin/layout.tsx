import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '管理画面 - 災害情報ポータル',
  description: '災害情報ポータルの管理画面です',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={inter.className}>
          <main className="min-h-screen bg-gray-100">{children}</main>
        </div>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
