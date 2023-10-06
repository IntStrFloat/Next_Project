import { CourseComponentProps } from './CourseComponent.props';
import styles from './Card.module.css';
import cn from 'classnames';
export const CourseComponent: React.FC<CourseComponentProps> = ({
  children,
  className,
  products,
  ...props
}) => {
  console.log(products);
  return <div></div>;
};
