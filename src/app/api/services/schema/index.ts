import { z } from 'zod';

// サービスのスキーマ定義
export const facilitySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  type: z.enum(['入浴施設', '送迎バス', '食事提供', '宿泊施設', '学習施設']),
  address: z.string().optional(),
  phone: z.string().optional(),
  details: z.string().min(1),
  mapUrl: z.string().optional(),
  hours: z.array(z.string()).optional(),
  notes: z.array(z.string()).optional(),
});

export type Facility = z.infer<typeof facilitySchema>;
