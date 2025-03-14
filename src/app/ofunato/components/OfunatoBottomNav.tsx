'use client';

import { usePathname, useRouter } from 'next/navigation';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
  Home,
  NotificationImportant,
  LocalHospital,
  Favorite,
} from '@mui/icons-material';

export default function OfunatoBottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navigationItems = [
    { label: 'ホーム', value: '/ofunato', icon: <Home /> },
    {
      label: '避難関連',
      value: '/ofunato/emergency',
      icon: <NotificationImportant />,
    },
    {
      label: '支援施設',
      value: '/ofunato/services',
      icon: <LocalHospital />,
    },
    {
      label: '支援する',
      value: '/ofunato/support',
      icon: <Favorite />,
    },
  ];

  // 現在のパスに最も一致するナビゲーション項目を見つける
  const currentValue =
    navigationItems.find((item) => {
      // 完全一致の場合
      if (pathname === item.value) return true;
      // /ofunato の場合は完全一致のみ
      if (item.value === '/ofunato') return pathname === '/ofunato';
      // その他のページの場合はパスの先頭一致で判定
      return pathname.startsWith(item.value);
    })?.value || '/ofunato';

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingBottom: 'env(safe-area-inset-bottom, 20px)',
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentValue}
        onChange={(_, newValue) => {
          router.push(newValue);
        }}
      >
        {navigationItems.map((item) => (
          <BottomNavigationAction
            key={item.value}
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
