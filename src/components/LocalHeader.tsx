export default function LocalHeader({
  areaName,
  description,
}: { areaName: string; description: string }) {
  return (
    <header className="bg-blue-700 text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">{areaName}の防災情報</h1>
        <p className="mt-2">{description}</p>
      </div>
    </header>
  );
}
