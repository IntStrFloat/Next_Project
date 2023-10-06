import { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  ref: ForwardedRef<HTMLDivElement>;
  error?: FieldError;
  setRating: (rating: number) => void;
}
