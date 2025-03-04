import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import AdminHeader from './components/AdminHeader';
import {
  Business,
  School,
  DirectionsBus,
  Bathtub,
  Restaurant,
  Hotel,
} from '@mui/icons-material';
import Link from 'next/link';

export default function AdminPage() {
  const menuItems = [
    {
      id: 'services',
      title: 'サービス管理',
      description: '避難者向けサービス情報の管理',
      icon: <Business sx={{ fontSize: 40 }} />,
      href: '/admin/services',
    },
    {
      id: 'bath',
      title: '入浴施設',
      description: '入浴施設情報の管理',
      icon: <Bathtub sx={{ fontSize: 40 }} />,
      href: '/admin/services?type=入浴施設',
    },
    {
      id: 'bus',
      title: '送迎バス',
      description: '送迎バス情報の管理',
      icon: <DirectionsBus sx={{ fontSize: 40 }} />,
      href: '/admin/services?type=送迎バス',
    },
    {
      id: 'meal',
      title: '食事提供',
      description: '食事提供情報の管理',
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      href: '/admin/services?type=食事提供',
    },
    {
      id: 'accommodation',
      title: '宿泊施設',
      description: '宿泊施設情報の管理',
      icon: <Hotel sx={{ fontSize: 40 }} />,
      href: '/admin/services?type=宿泊施設',
    },
    {
      id: 'study',
      title: '学習施設',
      description: '学習施設情報の管理',
      icon: <School sx={{ fontSize: 40 }} />,
      href: '/admin/services?type=学習施設',
    },
  ];

  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ mt: 4, mb: 4 }}
        >
          管理画面
        </Typography>

        <Grid container spacing={3}>
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Link href={item.href} style={{ textDecoration: 'none' }}>
                <Paper
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 200,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      gap: 2,
                    }}
                  >
                    {item.icon}
                    <Typography variant="h6" component="h2" align="center">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
