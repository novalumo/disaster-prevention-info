export default function NewsCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-blue-700 mb-3">最新のお知らせ</h3>
      <ul className="space-y-2 text-gray-600">
        <li>2024/02/26 防災訓練のお知らせ</li>
        <li>2024/02/25 ハザードマップ更新</li>
        <li>2024/02/24 避難所情報更新</li>
      </ul>
    </div>
  );
}
