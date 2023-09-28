import { API } from '@/app/api';
import { ProductModel } from '@/interfaces/product';

export async function getProduct(category: string): Promise<ProductModel[]> {
  const res = await fetch('https://courses-top.ru/api/product/find', {
    method: 'POST',
    body: JSON.stringify({ category, limit: 10 }),
    headers: new Headers({ 'content-Type': 'application/json' }),
  });
  return res.json();
}
