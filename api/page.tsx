import { API } from '@/app/api';
import { PageItem } from '@/interfaces/menu';
import { TopPageModel } from '@/interfaces/toppage';

export async function getPage(alias: string): Promise<TopPageModel> {
  const res = await fetch(API.topPage.byAlias + alias);
  return res.json();
}
