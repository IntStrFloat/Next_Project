'use client';
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react';
import { RatingProps } from './Rating.props';
import { Rating } from '..';

interface RatingHanglerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
}

export const RatingHandler: React.FC<RatingHanglerProps> = ({
  isEditable = false,
  rating,
  ...props
}) => {
  const [ratingItem, setRatingItem] = useState<number>(rating);
  return (
    <Rating rating={ratingItem} setRating={setRatingItem} isEditable={isEditable} {...props} />
  );
};
