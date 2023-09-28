'use client';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu';
import styles from './Menu.module.css';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { firstLevelMenu } from '@/app/_helpers/helpers';
interface menuProps {
  menuItem: MenuItem[];
}

export const Menu: React.FC<menuProps> = ({ menuItem }): JSX.Element => {
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
              <a href={`/${menu.route}`} style={{ textDecoration: 'none', color: '#787D85' }}>
                <div
                  className={cn(styles.firstlevel, {
                    [styles.firstLevelActive]: menu.route == pathName[1],
                  })}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
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
            <div>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory, m)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, pathName[1])}
              </div>
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
          <a
            href={`/${route}/${page.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathNameTwo,
            })}
          >
            {page.category}
          </a>
        ))}
      </>
    );
  };
  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
