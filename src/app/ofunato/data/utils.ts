import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { SupportFacility } from './services';

/**
 * マークダウンファイルからサービス情報を読み込む
 */
export function getServiceFromMd(filePath: string): SupportFacility {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // 必須フィールドの型チェック
  if (!data.id || !data.name || !data.type) {
    throw new Error(`必須フィールドが不足しています: ${filePath}`);
  }

  // 配列フィールドの処理
  const arrayFields = ['address', 'phone', 'hours', 'notes'] as const;
  for (const field of arrayFields) {
    if (data[field] && !Array.isArray(data[field])) {
      data[field] = [data[field]];
    }
  }

  // スケジュールの処理
  if (data.schedule && !Array.isArray(data.schedule)) {
    data.schedule = [data.schedule];
  }

  // 詳細情報をマークダウンの本文から取得
  const details = content.trim().split('\n').filter(Boolean);

  return {
    id: data.id,
    name: data.name,
    type: data.type,
    address: data.address || [],
    phone: data.phone || [],
    hours: data.hours || [],
    details: details,
    notes: data.notes || [],
    mapUrl: data.mapUrl,
    capacity: data.capacity,
    currentUsers: data.currentUsers,
    schedule: data.schedule,
  };
}

/**
 * 指定されたディレクトリ内のすべてのマークダウンファイルからサービス情報を読み込む
 */
export function getAllServicesFromMd(directory: string): SupportFacility[] {
  const servicesDir = path.join(process.cwd(), directory);
  try {
    const files = fs.readdirSync(servicesDir);
    const mdFiles = files.filter((file) => file.endsWith('.md'));

    return mdFiles.map((file) => {
      const filePath = path.join(servicesDir, file);
      return getServiceFromMd(filePath);
    });
  } catch (e) {
    console.log(`ディレクトリの読み込みに失敗しました: ${directory}`);
    console.log(e);
    return [];
  }
}
