import { ButtonHTMLAttributes, FC } from 'react';

type SupportBazaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'M' | 'L';
};
export const SupportBazaButton: FC<SupportBazaButtonProps> = ({
  children,
  className = '',
  size = 'L',
  ...rest
}) => (
  <button
    className={`inline-flex w-full max-w-[58.5rem] items-center justify-center rounded-[0.4rem]
    bg-yellow-500 text-[2.2rem] font-semibold text-neutral-800 transition ease-in hover:bg-yellow-600 
    active:bg-yellow-800 disabled:bg-neutral-300 disabled:text-neutral-500 sm:px-[4.8rem]
    ${size === 'M' && 'h-[5.6rem]'}
    ${size === 'L' && 'h-[8.8rem]'}
    ${className}`}
    {...rest}
  >
    {children}
  </button>
);
