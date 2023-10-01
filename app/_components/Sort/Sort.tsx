'use client';
import { SortSvg } from '../SortSvg';
import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import cn from 'classnames';
export const Sort: React.FC<SortProps> = ({ sort, setSort, className, ...props }) => {
  return (
    <div className={cn(styles.sort, className)}>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == 0,
        })}
      >
        <SortSvg className={styles.sortItem} color="#7653FC" /> По рейтингу
      </span>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => setSort(SortEnum.Proce)}
        className={cn({
          [styles.active]: sort == 1,
        })}
      >
        <SortSvg className={styles.sortItem} color="#7653FC" /> По цене
      </span>
    </div>
  );
};
