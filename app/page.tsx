import { getMenu } from '@/api/api';
import { getProduct } from '@/api/product';

export default async function Home() {
  const product = await getProduct('Photoshop');
  const menu = await getMenu(0);
  return (
    <main>
      <div>{JSON.stringify(product[0].categories)}</div>
    </main>
  );
}
