'use client';
import cn from 'classnames';
import styles from './Up.module.css';
import { motion, useAnimation } from 'framer-motion';
import { UpSvg } from '../UpSvg';
import { useEffect } from 'react';
import { useScrollY } from '@/app/_helpers/hooks/useScrollY';
export const Up: React.FC = (): JSX.Element => {
  const y = useScrollY();
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ opacity: (y / document.body.scrollHeight) * 5 });
  }, [y, controls]);
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  controls;
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={controls}
      onClick={handleScroll}
      className={styles.upButton}
    >
      <UpSvg />
    </motion.button>
  );
};
