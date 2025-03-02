'use client';

import { useState, useEffect } from 'react';
import { Alert, AlertTitle, Box, Button } from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';
import Link from 'next/link';

const STORAGE_KEY = 'contact-alert-hidden';

export default function ContactAlert() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // コンポーネントマウント時にローカルストレージから状態を読み込む
    const storedState = localStorage.getItem(STORAGE_KEY);
    if (storedState === 'true') {
      setIsVisible(false);
    }
    setIsMounted(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // ローカルストレージに状態を保存
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  // マウントされるまでは何も表示しない
  if (!isMounted) return null;
  if (!isVisible) return null;

  return (
    <Alert
      severity="info"
      sx={{
        mx: 'auto',
        maxWidth: 'lg',
        '& .MuiAlert-message': {
          width: '100%',
        },
      }}
      onClose={handleClose}
    >
      <AlertTitle>情報の正確性について</AlertTitle>
      <Box sx={{ fontSize: '0.875rem', mb: 2 }}>
        当サイトに掲載されている情報は、最終更新時点で正確なものであることを確認していますが、
        状況は刻々と変化している可能性があります。
      </Box>
      <Link href="/ofunato/about" style={{ textDecoration: 'none' }}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<InfoIcon />}
          sx={{ mt: 1 }}
        >
          詳しく見る
        </Button>
      </Link>
    </Alert>
  );
}
