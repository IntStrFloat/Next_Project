'use client';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import { useState } from 'react';
import Image from 'next/image';
import { Arrow } from '../Arrow';
export const Button: React.FC<ButtonProps> = ({
  appearance = 'primary',
  children,
  arrow = 'none',
  className,
  ...props
}) => {
  // const [arrowItem, setArrowItem] = useState<'right' | 'down' | 'none'>('none');
  // function onClick1() {
  //   setArrowItem(arrowItem === 'down' ? 'right' : 'down');
  // }
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
      // onClick={arrow !== 'none' ? onClick1 : () => {}}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <Arrow />
        </span>
      )}
    </button>
  );
};
