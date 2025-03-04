import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { z } from 'zod';
import { supportFacilities } from '@/app/ofunato/data/services';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

// OpenAI API ルート
const openaiRoute = new Hono().basePath('/openai');

openaiRoute.get('/', (c) => {
  return c.json({ message: 'Hello, World!' });
});

app.route('/openai', openaiRoute);

// サービス管理API ルート
const servicesRoute = new Hono().basePath('/services');

// サービスのスキーマ定義
const facilitySchema = z.object({
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

type Facility = z.infer<typeof facilitySchema>;

// サービス一覧の取得
servicesRoute.get('/', (c) => {
  return c.json({ services: supportFacilities });
});

// 特定のサービスの取得
servicesRoute.get('/:id', (c) => {
  const id = c.req.param('id');
  const facility = supportFacilities.find((f) => f.id === id);

  if (!facility) {
    return c.json({ error: 'サービスが見つかりません' }, 404);
  }

  return c.json({ service: facility });
});

// サービスの作成
servicesRoute.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const result = facilitySchema.safeParse(body);

    if (!result.success) {
      return c.json(
        { error: '入力データが不正です', details: result.error.format() },
        400,
      );
    }

    const newFacility = result.data;

    // IDの重複チェック
    const existingFacility = supportFacilities.find(
      (f) => f.id === newFacility.id,
    );
    if (existingFacility) {
      return c.json({ error: '同じIDのサービスが既に存在します' }, 409);
    }

    // TODO: 実際のアプリケーションではデータベースに保存する処理を実装
    // ここではメモリ上のデータを更新する例を示します
    // supportFacilities.push(newFacility);

    return c.json(
      { message: 'サービスが作成されました', service: newFacility },
      201,
    );
  } catch (error) {
    console.error('サービス作成エラー:', error);
    return c.json({ error: 'サービスの作成に失敗しました' }, 500);
  }
});

// サービスの更新
servicesRoute.put('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();

    // 更新対象のサービスが存在するか確認
    const facilityIndex = supportFacilities.findIndex((f) => f.id === id);
    if (facilityIndex === -1) {
      return c.json({ error: '更新対象のサービスが見つかりません' }, 404);
    }

    // バリデーション（IDは変更不可）
    const result = facilitySchema.omit({ id: true }).safeParse(body);
    if (!result.success) {
      return c.json(
        { error: '入力データが不正です', details: result.error.format() },
        400,
      );
    }

    const updatedFacility = {
      ...result.data,
      id, // IDは変更不可
    };

    // TODO: 実際のアプリケーションではデータベースを更新する処理を実装
    // ここではメモリ上のデータを更新する例を示します
    // supportFacilities[facilityIndex] = updatedFacility;

    return c.json({
      message: 'サービスが更新されました',
      service: updatedFacility,
    });
  } catch (error) {
    console.error('サービス更新エラー:', error);
    return c.json({ error: 'サービスの更新に失敗しました' }, 500);
  }
});

// サービスの削除
servicesRoute.delete('/:id', (c) => {
  const id = c.req.param('id');

  // 削除対象のサービスが存在するか確認
  const facilityIndex = supportFacilities.findIndex((f) => f.id === id);
  if (facilityIndex === -1) {
    return c.json({ error: '削除対象のサービスが見つかりません' }, 404);
  }

  // TODO: 実際のアプリケーションではデータベースから削除する処理を実装
  // ここではメモリ上のデータを削除する例を示します
  // supportFacilities.splice(facilityIndex, 1);

  return c.json({ message: 'サービスが削除されました' });
});

app.route('/services', servicesRoute);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
