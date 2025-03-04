'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Tabs,
  Tab,
  Box,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { type FacilityFormValues } from '../schema';

export default function ServicesList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');

  const [selectedType, setSelectedType] = useState<string | null>(typeParam);
  const [facilities, setFacilities] = useState<FacilityFormValues[]>([]);
  const [filteredFacilities, setFilteredFacilities] = useState<
    FacilityFormValues[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [facilityToDelete, setFacilityToDelete] = useState<string | null>(null);

  const facilityTypes = [
    '全て',
    '入浴施設',
    '送迎バス',
    '食事提供',
    '宿泊施設',
    '学習施設',
  ];

  // サービスデータの取得
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await fetch('/api/services');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'サービスの取得に失敗しました');
        }

        setFacilities(data.services);
      } catch (error) {
        console.error('データ取得エラー:', error);
        setError(
          error instanceof Error ? error.message : 'データの取得に失敗しました',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  // 選択されたタイプに基づいてフィルタリング
  useEffect(() => {
    if (selectedType && selectedType !== '全て') {
      setFilteredFacilities(
        facilities.filter((facility) => facility.type === selectedType),
      );
    } else {
      setFilteredFacilities(facilities);
    }
  }, [selectedType, facilities]);

  const handleTypeChange = (_: React.SyntheticEvent, newValue: number) => {
    const newType = facilityTypes[newValue];
    setSelectedType(newType === '全て' ? null : newType);
  };

  const getTypeIndex = () => {
    if (!selectedType) return 0;
    const index = facilityTypes.indexOf(selectedType);
    return index === -1 ? 0 : index;
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/services/edit/${id}`);
  };

  const handleDeleteClick = (id: string) => {
    setFacilityToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!facilityToDelete) return;

    try {
      const response = await fetch(`/api/services/${facilityToDelete}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'サービスの削除に失敗しました');
      }

      // 削除成功後、リストから削除
      setFacilities(facilities.filter((f) => f.id !== facilityToDelete));
      setDeleteDialogOpen(false);
      setFacilityToDelete(null);
    } catch (error) {
      console.error('削除エラー:', error);
      setError(
        error instanceof Error ? error.message : '削除中にエラーが発生しました',
      );
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setFacilityToDelete(null);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 3 }}>
        {error}
      </Alert>
    );
  }

  return (
    <>
      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={getTypeIndex()}
          onChange={handleTypeChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {facilityTypes.map((type) => (
            <Tab key={type} label={type} />
          ))}
        </Tabs>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>名称</TableCell>
              <TableCell>種類</TableCell>
              <TableCell>住所</TableCell>
              <TableCell>電話番号</TableCell>
              <TableCell>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFacilities.map((facility) => (
              <TableRow key={facility.id}>
                <TableCell>{facility.id}</TableCell>
                <TableCell>{facility.name}</TableCell>
                <TableCell>
                  <Chip label={facility.type} color="primary" size="small" />
                </TableCell>
                <TableCell>{facility.address || '-'}</TableCell>
                <TableCell>{facility.phone || '-'}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    size="small"
                    onClick={() => handleEdit(facility.id)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => handleDeleteClick(facility.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {filteredFacilities.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  データがありません
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 削除確認ダイアログ */}
      <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>サービスの削除</DialogTitle>
        <DialogContent>
          <DialogContentText>
            このサービスを削除してもよろしいですか？この操作は元に戻せません。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>キャンセル</Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            削除
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
