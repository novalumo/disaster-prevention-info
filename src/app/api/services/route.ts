import { Hono } from 'hono';
import { facilitySchema } from './schema';

// サービス管理API
const servicesRoute = new Hono<{ Bindings: CloudflareEnv }>();

// サービス一覧の取得
servicesRoute.get('/', async (c) => {
  try {
    const { DB } = c.env;

    // D1からすべての施設を取得
    const { results } = await DB.prepare(
      'SELECT * FROM facilities ORDER BY created_at DESC',
    ).all();

    return c.json(results);
  } catch (error) {
    console.error('サービス一覧取得エラー:', error);
    return c.json({ error: 'サービス一覧の取得に失敗しました' }, 500);
  }
});

// 特定のサービスの取得
servicesRoute.get('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const { DB } = c.env;

    // D1から特定のIDの施設を取得
    const facility = await DB.prepare('SELECT * FROM facilities WHERE id = ?')
      .bind(id)
      .first();

    if (!facility) {
      return c.json({ error: 'サービスが見つかりません' }, 404);
    }

    return c.json(facility);
  } catch (error) {
    console.error('サービス取得エラー:', error);
    return c.json({ error: 'サービスの取得に失敗しました' }, 500);
  }
});

// サービスの作成
servicesRoute.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const { DB } = c.env;

    // 入力データのバリデーション
    const result = facilitySchema.safeParse(body);
    if (!result.success) {
      return c.json(
        { error: '入力データが不正です', details: result.error.format() },
        400,
      );
    }

    const newFacility = result.data;

    // IDの重複チェック
    const existingFacility = await DB.prepare(
      'SELECT id FROM facilities WHERE id = ?',
    )
      .bind(newFacility.id)
      .first();

    if (existingFacility) {
      return c.json({ error: '同じIDのサービスが既に存在します' }, 409);
    }

    // D1にデータを挿入
    const { success } = await DB.prepare(`
      INSERT INTO facilities (
        id, name, type, address, phone, hours, details, notes, map_url,
        capacity, current_users, schedule
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
      .bind(
        newFacility.id,
        newFacility.name,
        newFacility.type,
        newFacility.address || null,
        newFacility.phone || null,
        newFacility.hours ? JSON.stringify(newFacility.hours) : null,
        newFacility.details || null,
        newFacility.notes || null,
        newFacility.mapUrl || null,
        newFacility.capacity || null,
        newFacility.currentUsers || null,
        newFacility.schedule ? JSON.stringify(newFacility.schedule) : null,
      )
      .run();

    if (!success) {
      return c.json({ error: 'サービスの作成に失敗しました' }, 500);
    }

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
    const { DB } = c.env;

    // 更新対象のサービスが存在するか確認
    const existingFacility = await DB.prepare(
      'SELECT id FROM facilities WHERE id = ?',
    )
      .bind(id)
      .first();

    if (!existingFacility) {
      return c.json({ error: '更新対象のサービスが見つかりません' }, 404);
    }

    // 入力データのバリデーション
    const result = facilitySchema.safeParse(body);
    if (!result.success) {
      return c.json(
        { error: '入力データが不正です', details: result.error.format() },
        400,
      );
    }

    const updatedFacility = result.data;

    // D1でデータを更新
    const { success } = await DB.prepare(`
      UPDATE facilities SET
        name = ?,
        type = ?,
        address = ?,
        phone = ?,
        hours = ?,
        details = ?,
        notes = ?,
        map_url = ?,
        capacity = ?,
        current_users = ?,
        schedule = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `)
      .bind(
        updatedFacility.name,
        updatedFacility.type,
        updatedFacility.address || null,
        updatedFacility.phone || null,
        updatedFacility.hours ? JSON.stringify(updatedFacility.hours) : null,
        updatedFacility.details || null,
        updatedFacility.notes || null,
        updatedFacility.mapUrl || null,
        updatedFacility.capacity || null,
        updatedFacility.currentUsers || null,
        updatedFacility.schedule
          ? JSON.stringify(updatedFacility.schedule)
          : null,
        id,
      )
      .run();

    if (!success) {
      return c.json({ error: 'サービスの更新に失敗しました' }, 500);
    }

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
servicesRoute.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const { DB } = c.env;

    // 削除対象のサービスが存在するか確認
    const existingFacility = await DB.prepare(
      'SELECT id FROM facilities WHERE id = ?',
    )
      .bind(id)
      .first();

    if (!existingFacility) {
      return c.json({ error: '削除対象のサービスが見つかりません' }, 404);
    }

    // D1からデータを削除
    const { success } = await DB.prepare('DELETE FROM facilities WHERE id = ?')
      .bind(id)
      .run();

    if (!success) {
      return c.json({ error: 'サービスの削除に失敗しました' }, 500);
    }

    return c.json({ message: 'サービスが削除されました' });
  } catch (error) {
    console.error('サービス削除エラー:', error);
    return c.json({ error: 'サービスの削除に失敗しました' }, 500);
  }
});

export default servicesRoute;
