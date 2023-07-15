import { InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export type TButtonProps = PropsWithChildren &
  InputHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    size?: 'L' | 'M';
    linkTo?: string;
    variant?: 'primary' | 'secondary';
    icon?: ReactNode;
    iconOnly?: boolean;
  };
