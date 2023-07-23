import { SVGProps } from 'react';

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <path d="M48 24.147C48 10.81 37.255 0 24 0S0 10.81 0 24.147C0 36.199 8.776 46.189 20.25 48V31.127h-6.094v-6.98h6.094v-5.32c0-6.052 3.583-9.395 9.065-9.395 2.625 0 5.373.472 5.373.472v5.942H31.66c-2.981 0-3.911 1.862-3.911 3.773v4.528h6.656l-1.064 6.98H27.75V48C39.224 46.189 48 36.199 48 24.147Z" />
    <defs>
      <path d="M0 0h48v48H0z" />
    </defs>
  </svg>
);
