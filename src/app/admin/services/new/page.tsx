'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Divider,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AdminHeader from '../../components/AdminHeader';
import Link from 'next/link';
import FacilityForm from '../components/FacilityForm';
import { type FacilityFormValues } from '../schema';

export default function NewServicePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: FacilityFormValues) => {
    setIsSubmitting(true);

    try {
      console.log('新規施設データ:', data);

      // TODO: データの保存処理を実装
      // 実際のアプリケーションでは、APIを呼び出してデータを保存する

      // 保存後にリスト画面に戻る
      router.push('/admin/services');
    } catch (error) {
      console.error('保存エラー:', error);
      alert('保存中にエラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Button
            component={Link}
            href="/admin/services"
            startIcon={<ArrowBack />}
            sx={{ mr: 2 }}
          >
            戻る
          </Button>
          <Typography variant="h4" component="h1">
            サービス新規作成
          </Typography>
        </Box>

        <Paper sx={{ p: 4 }}>
          <FacilityForm onSubmit={handleSubmit} />

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button
              variant="outlined"
              component={Link}
              href="/admin/services"
              sx={{ mr: 2 }}
            >
              キャンセル
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              form="facility-form"
            >
              保存
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
