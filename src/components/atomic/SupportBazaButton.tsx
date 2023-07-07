import { FC } from 'react';
import { TButtonProps } from './types';

export const SupportBazaButton: FC<TButtonProps> = ({
  children,
  className = '',
  size = 'L',
  ...rest
}) => (
  <button
    className={`inline-flex w-[58.4rem] items-center justify-center rounded-[0.4rem] 
    bg-yellow-500 px-[4.8rem] text-[2.2rem] font-semibold text-neutral-800 transition ease-in 
    hover:bg-yellow-600 active:bg-yellow-800 disabled:bg-neutral-300 disabled:text-neutral-500
    ${size === 'M' && 'h-[5.6rem]'}
    ${size === 'L' && 'h-[8.8rem]'}
    ${className}`}
    {...rest}
  >
    {children}
  </button>
);
