import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import List, { ListItem } from '@/components/ui/List';

export default function ShelterInfoCard() {
  const shelterList = [
    '介護老人福祉施設「ひまわり」',
    '特別養護老人ホーム　成仁ハウス百年の里',
    '大船渡中学校（屋内体育館）',
    '猪川小学校（屋内体育館）',
    '介護老人保健施設「気仙苑」',
    '岩手県立福祉の里センター',
    'さんりくの園',
    'リアスホール',
    '大船渡第一中学校（屋内体育館）',
    '三陸公民館',
    '越喜来小学校（屋内体育館）',
  ];

  // 大船渡町字山馬越１９７
  // 大船渡市立根町字宮田９－１
  // 岩手県大船渡市大船渡町字永沢94番地1
  // 岩手県大船渡市猪川町字轆轤石23番地
  // 大船渡市大船渡町字山馬越188
  // 大船渡市立根町字田ノ上30-20
  // 大船渡市三陸町越喜来字所通91
  // 岩手県大船渡市盛町字下舘下18番地1
  // 岩手県大船渡市立根町字宮田86番地
  // 大船渡市三陸町越喜来字前田36－1
  // 岩手県大船渡市三陸町越喜来字小出24-4
  return (
    <Card>
      <Heading as="h2" color="primary" className="mb-4">
        避難所情報
      </Heading>
      <List className="mb-4">
        {shelterList.map((shelter) => (
          <ListItem key={`shelter-${shelter}`}>{shelter}</ListItem>
        ))}
      </List>
    </Card>
  );
}
