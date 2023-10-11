'use client';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import Input from '../Input/Input';
import { Button } from '../Button/Button';
import { SearchSvg } from '../SearchSvg';
import { KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
export const Search: React.FC<SearchProps> = ({ className, placeholder, ...props }) => {
  const patch = useRouter();
  const [value, setValue] = useState<string>('');
  const clickHandler = () => {
    console.log(1);
    patch.push(`/search?q=${value}`);
  };
  const inputHandler = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      clickHandler();
    }
  };
  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск..."
        onKeyDown={inputHandler}
        className={styles.input}
      />
      <Button appearance="primary" onClick={clickHandler} className={styles.button}>
        <SearchSvg />
      </Button>
    </div>
  );
};
