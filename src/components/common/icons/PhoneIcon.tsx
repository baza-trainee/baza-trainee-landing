import { SVGProps } from 'react';

export const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 16.92v3a1.998 1.998 0 0 1-2.18 2 19.791 19.791 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16.001 16.001 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92Z"
    />
  </svg>
);
