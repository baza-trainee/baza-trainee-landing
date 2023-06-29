import { FC } from 'react';
import { TButtonProps } from './types';

export const DonateButton: FC<TButtonProps> = ({
  children,
  onClick,
  className = '',
}) => (
  <button
    className={`inline-flex h-[8rem] items-center justify-center rounded-[0.4rem] border-2
      border-neutral-300 bg-white px-[4rem] text-[2.4rem] font-medium uppercase 
      text-neutral-800 transition ease-in hover:bg-neutral-600 hover:text-white 
      active:bg-neutral-800 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
