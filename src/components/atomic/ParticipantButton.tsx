import { FC } from 'react';
import { TButtonProps } from './types';

export const ParticipantButton: FC<TButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
}) => (
  <button
    className={`active:bg-faint-on-dark inline-flex h-[7.2rem] items-center justify-center rounded-[0.4rem]
      border-2 border-neutral-800 bg-neutral-800 px-[4.8rem] text-[2.4rem] font-medium 
      uppercase text-white transition ease-in hover:bg-white hover:text-neutral-800
      disabled:border-neutral-300 disabled:bg-white disabled:text-neutral-300 ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
