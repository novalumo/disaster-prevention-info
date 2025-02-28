export default function EmergencySuppliesCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-blue-700 mb-3">
        防災グッズチェックリスト
      </h3>
      <ul className="space-y-2 text-gray-600">
        <li>□ 非常食・飲料水</li>
        <li>□ 懐中電灯・予備電池</li>
        <li>□ 携帯ラジオ</li>
        <li>□ 救急用品</li>
      </ul>
    </div>
  );
}
