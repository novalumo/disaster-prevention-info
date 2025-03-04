import { z } from 'zod';

export const facilityTypes = [
  '入浴施設',
  '送迎バス',
  '食事提供',
  '宿泊施設',
  '学習施設',
] as const;

export const facilitySchema = z.object({
  id: z
    .string()
    .min(1, { message: 'IDを入力してください' })
    .regex(/^[a-z0-9-]+$/, {
      message: 'IDは半角英数字とハイフンのみ使用できます',
    }),
  name: z.string().min(1, { message: '名称を入力してください' }),
  type: z.enum(facilityTypes, {
    errorMap: () => ({ message: '種類を選択してください' }),
  }),
  address: z.string().optional(),
  phone: z.string().optional(),
  details: z.string().min(1, { message: '詳細を入力してください' }),
  mapUrl: z.string().optional(),
  hours: z.array(z.string()).optional(),
  notes: z.array(z.string()).optional(),
});

export type FacilityFormValues = z.infer<typeof facilitySchema>;

export const defaultValues: FacilityFormValues = {
  id: '',
  name: '',
  type: '入浴施設',
  address: '',
  phone: '',
  details: '',
  mapUrl: '',
  hours: [''],
  notes: [''],
};
