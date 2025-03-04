'use client';

import { useEffect } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Divider,
  Box,
  Typography,
  Button,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import {
  facilitySchema,
  facilityTypes,
  type FacilityFormValues,
} from '../schema';

type FacilityFormProps = {
  defaultValues?: Partial<FacilityFormValues>;
  onSubmit: (data: FacilityFormValues) => void;
  isEditMode?: boolean;
};

export default function FacilityForm({
  defaultValues,
  onSubmit,
  isEditMode = false,
}: FacilityFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FacilityFormValues>({
    resolver: zodResolver(facilitySchema),
    defaultValues: {
      id: '',
      name: '',
      type: '入浴施設',
      address: '',
      phone: '',
      details: '',
      mapUrl: '',
      hours: [''],
      notes: [''],
      ...defaultValues,
    },
  });

  const {
    fields: hoursFields,
    append: appendHour,
    remove: removeHour,
  } = useFieldArray({
    control,
    name: 'hours',
  });

  const {
    fields: notesFields,
    append: appendNote,
    remove: removeNote,
  } = useFieldArray({
    control,
    name: 'notes',
  });

  // 編集モードの場合、初期値をセット
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const handleFormSubmit = (data: FacilityFormValues) => {
    // 空の配列項目を削除
    const filteredData = {
      ...data,
      hours: data.hours?.filter((hour) => hour.trim() !== '') || [],
      notes: data.notes?.filter((note) => note.trim() !== '') || [],
    };

    onSubmit(filteredData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} id="facility-form">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Controller
            name="id"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="ID"
                fullWidth
                required
                disabled={isEditMode}
                error={!!errors.id}
                helperText={errors.id?.message || '例: bath-1, bus-2 など'}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth required error={!!errors.type}>
                <InputLabel>種類</InputLabel>
                <Select {...field}>
                  {facilityTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
                {errors.type && (
                  <FormHelperText>{errors.type.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="名称"
                fullWidth
                required
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="住所" fullWidth />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="電話番号" fullWidth />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="mapUrl"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="地図URL"
                fullWidth
                helperText="Google MapsのURLを入力してください"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="details"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="詳細"
                fullWidth
                required
                multiline
                rows={4}
                error={!!errors.details}
                helperText={errors.details?.message}
              />
            )}
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
            <Button startIcon={<Add />} onClick={() => appendHour('')}>
              追加
            </Button>
          </Box>

          {hoursFields.map((field, index) => (
            <Box
              key={field.id}
              sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
            >
              <Controller
                name={`hours.${index}`}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={`営業時間 ${index + 1}`}
                    placeholder="例: 9:00 - 17:00, 土日休み"
                    sx={{ mr: 1 }}
                  />
                )}
              />
              <IconButton
                color="error"
                onClick={() => removeHour(index)}
                disabled={hoursFields.length === 1}
              >
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
            <Button startIcon={<Add />} onClick={() => appendNote('')}>
              追加
            </Button>
          </Box>

          {notesFields.map((field, index) => (
            <Box
              key={field.id}
              sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
            >
              <Controller
                name={`notes.${index}`}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label={`注意事項 ${index + 1}`}
                    sx={{ mr: 1 }}
                  />
                )}
              />
              <IconButton
                color="error"
                onClick={() => removeNote(index)}
                disabled={notesFields.length === 1}
              >
                <Delete />
              </IconButton>
            </Box>
          ))}
        </Grid>
      </Grid>
    </form>
  );
}
