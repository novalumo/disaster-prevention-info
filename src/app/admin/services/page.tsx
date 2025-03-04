import { Container, Typography, Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import AdminHeader from '../components/AdminHeader';
import ServicesList from './components/ServicesList';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            サービス管理
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            component={Link}
            href="/admin/services/new"
          >
            新規作成
          </Button>
        </Box>

        <ServicesList />
      </Container>
    </>
  );
}
