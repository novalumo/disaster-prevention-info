export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">地域防災情報</h1>
          <p className="mt-2">あなたの地域の防災情報をお届けします</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-700 mb-4">緊急情報</h2>
            <p className="text-gray-600">現在、緊急の警報はありません</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-700 mb-4">避難所情報</h2>
            <ul className="space-y-2 text-gray-600">
              <li>○○小学校体育館</li>
              <li>○○市民センター</li>
              <li>○○公民館</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-700 mb-4">防災マップ</h2>
            <p className="text-gray-600">
              ハザードマップや避難経路の確認ができます
            </p>
            <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
              マップを見る
            </button>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">防災情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-3">防災グッズチェックリスト</h3>
              <ul className="space-y-2 text-gray-600">
                <li>□ 非常食・飲料水</li>
                <li>□ 懐中電灯・予備電池</li>
                <li>□ 携帯ラジオ</li>
                <li>□ 救急用品</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-3">最新のお知らせ</h3>
              <ul className="space-y-2 text-gray-600">
                <li>2024/02/26 防災訓練のお知らせ</li>
                <li>2024/02/25 ハザードマップ更新</li>
                <li>2024/02/24 避難所情報更新</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 地域防災情報サイト</p>
          <p className="mt-2">緊急時は119番（消防・救急）または110番（警察）にご連絡ください。</p>
        </div>
      </footer>
    </div>
  );
}
