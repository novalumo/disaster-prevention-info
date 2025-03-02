import LocalHeader from '@/components/LocalHeader';
import Footer from '@/components/Footer';
import ContactAlert from '@/components/ContactAlert';
import { getLastUpdated } from '@/lib/time';
import type { Metadata } from 'next';
import OfunatoBottomNav from './components/OfunatoBottomNav';
import { Paper, Grid, Typography, Box } from '@mui/material';
import Link from 'next/link';
import {
  Campaign,
  LocationOn,
  // Handshake,
  MonetizationOn,
} from '@mui/icons-material';

export const metadata: Metadata = {
  title: '大船渡市 山林火災情報',
  description: '大船渡市の山林火災に関する情報をまとめています。',
  openGraph: {
    title: '大船渡市 山林火災情報',
    description: '大船渡市の山林火災に関する情報をまとめています。',
  },
};

const menuItems = [
  {
    id: 'emergency',
    label: '避難情報',
    description: '避難指示・勧告などの最新情報を確認できます',
    href: '/ofunato/emergency',
    icon: <Campaign sx={{ fontSize: 40 }} />,
    color: '#ef4444',
  },
  {
    id: 'shelter',
    label: '避難所',
    description: '避難所の場所と収容状況を確認できます',
    href: '/ofunato/shelter',
    icon: <LocationOn sx={{ fontSize: 40 }} />,
    color: '#3b82f6',
  },
  // {
  //   id: 'volunteer',
  //   label: 'ボランティア',
  //   description: 'ボランティア募集に関する情報を確認できます',
  //   href: '/ofunato/volunteer',
  //   icon: <Handshake sx={{ fontSize: 40 }} />,
  //   color: '#22c55e',
  // },
  {
    id: 'support',
    label: '支援・募金',
    description: '被災地域への支援方法を確認できます',
    href: '/ofunato/support',
    icon: <MonetizationOn sx={{ fontSize: 40 }} />,
    color: '#f59e0b',
  },
];

export default function OfunatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocalHeader
        areaName="大船渡市"
        description="大船渡市の山林火災に関する情報をまとめています。"
        lastUpdated={getLastUpdated()}
      />
      <div className="container mx-auto px-4 py-4">
        <ContactAlert />
      </div>
      <main className="container mx-auto px-4 py-8 pb-20">
        <Grid container spacing={3}>
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <Link href={item.href} className="block h-full">
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.1)',
                      borderColor: item.color,
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
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <div>
                      <Typography
                        variant="h6"
                        component="h2"
                        fontWeight="bold"
                        gutterBottom
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
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
      </main>
      <Footer />
      <OfunatoBottomNav />
    </div>
  );
}
