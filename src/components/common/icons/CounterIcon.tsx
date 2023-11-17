import { SVGProps } from 'react';

export const CounterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path d="M9 18H4v-8h5v8Zm-2-2v-4H6v4h1Zm6 0V8h-1v8h1Zm2 2h-5V6h5v12Zm4-2V4h-1v12h1Zm2 2h-5V2h5v16Zm1 4H3v-2h19v2Z" />
  </svg>
);
