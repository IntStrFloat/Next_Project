import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';
export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size,
  className,
  ...props
}): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.little]: size == 's',
        [styles.default]: size == 'm',
        [styles.large]: size == 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
