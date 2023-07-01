import { FC } from 'react';
import { TButtonProps } from './types';
import Link from 'next/link';

export const ParticipantButtonLink: FC<TButtonProps> = ({
  children,
  className = '',
  linkTo = '',
}) => (
  <Link
    href={linkTo}
    className={`flex h-[7.7rem] w-[30rem] items-center justify-center whitespace-nowrap rounded-[0.4rem]
      border-2 border-neutral-800 bg-neutral-800 px-5 text-[2.4rem] font-medium 
      uppercase text-white transition ease-in hover:bg-white hover:text-neutral-800 active:bg-faint-dark
      disabled:border-neutral-300 disabled:bg-white disabled:text-neutral-300 ${className}`}
  >
    {children}
  </Link>
);
