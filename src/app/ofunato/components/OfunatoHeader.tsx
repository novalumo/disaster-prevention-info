'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
} from '@mui/material';
import { format } from 'date-fns';
import {
  Menu as MenuIcon,
  Campaign,
  LocationOn,
  MonetizationOn,
  Home,
  Info,
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';

const menuItems = [
  {
    id: 'home',
    label: 'ホーム',
    href: '/ofunato',
    icon: <Home />,
  },
  {
    id: 'emergency',
    label: '避難情報',
    href: '/ofunato/emergency',
    icon: <Campaign />,
  },
  {
    id: 'shelter',
    label: '避難所',
    href: '/ofunato/shelter',
    icon: <LocationOn />,
  },
  {
    id: 'support',
    label: '支援・募金',
    href: '/ofunato/support',
    icon: <MonetizationOn />,
  },
  {
    id: 'about',
    label: '情報の正確性について',
    href: '/ofunato/about',
    icon: <Info />,
  },
];

type OfunatoHeaderProps = {
  lastUpdated?: string;
};

export default function OfunatoHeader({ lastUpdated }: OfunatoHeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#1d4ed8',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            py: 2,
            gap: 2,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="メニューを開く"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="h1"
            fontWeight="bold"
            sx={{ flexGrow: 1 }}
          >
            大船渡市の防災情報
          </Typography>

          {lastUpdated && (
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                px: 2,
                py: 1,
                borderRadius: 1,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Typography variant="body2" color="white">
                最終更新:{' '}
                <strong>{format(lastUpdated, 'yyyy年MM月dd日 HH:mm')}</strong>
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box sx={{ py: 2, px: 2 }}>
            <Typography variant="h6" component="div" fontWeight="bold">
              大船渡市の防災情報
            </Typography>
          </Box>
          <Divider />
          <List sx={{ flex: 1 }}>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigation(item.href)}
                  selected={pathname === item.href}
                >
                  <ListItemIcon
                    sx={{
                      color: pathname === item.href ? '#1d4ed8' : 'inherit',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              &copy; 2025{' '}
              <Link
                href="https://www.novalumo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:text-blue-600"
              >
                Novalumo Japan G.K.
              </Link>
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
