'use client';
import { Htag, Paragraph, Tag } from '@/app/_components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import Product from '@/app/_components/Product/Product';
import { HhData } from '@/app/_components/HhData/HhData';
import { TopLevelCategory } from '@/interfaces/toppage';
import { Advantages } from '@/app/_components/Advantages/Advantages';
import { Sort } from '@/app/_components/Sort/Sort';
import { useEffect, useReducer, useState } from 'react';
import { sortResucer } from './sort.resucer';
import { SortEnum } from '@/app/_components/Sort/Sort.props';
import TextArea from '@/app/_components/TextArea/TextArea';
import { useScrollY } from '@/app/_helpers/hooks/useScrollY';

export const TopPageComponent: React.FC<TopPageComponentProps> = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortResucer, {
    products,
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);

  const y = useScrollY();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products.length && (
          <Tag style={{ marginBottom: '-3px' }} color="gray" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts.map((p, index) => (
          <Product
            key={p._id}
            product={p}
            transition={{
              layout: { duration: 0.5 },
            }}
            layout
          />
        ))}
        <TextArea placeholder="Текст" />
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {sortedProducts.length && (
          <Tag color="red" size="m">
            hh.ru
          </Tag>
        )}
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      <div>
        {page.advantages && page.advantages.length > 0 && (
          <>
            {' '}
            <Htag tag="h2">Преимущества</Htag>
            <Advantages advantages={page.advantages} />
          </>
        )}
        {page.seoText && (
          <div className={styles.seoText} dangerouslySetInnerHTML={{ __html: page.seoText }} />
        )}
        <Htag tag="h2">Получаемые навыки</Htag>
        {page.tags.map((tag) => (
          <Tag key={tag} color="primary" size="s">
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};
