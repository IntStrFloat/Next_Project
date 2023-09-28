import { Htag, Button, Paragraph, Tag, Rating } from './_components';
import { RatingHandler } from './_components/Rating/RatingHandler';
import { getMenu } from '@/api/api';
import { getProduct } from '@/api/product';

export default async function Home() {
  const product = await getProduct('Photoshop');
  const menu = await getMenu(0);
  return (
    <main>
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Привет</Htag>
      <Htag tag="h3">Привет</Htag>
      <Button appearance="primary">Я пидорас</Button>

      <Button appearance="ghost" arrow="right">
        Я пидорас
      </Button>
      <Paragraph size="s">Привет, меня зовут Дима</Paragraph>
      <Paragraph size="m">Привет, меня зовут Дима</Paragraph>
      <Paragraph size="l">Привет, меня зовут Дима</Paragraph>
      <Tag size="m" color="red">
        hh.ru
      </Tag>
      <Tag size="m" color="green">
        -10 000 $
      </Tag>
      <RatingHandler rating={2} isEditable />
      <div>{JSON.stringify(product[0].categories)}</div>
    </main>
  );
}
