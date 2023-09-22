import Link from 'next/link';
import { FC, ReactNode } from 'react';

const primary =
  'bg-neutral-800 text-white border-neutral-800 disabled:border-neutral-75 disabled:bg-neutral-75 disabled:text-neutral-300';
const secondary =
  'border-neutral-800 bg-white text-neutral-800 disabled:border-neutral-300 disabled:text-neutral-300';

interface CancelLinkButtonProps {
  children: ReactNode;
  className: string;
  icon?: ReactNode;
  href: string;
  iconOnly?: boolean;
}

export const CancelLinkButton: FC<CancelLinkButtonProps> = ({
  children,
  href,
  className = '',
  icon,
  iconOnly,
  ...rest
}) => {
  const hoverClasses = 'hover:bg-neutral-500 hover:text-white';

  const buttonClasses = `
    relative flex-center gap-[1.2rem] h-[5.6rem] shrink-0 pr-[3.2rem] rounded-[0.4rem]
    border text-[2.2rem] font-semibold overflow-hidden transition-colors
    active:bg-neutral-800 
    ${icon ? 'pl-[1.2rem]' : 'pl-[3.2rem]'}
    ${iconOnly && icon ? 'w-[4.7rem]' : ''}
    ${hoverClasses}
    ${className}
  `;

  return (
    <Link className={buttonClasses} href={href} {...rest}>
      {icon && (
        <div
          className={`h-[2.4rem] w-[2.4rem] ${iconOnly ? 'block-center' : ''}`}
        >
          {icon}
        </div>
      )}
      <span
        className={`transition-transform ${
          icon && iconOnly ? 'scale-0' : 'scale-100'
        }`}
      >
        {children}
      </span>
    </Link>
  );
};
