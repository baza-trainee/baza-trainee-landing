import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  smallSize?: boolean;
}

export const CloseIcon = ({ smallSize, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    width={smallSize ? 24 : 44}
    height={smallSize ? 24 : 44}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={smallSize ? 3 : ''}
      d="M33 11 11 33m0-22 22 22"
    />
  </svg>
);
