import { TButtonProps } from '../types';

export const ParticipantButtonLink = ({
  children,
  className = '',
  linkTo = '',
}: TButtonProps) => (
  <a
    href={linkTo}
    target="blank"
    className={`flex-center h-[7.7rem] w-[30rem] whitespace-nowrap rounded-[0.4rem] border-2 border-neutral-800
    bg-neutral-800 px-5 text-[2.4rem] font-medium uppercase text-white transition ease-in hover:bg-white
    hover:text-neutral-800 active:bg-faint-dark disabled:border-neutral-300 disabled:bg-white
    disabled:text-neutral-300 md:h-[4.815rem] md:text-[1.5rem] xl:h-[7.7rem] xl:w-[30rem] xl:text-[2.4rem] ${className}`}
  >
    {children}
  </a>
);
