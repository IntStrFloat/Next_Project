import { DividerProps } from './Divider.props';
import cn from 'classnames';
import styles from './Divider.module.css';
export const Divider: React.FC<DividerProps> = ({ className, ...props }) => {
  return <hr className={cn(styles.hr, className)} {...props} />;
};
