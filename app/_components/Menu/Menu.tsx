'use client';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu';
import styles from './Menu.module.css';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { firstLevelMenu } from '@/app/_helpers/helpers';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface menuProps {
  menuItem: MenuItem[];
}

export const Menu: React.FC<menuProps> = ({ menuItem }) => {
  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  };
  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: { opacity: 0, height: 0 },
  };
  const [menu, setMenu] = useState(menuItem);
  const pathNameTwo = usePathname();
  const pathName = pathNameTwo.split('/');
  const openSecondLevel = (secondCategory: string, me: MenuItem) => {
    setMenu(
      menu.map((m) => {
        if (m._id.secondCategory == secondCategory) {
          m.isOpened = !m.isOpened;
        }
        return m;
      }),
    );
  };
  console.log(pathName);
  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((menu) => {
          return (
            <div key={menu.route}>
              <Link href={`/${menu.route}`} style={{ textDecoration: 'none', color: '#787D85' }}>
                <div
                  className={cn(styles.firstlevel, {
                    [styles.firstLevelActive]: menu.route == pathName[1],
                  })}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </Link>
              {menu.route == pathName[1] && buildSecondLevel()}
            </div>
          );
        })}
      </>
    );
  };
  const buildSecondLevel = () => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (m.pages.map((p) => p.alias).includes(pathName[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory, m)}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
                className={cn(styles.secondLevelBlock)}
              >
                {buildThirdLevel(m.pages, pathName[1])}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <>
        {pages.map((page) => (
          <motion.div variants={variantsChildren}>
            <Link
              key={page._id}
              href={`/${route}/${page.alias}`}
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathNameTwo,
              })}
            >
              {page.category}
            </Link>
          </motion.div>
        ))}
      </>
    );
  };
  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
