'use client';
import classNames from 'classnames';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { Logo } from '../Logo';
import { MenuSvg } from './MenuSvg';
import { motion } from 'framer-motion';
import { Button, Sidebar } from '..';
import { CloseSvg } from './CloseSvg';

import { useState } from 'react';
export const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  console.log(isOpened ? ' 1' : 2);
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100% ',
    },
  };
  return (
    <header className={classNames(className, styles.header)} {...props}>
      <Logo color="#7653FC" />
      <MenuSvg onClick={() => setIsOpened((prev) => !prev)} className={styles.menuIcon} />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        {children}
      </motion.div>
      <CloseSvg
        onClick={() => setIsOpened((prev) => !prev)}
        className={classNames(styles.menuClose, {
          [styles.menuNone]: !isOpened,
        })}
      />
    </header>
  );
};
