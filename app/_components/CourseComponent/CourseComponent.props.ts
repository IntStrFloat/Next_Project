import { ProductModel } from '@/interfaces/product';
import { TopPageModel } from '@/interfaces/toppage';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CourseComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: ProductModel[];
}
