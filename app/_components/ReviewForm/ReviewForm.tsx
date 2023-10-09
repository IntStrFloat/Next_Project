'use client';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import classNames from 'classnames';
import { ReviewLogo } from '../ReviewLogo';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { RatingHandler } from '../Rating/RatingHandler';
import { Button, Input, Rating } from '..';
import { TextArea } from '../TextArea/TextArea';
import { ReviewSuccesSvg } from '../ReviewSuccesSvg';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { IReviewForm, IReviewSentResponse } from './ReviewFormProps';
import { ForwardedRef, forwardRef, useState } from 'react';
import axios from 'axios';
import { API } from '@/app/api';
export const ReviewForm = ({ className, productId, ...props }: ReviewFormProps) => {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>();
  const onSubmit: SubmitHandler<IReviewForm> = async (formData) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        'https://courses-top.ru/api/review/create-demo',
        {
          ...formData,
          productId,
        },
      );
      if (data.message.includes('undefined')) throw new Error(data.message);
      if (data.message) {
        console.log(data.message);
        setIsSuccess(true);
        reset();
      } else {
        reset();
        setFormError('Something went wrong');
        setIsSuccess(false);
      }
    } catch (e) {
      console.log(e);
      setFormError('error');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(styles.reviewForm, className)} {...props}>
        <Input
          className={styles.nameInput}
          placeholder="Имя"
          {...register('name', { required: { value: true, message: 'Введите имя' } })}
          error={errors.name}
        />
        <Input
          className={styles.titleInput}
          placeholder="Имя"
          {...register('title', { required: { value: true, message: 'Введите заголовок' } })}
          error={errors.title}
        />

        <div className={styles.rateBlock}>
          <span>Оценка:&nbsp;</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Выберите оценку' } }}
            render={({ field }) => (
              <Rating
                error={errors.rating}
                setRating={field.onChange}
                className={styles.rating}
                isEditable
                ref={field.ref}
                rating={field.value}
              />
            )}
          />
        </div>
        <TextArea
          className={styles.textArea}
          {...register('description', {
            required: { value: true, message: 'Введите описание' },
          })}
          placeholder="Текст отзыва"
          error={errors.description}
        />
        <div className={styles.submitBlock}>
          <Button type="submit" className={styles.submitButton} appearance="primary">
            Отправить
          </Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && (
        <div className={styles.succesBlock}>
          <div className={styles.succesTitle}>Ваш отзыв отправлен!</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <div className={styles.close} onClick={() => setIsSuccess(false)}>
            <ReviewSuccesSvg color="#1CC37E" />
          </div>
        </div>
      )}
      {formError && (
        <div className={styles.erorrBlock}>
          Что-то пошло не так, попробуйте обновить страницу.
          <div className={styles.close} onClick={() => setFormError('')}>
            <ReviewSuccesSvg color="#dd3619" />
          </div>
        </div>
      )}
    </form>
  );
};
