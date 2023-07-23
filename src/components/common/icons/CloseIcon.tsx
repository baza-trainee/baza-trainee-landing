import { SVGProps } from 'react';

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M33 11 11 33m0-22 22 22"
    />
  </svg>
);
