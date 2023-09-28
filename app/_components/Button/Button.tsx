'use client';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
export const Button: React.FC<ButtonProps> = ({
  appearance,
  children,
  arrow = 'none',
  ...props
}): JSX.Element => {
  const [arrowItem, setArrowItem] = useState<'right' | 'down'>('right');
  function onClick1() {
    setArrowItem(arrowItem === 'down' ? 'right' : 'down');
  }
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
      onClick={arrow !== 'none' ? onClick1 : () => {}}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrowItem === 'down',
            [styles.right]: arrowItem === 'right',
          })}
        >
          <img src="arrow.svg" />
        </span>
      )}
    </button>
  );
};
