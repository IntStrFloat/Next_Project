'use client';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import React, { useState, useEffect, KeyboardEvent } from 'react';
import { Star } from '../StarSvg';
import styles from './Rating.module.css';
export const Rating: React.FC<RatingProps> = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}) => {
  useEffect(() => {
    starHandler(rating);
  }, [rating]);
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const starHandler = (currentRating: number) => {
    const newArray = ratingArray.map((element: JSX.Element, index: number) => {
      return (
        <span
          key={index}
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.iseditable]: isEditable,
          })}
          onMouseEnter={() => checker(index + 1)}
          onMouseLeave={() => checker(rating)}
          tabIndex={isEditable ? 0 : -1}
          onClick={() => onClick(index + 1)}
        >
          {' '}
          <Star
            className={styles.svg}
            color="#EBEBEB"
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
          />
        </span>
      );
    });
    setRatingArray(newArray);
  };
  const checker = (i: number) => {
    if (!isEditable) return;
    starHandler(i);
  };
  const onClick = (index: number) => {
    if (!isEditable || !setRating) return;
    setRating(index);
  };
  const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != 'Space' || !setRating) return;
    setRating(index);
  };
  return (
    <div {...props}>
      {ratingArray.map((elem: JSX.Element, index: number) => {
        return <React.Fragment key={index}>{elem}</React.Fragment>;
      })}
    </div>
  );
};
