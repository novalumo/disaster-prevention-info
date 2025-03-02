'use client';

import { usePathname, useRouter } from 'next/navigation';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
  Home,
  Campaign,
  LocationOn,
  // Handshake,
  MonetizationOn,
} from '@mui/icons-material';

export default function OfunatoBottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navigationItems = [
    { label: 'ホーム', value: '/ofunato', icon: <Home /> },
    {
      label: '避難情報',
      value: '/ofunato/emergency',
      icon: <Campaign />,
    },
    {
      label: '避難所',
      value: '/ofunato/shelter',
      icon: <LocationOn />,
    },
    // {
    //   label: 'ボランティア',
    //   value: '/ofunato/volunteer',
    //   icon: <Handshake />,
    // },
    {
      label: '支援・募金',
      value: '/ofunato/support',
      icon: <MonetizationOn />,
    },
  ];

  const currentValue = navigationItems.find(
    (item) => pathname === item.value || pathname.startsWith(`${item.value}/`),
  )?.value;

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50 }}
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
