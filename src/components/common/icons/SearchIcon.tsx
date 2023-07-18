import { SVGProps } from 'react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id="magnifier"
      fill="none"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
