#!/usr/bin/env bun

import { supportFacilities } from '../src/app/ofunato/data/services';
import type { D1Database } from '@cloudflare/workers-types';

interface ExtendedFacility {
  id: string;
  name: string;
  type: string;
  address?: string;
  phone?: string;
  hours?: string[];
  details: string;
  notes?: string[];
  mapUrl?: string;
  capacity?: number;
  currentUsers?: number;
  schedule?: string[];
}

// D1データベースに接続
async function migrateData() {
  try {
    console.log('データ移行を開始します...');

    // D1データベースに接続
    const db = process.env.DB_BINDING as unknown as D1Database;
    if (!db) {
      throw new Error('D1データベース接続が見つかりません');
    }

    // 既存のデータをループして挿入
    for (const facility of supportFacilities) {
      console.log(`施設を移行中: ${facility.id} - ${facility.name}`);
      const extendedFacility = facility as ExtendedFacility;

      try {
        // D1にデータを挿入
        await db
          .prepare(`
          INSERT INTO facilities (
            id, name, type, address, phone, hours, details, notes, map_url,
            capacity, current_users, schedule
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `)
          .bind(
            extendedFacility.id,
            extendedFacility.name,
            extendedFacility.type,
            extendedFacility.address || null,
            extendedFacility.phone || null,
            extendedFacility.hours
              ? JSON.stringify(extendedFacility.hours)
              : null,
            extendedFacility.details || null,
            extendedFacility.notes || null,
            extendedFacility.mapUrl || null,
            extendedFacility.capacity || null,
            extendedFacility.currentUsers || null,
            extendedFacility.schedule
              ? JSON.stringify(extendedFacility.schedule)
              : null,
          )
          .run();

        console.log(`✅ 施設を移行しました: ${facility.id}`);
      } catch (error) {
        console.error(`❌ 施設の移行に失敗しました: ${facility.id}`, error);
      }
    }

    console.log('データ移行が完了しました');
  } catch (error) {
    console.error('データ移行中にエラーが発生しました:', error);
    process.exit(1);
  }
}

// スクリプトを実行
migrateData();
