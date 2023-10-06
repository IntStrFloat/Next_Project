import { Review } from '@/interfaces/product';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: Review;
}
