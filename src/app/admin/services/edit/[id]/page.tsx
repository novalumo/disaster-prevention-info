'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Divider,
  CircularProgress,
  Alert,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AdminHeader from '../../../components/AdminHeader';
import Link from 'next/link';
import FacilityForm from '../../components/FacilityForm';
import { type FacilityFormValues } from '../../schema';

export default function EditServicePage({
  params,
}: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [facility, setFacility] = useState<FacilityFormValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 施設データの取得
  useEffect(() => {
    const fetchFacility = async () => {
      try {
        const response = await fetch(`/api/services/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'サービスの取得に失敗しました');
        }

        setFacility(data.service);
      } catch (error) {
        console.error('データ取得エラー:', error);
        setError(
          error instanceof Error ? error.message : 'データの取得に失敗しました',
        );
        // エラー発生時は3秒後にリストページにリダイレクト
        setTimeout(() => {
          router.push('/admin/services');
        }, 3000);
      } finally {
        setLoading(false);
      }
    };

    fetchFacility();
  }, [id, router]);

  const handleSubmit = async (data: FacilityFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`/api/services/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'サービスの更新に失敗しました');
      }

      console.log('サービスが更新されました:', result.service);

      // 更新後にリスト画面に戻る
      router.push('/admin/services');
    } catch (error) {
      console.error('更新エラー:', error);
      setError(
        error instanceof Error ? error.message : '更新中にエラーが発生しました',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <>
        <AdminHeader />
        <Container
          maxWidth="lg"
          sx={{
            mt: 4,
            mb: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
          }}
        >
          <CircularProgress />
        </Container>
      </>
    );
  }

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
            サービス編集: {facility?.name}
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Paper sx={{ p: 4 }}>
          {facility && (
            <FacilityForm
              defaultValues={facility}
              onSubmit={handleSubmit}
              isEditMode={true}
            />
          )}

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
              disabled={isSubmitting || !facility}
              form="facility-form"
            >
              更新
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
