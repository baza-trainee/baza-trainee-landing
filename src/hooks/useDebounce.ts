import { useEffect, useRef, useState } from 'react';

export const useDebounce = (value: string, delay = 750) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};
