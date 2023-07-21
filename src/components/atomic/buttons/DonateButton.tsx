import { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const MyButton: FC<ButtonProps> = ({
  children,
  className = '',
  ...otherProps
}) => (
  <button
    className={`inline-flex h-[8rem] items-center justify-center rounded-[0.4rem] border-2
      border-neutral-300 bg-white px-[4rem] text-[2.4rem] font-medium uppercase 
      text-neutral-800 transition ease-in hover:bg-neutral-600 hover:text-white 
      active:bg-neutral-800 ${className}`}
    {...otherProps}
  >
    {children}
  </button>
);
