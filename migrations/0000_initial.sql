-- 施設テーブルの作成
CREATE TABLE facilities (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  hours TEXT,
  details TEXT,
  notes TEXT,
  map_url TEXT,
  capacity INTEGER,
  current_users INTEGER,
  schedule TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- インデックスの作成
CREATE INDEX idx_facilities_type ON facilities(type);
