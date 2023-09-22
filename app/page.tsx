'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Htag, Button, Paragraph, Tag } from './_components';
import Logo from '../public/arrow.svg';
import { useState } from 'react';
import { Star } from './_components/StarSvg';
import { Rating } from './_components/Rating/Rating';
export default function Home() {
  const clickHandler = () => {};
  const [arrow, setArrow] = useState<'right' | 'down'>('right');
  const [rating, setRating] = useState<number>(0);
  return (
    <main>
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Привет</Htag>
      <Htag tag="h3">Привет</Htag>
      <Button appearance="primary">Я пидорас</Button>

      <Button
        appearance="ghost"
        onClick={() => {
          setArrow(arrow === 'down' ? 'right' : 'down');
        }}
        arrow={arrow}
      >
        Я пидорас
      </Button>
      <Paragraph size="s">Привет, меня зовут Дима</Paragraph>
      <Paragraph size="m">Привет, меня зовут Дима</Paragraph>
      <Paragraph size="l">Привет, меня зовут Дима</Paragraph>
      <Tag size="m" color="red">
        hh.ru
      </Tag>
      <Tag size="m" color="green">
        -10 000 $
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </main>
  );
}
