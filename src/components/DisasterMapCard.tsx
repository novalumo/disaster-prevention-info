export default function DisasterMapCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-4">防災マップ</h2>
      <p className="text-gray-600">ハザードマップや避難経路の確認ができます</p>
      <button
        type="button"
        className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
      >
        マップを見る
      </button>
    </div>
  );
}
