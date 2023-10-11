import { ReviewProps } from './Review.props';
import styles from './Review.module.css';
import classNames from 'classnames';
import { ReviewLogo } from '../ReviewLogo';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import RatingHandler from '../Rating/RatingHandler';
export const Review: React.FC<ReviewProps> = ({ className, review, ...props }) => {
  const { name, title, createdAt, rating, description } = review;
  return (
    <div className={classNames(styles.review, className)} {...props}>
      <ReviewLogo className={styles.reviewLogo} />
      <div className={styles.reviewName}>
        <span className={styles.name}>{name}:</span>
        <span className={styles.reviewTitle}>{title}</span>
      </div>

      <div className={styles.reviewDate}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <div className={styles.reviewRate}>
        <RatingHandler rating={rating} />
      </div>
      <div className={styles.reviewDescription}>{description}</div>
    </div>
  );
};
