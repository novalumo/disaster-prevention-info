'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { supportFacilities } from '@/app/ofunato/data/services';

export default function ServicesList() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');

  const [selectedType, setSelectedType] = useState<string | null>(typeParam);
  const [filteredFacilities, setFilteredFacilities] =
    useState(supportFacilities);

  const facilityTypes = [
    '全て',
    '入浴施設',
    '送迎バス',
    '食事提供',
    '宿泊施設',
    '学習施設',
  ];

  useEffect(() => {
    if (selectedType && selectedType !== '全て') {
      setFilteredFacilities(
        supportFacilities.filter((facility) => facility.type === selectedType),
      );
    } else {
      setFilteredFacilities(supportFacilities);
    }
  }, [selectedType]);

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
    console.log('Edit facility with ID:', id);
    // 編集ページへ遷移する処理を実装
    window.location.href = `/admin/services/edit/${id}`;
  };

  const handleDelete = (id: string) => {
    console.log('Delete facility with ID:', id);
    // 削除確認ダイアログを表示する処理を実装
    if (confirm('このサービスを削除してもよろしいですか？')) {
      // TODO: 削除処理を実装
      console.log('削除処理を実行');
    }
  };

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
                    onClick={() => handleDelete(facility.id)}
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
    </>
  );
}
