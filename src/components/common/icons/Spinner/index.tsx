'use client';
import { useEffect, useState } from 'react';
import IconInner from './inner';
import IconOuter from './outer';

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
    <div className="relative flex h-48 w-[30rem] items-center">
      <div className="relative bottom-12">
        <IconOuter fill={'#121212'} className="absolute animate-spin" />
        <IconInner fill={'#121212'} className="absolute top-0" />
      </div>
      <h1 className="absolute left-28 text-[2rem] font-bold">
        {title}
        {dots}
      </h1>
    </div>
  );
};

export default Spinner;
