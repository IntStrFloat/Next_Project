'use client';
import { ProductProps } from './Product.props';
import cn from 'classnames';
import { ForwardedRef, Fragment, forwardRef, useRef } from 'react';
import styles from './Product.module.css';
import { Button, Card, Divider, Paragraph, Rating, ReviewForm, Tag } from '..';
import { RatingHandler } from '../Rating/RatingHandler';
import { priceRu } from '@/app/_helpers/priceRu';
import Image from 'next/image';
import { ReviewLogo } from '../ReviewLogo';
import { useState } from 'react';
import { format } from 'date-fns';
import { es, ru } from 'date-fns/locale';
import { Review } from '../Review/Review';
import { motion } from 'framer-motion';
export const Product = motion(
  forwardRef(
    ({ className, product, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>) => {
      const [isReviweOpened, setIsReviweOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);
      const scrollToReview = () => {
        setIsReviweOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };
      const variants = {
        visible: {
          opacity: 1,
          height: 'auto',
        },
        hidden: { opacity: 0, height: 0, padding: 0, margin: 0, display: 'none' },
      };
      const variants2 = {
        visible: {
          opacity: 1,
          height: 'auto',
        },
        hidden: { opacity: 0, height: 0 },
      };
      return (
        <div ref={ref}>
          <Card color="white" className={styles.product}>
            <div className={styles.logo}>
              <Image
                width={70}
                height={70}
                src={'https://courses-top.ru' + product.image}
                alt={product.title}
              />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              {priceRu(product.price)}{' '}
              {product.oldPrice && (
                <Tag size="m" color="green" className={styles.oldPriceTag}>
                  {priceRu(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              {priceRu(product.credit)}
              <span className={styles.month}>/мес</span>
            </div>
            <div className={styles.rating}>
              <RatingHandler rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((category, index) => (
                <Tag key={index} size="m" color="ghost">
                  {category}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {product.reviewCount} отзывов
              </a>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>
              {' '}
              <Paragraph size="m">{product.description}</Paragraph>
            </div>
            <div className={styles.charasteristisks}>
              {product.characteristics.map((c, i) => (
                <div key={i} className={styles.charasteristic}>
                  <span className={styles.charasteristicsName}>{c.name}</span>
                  <span className={styles.charasteristicsDots}></span>
                  <span className={styles.charasteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            {product.advantages && (
              <div className={styles.advBlock}>
                <div className={styles.advTitle}>Преимущества</div>
                <div>{product.advantages}</div>
              </div>
            )}
            {product.disadvantages && (
              <div className={styles.disAdvBlock}>
                <div className={styles.advTitle}>Недостатки</div>
                <div>{product.disadvantages}</div>
              </div>
            )}

            <div className={styles.disadvantages}>{product.disadvantages}</div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
              <Button appearance="primary">Узнать&nbsp;подробнее</Button>
              <Button
                onClick={() => setIsReviweOpened(!isReviweOpened)}
                className={styles.reviewButton}
                appearance="ghost"
                arrow={isReviweOpened ? 'down' : 'right'}
              >
                Читать&nbsp;отзывы
              </Button>
            </div>
          </Card>
          <motion.div
            animate={isReviweOpened ? 'visible' : 'hidden'}
            variants={variants}
            initial={'hidden'}
          >
            <Card
              className={cn(styles.reviews, {
                [styles.opened]: isReviweOpened,
                [styles.closed]: !isReviweOpened,
              })}
              color="blue"
              ref={reviewRef}
            >
              {product.reviews.map(
                (e, i) =>
                  e.description.length > 15 && (
                    <Fragment key={i}>
                      <Review review={e} />
                      <Divider />
                    </Fragment>
                  ),
              )}

              <ReviewForm productId={product._id} />
            </Card>
          </motion.div>
        </div>
      );
    },
  ),
);
