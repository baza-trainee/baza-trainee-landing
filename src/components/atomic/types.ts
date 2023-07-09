import { PropsWithChildren, ReactNode } from 'react';

export type TButtonProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: 'L' | 'M';
  linkTo?: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  iconOnly?: boolean;
};
