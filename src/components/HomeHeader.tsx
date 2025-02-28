export default function HomeHeader() {
  return (
    <header className="bg-blue-700 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">地域防災情報まとめサイト</h1>
        <p className="text-xl max-w-2xl mx-auto">
          お住まいの地域の防災情報を確認できます。地域を選択して、避難所情報や募金先などの重要な情報をご確認ください。
        </p>
      </div>
    </header>
  );
}
