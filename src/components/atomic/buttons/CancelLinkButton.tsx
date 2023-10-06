import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface CancelLinkButtonProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export const CancelLinkButton: FC<CancelLinkButtonProps> = ({
  children,
  href,
  className = '',
  ...rest
}) => {
  const hoverClasses = 'hover:bg-neutral-500 hover:text-white';

  const buttonClasses = `
    relative flex-center gap-[1.2rem] h-[5.6rem] shrink-0 pl-[3.2rem] pr-[3.2rem] rounded-[0.4rem]
    border text-[2.2rem] font-semibold overflow-hidden transition-colors
    active:bg-neutral-800
    ${hoverClasses}
    ${className}
  `;

  return (
    <Link className={buttonClasses} href={href} {...rest}>
      <span className={'transition-transform'}>{children}</span>
    </Link>
  );
};
