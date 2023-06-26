import { SVGProps } from 'react';

export const ArrowBottomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19 9-7 7-7-7"
    />
  </svg>
);
