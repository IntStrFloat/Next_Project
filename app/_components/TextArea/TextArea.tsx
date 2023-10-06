import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef, Fragment } from 'react';
export const TextArea = forwardRef(
  ({ className, error, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <div className={cn(className)}>
        <textarea
          ref={ref}
          className={cn(styles.textArea, {
            [styles.error]: error,
          })}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
