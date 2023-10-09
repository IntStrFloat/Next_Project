import classNames from 'classnames';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { Logo } from '../Logo';

import { MenuSvg } from './MenuSvg';
export const Header: React.FC<HeaderProps> = ({ className, ...props }): JSX.Element => {
  return (
    <header className={classNames(className, styles.header)} {...props}>
      <Logo color="#7653FC" />
      <MenuSvg className={styles.menuIcon} />
    </header>
  );
};
