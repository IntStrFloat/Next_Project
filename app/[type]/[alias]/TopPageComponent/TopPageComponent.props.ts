import { ProductModel } from '@/interfaces/product';
import { TopLevelCategory, TopPageModel } from '@/interfaces/toppage';

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
