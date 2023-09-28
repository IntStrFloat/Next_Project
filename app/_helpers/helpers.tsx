import { FirstLevelMenuItem } from '@/interfaces/menu';
import Courses from './icons/Courses';
import { TopLevelCategory } from '@/interfaces/toppage';
import Books from './icons/Books';
import Products from './icons/Products';
import Services from './icons/Services';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <Courses color="#787D85" />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <Books color="#787D85" />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <Products color="#787D85" />,
    id: TopLevelCategory.Products,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <Services color="#787D85" />,
    id: TopLevelCategory.Services,
  },
];
