'use client';
import { useEffect, useState } from 'react';
import IconInner from './inner';
import IconOuter from './outer';
import styles from './styles.module.scss';

const Spinner = ({ title = 'Loading' }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length === 4) {
          return '';
        } else {
          return prevDots + '.';
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles['spinner']}>
      <div className={styles['spinner-container']}>
        <div className={styles['spinner-outer']}>
          <IconOuter fill={'#121212'} />
        </div>
        <div className={styles['spinner-inner']}>
          <IconInner fill={'#121212'} />
        </div>
      </div>
      <h1 className={styles['spinner-header'] + 'text-[4rem]'}>
        {title}
        {dots}
      </h1>
    </div>
  );
};

export default Spinner;
