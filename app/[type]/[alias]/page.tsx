import { getMenu } from '@/api/api';
import { getPage } from '@/api/page';
import { notFound } from 'next/navigation';
import { firstLevelMenu } from '@/app/_helpers/helpers';
import { TopPageComponent } from './TopPageComponent/TopPageComponent';
import { getProduct } from '@/api/product';
import { Sort } from '@/app/_components/Sort/Sort';
interface ProductPageProps {
  params: { alias: string; type: string };
}
export async function generateStaticParams() {
  const menu = await getMenu(0);

  return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const page = await getPage(params.alias);
  const product = await getProduct(page.category);
  const firstCategoryItem = firstLevelMenu.find((menu) => menu.route === params.type);
  if (!firstCategoryItem) {
    notFound();
  }
  if (!page) {
    notFound();
  }
  return (
    <>
      <TopPageComponent page={page} firstCategory={firstCategoryItem.id} products={product} />
    </>
  );
};

export default ProductPage;
