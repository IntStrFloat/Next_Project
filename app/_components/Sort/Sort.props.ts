import { ProductModel } from '@/interfaces/product';
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';
export interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Proce,
}
