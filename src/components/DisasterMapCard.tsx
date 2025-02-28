import InfoCard from './ui/InfoCard';

export default function DisasterMapCard() {
  const handleViewMap = () => {
    // マップを表示する処理
    console.log('マップを表示');
  };

  return (
    <InfoCard
      title="防災マップ"
      content="ハザードマップや避難経路の確認ができます"
      buttonText="マップを見る"
      buttonOnClick={handleViewMap}
    />
  );
}
