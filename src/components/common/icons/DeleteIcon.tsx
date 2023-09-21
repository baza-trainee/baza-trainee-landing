import { SVGProps } from 'react';

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      d="M7 4.5h.5v-2h9v2h5v1h-2V21a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5.5h-2v-1H7Zm-1 1h-.5v15h13v-15H6Zm3.5 4h1v7h-1v-7Zm4 0h1v7h-1v-7Z"
    />
  </svg>
);
