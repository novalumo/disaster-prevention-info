'use client';

import ShelterMap from './ShelterMap';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import OfunatoBottomNav from '../components/OfunatoBottomNav';

export default function ShelterMapPage() {
  return (
    <div className="relative">
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <Toolbar variant="dense">
          <Link href="/ofunato">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="戻る"
              sx={{ mr: 2 }}
            >
              <ArrowBack />
            </IconButton>
          </Link>
          <Typography variant="subtitle1" component="h1" fontWeight="bold">
            避難所マップ
          </Typography>
        </Toolbar>
      </AppBar>
      <ShelterMap />
      <OfunatoBottomNav />
    </div>
  );
}
