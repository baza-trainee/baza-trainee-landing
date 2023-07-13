import { useEffect, useRef } from 'react';
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from './bodyScrollLock';

export function useBodyScrollLock(isLock: boolean) {
  const scrollLockerUpgradeRef = useRef<any>(null);

  useEffect(() => {
    if (!scrollLockerUpgradeRef.current) {
      clearAllBodyScrollLocks();
      return;
    }
    if (isLock) {
      disableBodyScroll(scrollLockerUpgradeRef.current, {
        reserveScrollBarGap: true,
        allowTouchMove: (el: any) => {
          if (!el) return false;
          while (el && el !== document.body) {
            if (typeof el.className === 'string') {
              if (el.className.indexOf('body-scroll-lock-ignore') > -1) {
                return true;
              }
            }

            el = el.parentElement;
          }
          return false;
        },
      });
      console.log('disableBodyScroll');
    } else {
      enableBodyScroll(scrollLockerUpgradeRef.current);
    }
  }, [isLock]);

  useEffect(() => {
    const ele = scrollLockerUpgradeRef.current;
    return () => {
      if (ele) {
        enableBodyScroll(ele);
      }
    };
  }, []);

  return scrollLockerUpgradeRef;
}
