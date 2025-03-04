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
  Alert,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AdminHeader from '../../components/AdminHeader';
import Link from 'next/link';
import FacilityForm from '../components/FacilityForm';
import { type FacilityFormValues } from '../schema';

export default function NewServicePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: FacilityFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'サービスの作成に失敗しました');
      }

      console.log('サービスが作成されました:', result.service);

      // 保存後にリスト画面に戻る
      router.push('/admin/services');
    } catch (error) {
      console.error('保存エラー:', error);
      setError(
        error instanceof Error ? error.message : '保存中にエラーが発生しました',
      );
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

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

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
