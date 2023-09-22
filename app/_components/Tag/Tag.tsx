import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';
export const Tag: React.FC<TagProps> = ({
  color = 'ghost',
  children,
  href,
  size = 'm',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == 's',
        [styles.s]: size == 'm',
        [styles.primary]: color == 'primary',
        [styles.red]: color == 'red',
        [styles.green]: color == 'green',
        [styles.gray]: color == 'gray',
        [styles.ghost]: color == 'ghost',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
