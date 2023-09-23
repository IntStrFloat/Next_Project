import { FooterProps } from './Footer.props';
import { Paragraph } from '..';
import classNames from 'classnames';
import styles from './Footer.module.css';
import { format } from 'date-fns';
export const Footer: React.FC<FooterProps> = ({ className, ...props }): JSX.Element => {
  return (
    <div className={classNames(className, styles.footer)} {...props}>
      <Paragraph className={styles.first} size="s">
        StrService © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </Paragraph>

      <a className={styles.second} href="#" target="_blank">
        Пользовательское соглашение
      </a>

      <a className={styles.third} href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </div>
  );
};
