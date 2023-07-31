import { SVGProps } from 'react';

export const PartnerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4ZM4 16v3h16v-3H4Zm0-2h16V7H4v7ZM9 3v2h6V3H9Zm2 8h2v2h-2v-2Z" />
  </svg>
);
