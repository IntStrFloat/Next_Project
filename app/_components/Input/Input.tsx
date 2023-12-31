import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <input
          ref={ref}
          className={cn(styles.input, {
            [styles.error]: error,
          })}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
export default Input;
