import { Review } from '@/interfaces/product';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  prodId: string;
}
