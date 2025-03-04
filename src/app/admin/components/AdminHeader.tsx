'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Dashboard, ExitToApp } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminHeader() {
  const pathname = usePathname();

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/admin" className="flex items-center gap-2 text-white">
            <Dashboard />
            <span>災害情報ポータル管理画面</span>
          </Link>
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            href="/admin/services"
            variant={pathname.includes('/admin/services') ? 'outlined' : 'text'}
          >
            サービス管理
          </Button>

          <Button
            color="inherit"
            component={Link}
            href="/"
            startIcon={<ExitToApp />}
          >
            サイトへ戻る
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
