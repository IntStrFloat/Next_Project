import { ProductModel } from '@/interfaces/product';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
}
