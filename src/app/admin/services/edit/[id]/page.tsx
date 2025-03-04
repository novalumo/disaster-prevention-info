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
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AdminHeader from '../../../components/AdminHeader';
import Link from 'next/link';
import FacilityForm from '../../components/FacilityForm';
import { supportFacilities } from '@/app/ofunato/data/services';
import { type FacilityFormValues } from '../../schema';

export default function EditServicePage({
  params,
}: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [facility, setFacility] = useState<FacilityFormValues | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 施設データの取得
  useEffect(() => {
    const foundFacility = supportFacilities.find((f) => f.id === id);

    if (foundFacility) {
      setFacility({
        id: foundFacility.id,
        name: foundFacility.name,
        type: foundFacility.type,
        address: foundFacility.address || '',
        phone: foundFacility.phone || '',
        details: foundFacility.details,
        mapUrl: foundFacility.mapUrl || '',
        hours: foundFacility.hours || [''],
        notes: foundFacility.notes || [''],
      });
    } else {
      // 施設が見つからない場合はリストページにリダイレクト
      router.push('/admin/services');
    }

    setLoading(false);
  }, [id, router]);

  const handleSubmit = async (data: FacilityFormValues) => {
    setIsSubmitting(true);

    try {
      console.log('更新施設データ:', data);

      // TODO: データの更新処理を実装
      // 実際のアプリケーションでは、APIを呼び出してデータを更新する

      // 更新後にリスト画面に戻る
      router.push('/admin/services');
    } catch (error) {
      console.error('更新エラー:', error);
      alert('更新中にエラーが発生しました。');
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
