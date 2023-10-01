import { SortEnum } from '@/app/_components/Sort/Sort.props';
import { ProductModel } from '@/interfaces/product';

export type SortAction = { type: SortEnum.Proce } | { type: SortEnum.Rating };

export interface ISortReducer {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortResucer = (state: ISortReducer, action: SortAction): ISortReducer => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((one, two) =>
          one.initialRating > two.initialRating ? -1 : 1,
        ),
      };
    case SortEnum.Proce:
      return {
        sort: SortEnum.Proce,
        products: state.products.sort((one, two) => (one.price > two.price ? -1 : 1)),
      };

    default:
      throw new Error('Invalid sort');
  }
};
