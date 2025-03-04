'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Divider,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { ArrowBack, Add, Delete } from '@mui/icons-material';
import AdminHeader from '../../components/AdminHeader';
import Link from 'next/link';

export default function NewServicePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    type: '',
    address: '',
    phone: '',
    details: '',
    mapUrl: '',
  });

  const [hours, setHours] = useState<string[]>(['']);
  const [notes, setNotes] = useState<string[]>(['']);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const facilityTypes = [
    '入浴施設',
    '送迎バス',
    '食事提供',
    '宿泊施設',
    '学習施設',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value,
    });

    // エラーをクリア
    if (errors[name as string]) {
      setErrors({
        ...errors,
        [name as string]: '',
      });
    }
  };

  const handleHoursChange = (index: number, value: string) => {
    const newHours = [...hours];
    newHours[index] = value;
    setHours(newHours);
  };

  const handleNotesChange = (index: number, value: string) => {
    const newNotes = [...notes];
    newNotes[index] = value;
    setNotes(newNotes);
  };

  const addHour = () => {
    setHours([...hours, '']);
  };

  const removeHour = (index: number) => {
    const newHours = [...hours];
    newHours.splice(index, 1);
    setHours(newHours.length ? newHours : ['']);
  };

  const addNote = () => {
    setNotes([...notes, '']);
  };

  const removeNote = (index: number) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes.length ? newNotes : ['']);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.id) {
      newErrors.id = 'IDを入力してください';
    } else if (!/^[a-z0-9-]+$/.test(formData.id)) {
      newErrors.id = 'IDは半角英数字とハイフンのみ使用できます';
    }

    if (!formData.name) {
      newErrors.name = '名称を入力してください';
    }

    if (!formData.type) {
      newErrors.type = '種類を選択してください';
    }

    if (!formData.details) {
      newErrors.details = '詳細を入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // フォームデータを整形
    const filteredHours = hours.filter((hour) => hour.trim() !== '');
    const filteredNotes = notes.filter((note) => note.trim() !== '');

    const newFacility = {
      ...formData,
      hours: filteredHours.length > 0 ? filteredHours : undefined,
      notes: filteredNotes.length > 0 ? filteredNotes : undefined,
    };

    console.log('新規施設データ:', newFacility);

    // TODO: データの保存処理を実装
    // 実際のアプリケーションでは、APIを呼び出してデータを保存する

    // 保存後にリスト画面に戻る
    router.push('/admin/services');
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
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="id"
                  label="ID"
                  fullWidth
                  required
                  value={formData.id}
                  onChange={handleChange}
                  error={!!errors.id}
                  helperText={errors.id || '例: bath-1, bus-2 など'}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth required error={!!errors.type}>
                  <InputLabel>種類</InputLabel>
                  <Select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    {facilityTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.type && (
                    <FormHelperText>{errors.type}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="名称"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  name="address"
                  label="住所"
                  fullWidth
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  name="phone"
                  label="電話番号"
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="mapUrl"
                  label="地図URL"
                  fullWidth
                  value={formData.mapUrl}
                  onChange={handleChange}
                  helperText="Google MapsのURLを入力してください"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="details"
                  label="詳細"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  error={!!errors.details}
                  helperText={errors.details}
                />
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">営業時間</Typography>
                  <Button startIcon={<Add />} onClick={addHour}>
                    追加
                  </Button>
                </Box>

                {hours.map((hour, index) => (
                  <Box
                    key={index}
                    sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                  >
                    <TextField
                      fullWidth
                      label={`営業時間 ${index + 1}`}
                      value={hour}
                      onChange={(e) => handleHoursChange(index, e.target.value)}
                      placeholder="例: 9:00 - 17:00, 土日休み"
                      sx={{ mr: 1 }}
                    />
                    <IconButton color="error" onClick={() => removeHour(index)}>
                      <Delete />
                    </IconButton>
                  </Box>
                ))}
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">注意事項</Typography>
                  <Button startIcon={<Add />} onClick={addNote}>
                    追加
                  </Button>
                </Box>

                {notes.map((note, index) => (
                  <Box
                    key={index}
                    sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                  >
                    <TextField
                      fullWidth
                      label={`注意事項 ${index + 1}`}
                      value={note}
                      onChange={(e) => handleNotesChange(index, e.target.value)}
                      sx={{ mr: 1 }}
                    />
                    <IconButton color="error" onClick={() => removeNote(index)}>
                      <Delete />
                    </IconButton>
                  </Box>
                ))}
              </Grid>

              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}
                >
                  <Button
                    variant="outlined"
                    component={Link}
                    href="/admin/services"
                    sx={{ mr: 2 }}
                  >
                    キャンセル
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    保存
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
}
