import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import cn from 'classnames';
import Card from '../Card/Card';
import { HhStar } from '../HhStar';
import { priceRu } from '@/app/_helpers/priceRu';
export const HhData: React.FC<HhDataProps> = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
  updatedAt,
  _id,
}): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card color="white" className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.startCount}>{count}</div>
      </Card>
      <Card color="white" className={styles.salery}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.saleryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.saleryRate}>
            <HhStar color="#FC836D" />
            <HhStar color="#BBBBBB" />
            <HhStar color="#BBBBBB" />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.saleryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.saleryRate}>
            <HhStar color="#FC836D" />
            <HhStar color="#FC836D" />
            <HhStar color="#BBBBBB" />
          </div>
        </div>
        <div>
          <div className={styles.title}>Проффисионал</div>
          <div className={styles.saleryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.saleryRate}>
            <HhStar color="#FC836D" />
            <HhStar color="#FC836D" />
            <HhStar color="#FC836D" />
          </div>
        </div>
      </Card>
    </div>
  );
};
