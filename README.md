# 災害情報提供システム

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

災害時の重要な情報を集約し、市民に分かりやすく提供するためのWebアプリケーションです。

## 主な機能

- 🏥 避難所情報の提供
  - 位置情報付きの避難所マップ
  - 収容状況のリアルタイム表示
  - 各避難所の詳細情報

- 🍴 支援サービス情報
  - 食事提供
  - 入浴施設
  - 送迎バス

- 🚨 緊急情報
  - 災害関連の最新情報
  - 避難指示・勧告
  - 緊急連絡先

## 開発環境のセットアップ

### 必要条件

- Node.js 18.0.0以上
- bun 1.0.0以上

### 環境変数の設定

1. `example.env`を`.env`にコピー
2. 必要な環境変数を設定
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your_map_id
   ```

### 開発サーバーの起動

```bash
# 依存関係のインストール
bun install

# 開発サーバーの起動
bun dev
```

ブラウザで http://localhost:3000 を開いて確認できます。

## コントリビューション

プロジェクトへの貢献を歓迎します！以下の方法で参加できます：

1. Issueの作成
   - バグ報告
   - 新機能の提案
   - ドキュメントの改善提案

2. Pull Requestの作成
   - [CONTRIBUTING.md](./CONTRIBUTING.md)をご確認ください
   - コーディング規約に従ってください
   - テストを追加してください

## ライセンス

このプロジェクトは[MITライセンス](./LICENSE)の下で公開されています。

## 技術スタック

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- [@vis.gl/react-google-maps](https://github.com/visgl/react-google-maps) - 地図表示
- [Biome](https://biomejs.dev/) - リンター/フォーマッター
