'use client';

import { useState } from 'react';
import { Alert, AlertTitle, Link as MuiLink, Box } from '@mui/material';

export default function ContactAlert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert
      severity="error"
      sx={{
        mx: 'auto',
        maxWidth: 'lg',
        '& .MuiAlert-message': {
          width: '100%',
        },
      }}
      onClose={() => setIsVisible(false)}
    >
      <AlertTitle>情報の正確性について</AlertTitle>
      <Box sx={{ fontSize: '0.875rem' }}>
        当サイトに掲載されている情報は、最終更新時点で正確なものであることを確認していますが、
        情報の誤りを見つけられた場合や更新の提案は
        <MuiLink
          href="https://github.com/novalumo/disaster-prevention-info/issues"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mx: 1,
            fontWeight: 500,
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          GitHub Issues (PR歓迎)
        </MuiLink>
        または
        <MuiLink
          href="mailto:contact@novalumo.com"
          sx={{
            mx: 1,
            fontWeight: 500,
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          contact@novalumo.com
        </MuiLink>
        までご連絡ください。
      </Box>
    </Alert>
  );
}
