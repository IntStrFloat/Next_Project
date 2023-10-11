'use client';
import { useState, DetailedHTMLProps, HTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { Rating } from '..';
import { FieldError } from 'react-hook-form';

interface RatingHanglerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  error?: FieldError;
  rating: number;
  setRating?: (rating: number) => void;
}

const RatingHandler = forwardRef(
  (
    { isEditable = false, rating, setRating, ...props }: RatingHanglerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [ratingItem, setRatingItem] = useState<number>(rating);
    return (
      <Rating
        rating={ratingItem}
        setRating={setRating ?? setRatingItem}
        isEditable={isEditable}
        {...props}
      />
    );
  },
);

export default RatingHandler;
