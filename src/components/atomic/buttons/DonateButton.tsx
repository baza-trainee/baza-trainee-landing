import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const donateStyle =
  'inline-flex h-full max-h-[8rem] items-center justify-center rounded-[0.4rem] border-2 border-neutral-300 px-[1.6rem] text-[1.8rem] sm:text-[2.4rem] font-medium uppercase text-neutral-800 transition ease-in hover:bg-neutral-600 hover:text-white whitespace-nowrap active:bg-neutral-800 disabled:bg-neutral-300 disabled:text-neutral-100';

export const DonateButton = ({
  children,
  className = '',
  ...otherProps
}: Props) => (
  <button className={`${donateStyle} ${className}`} {...otherProps}>
    {children}
  </button>
);
