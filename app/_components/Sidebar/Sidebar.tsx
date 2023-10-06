import { getMenu } from '@/api/api';
import { Menu } from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import { Logo } from '../Logo';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Search } from '../Search/Search';

export const Sidebar: React.FC<SidebarProps> = async ({
  className,
  ...props
}): Promise<JSX.Element> => {
  const firstCategory = 0;
  const menuData1 = await getMenu(firstCategory);
  const menuData = menuData1.filter(
    (e) =>
      e._id.secondCategory.toLowerCase() != 'маркетинг' &&
      e._id.secondCategory.toLowerCase() != 'игры' &&
      e._id.secondCategory.toLowerCase() != 'красота и здоровье' &&
      e._id.secondCategory.toLowerCase() != 'прочее' &&
      e._id.secondCategory.toLowerCase() != 'языки',
  );

  // console.log(menuData);
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} color="#7653FC" />
      <Search />
      <Menu menuItem={menuData} />
    </div>
  );
};
