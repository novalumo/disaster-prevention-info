import React from 'react';
import { Box, Container } from '@mui/material';
import Footer from '@/components/Footer';
import ContactAlert from '@/components/ContactAlert';
import { Paper, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import {
  NotificationImportant,
  LocalHospital,
  Favorite,
} from '@mui/icons-material';

const menuItems = [
  {
    id: 'emergency',
    label: '避難関連',
    description: '避難指示・勧告や避難所の最新情報を確認できます',
    href: '/ofunato/emergency',
    icon: <NotificationImportant sx={{ fontSize: 40 }} />,
    color: '#ef4444',
  },
  {
    id: 'services',
    label: '支援施設',
    description: '入浴施設、送迎バス、食事提供などの支援施設を確認できます',
    href: '/ofunato/services',
    icon: <LocalHospital sx={{ fontSize: 40 }} />,
    color: '#10b981',
  },
  {
    id: 'support',
    label: '支援する',
    description: '被災地域への支援方法やボランティア情報を確認できます',
    href: '/ofunato/support',
    icon: <Favorite sx={{ fontSize: 40 }} />,
    color: '#f59e0b',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={3}>
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Link href={item.href} className="block h-full">
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.1)',
                      borderColor: item.color,
                      bgcolor: `${item.color}03`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 96,
                        height: 96,
                        borderRadius: '50%',
                        backgroundColor: `${item.color}10`,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          backgroundColor: `${item.color}15`,
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <div>
                      <Typography
                        variant="h5"
                        component="h2"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: 'text.primary' }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {item.description}
                      </Typography>
                    </div>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
