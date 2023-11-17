import { SVGProps } from 'react';

export const ProjectsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M5 8v12h14V8H5Zm0-2h14V4H5v2Zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1ZM7 10h4v4H7v-4Zm0 6h10v2H7v-2Zm6-5h4v2h-4v-2Z" />
  </svg>
);
