import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import Image from 'next/image';
export const Button: React.FC<ButtonProps> = ({
  appearance,
  children,
  arrow = 'none',
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <img src="arrow.svg" />
        </span>
      )}
    </button>
  );
};
