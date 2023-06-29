import { PropsWithChildren } from 'react';

export type TButtonProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: 'L' | 'M';
};
