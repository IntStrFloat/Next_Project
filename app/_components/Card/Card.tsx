import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
export const Card: React.FC<CardProps> = ({
  color = 'white',
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color == 'blue',
        [styles.white]: color == 'white',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
