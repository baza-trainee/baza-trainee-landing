import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  open?: boolean;
}

export const ArrowBottomIcon = ({ open = false, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className={`transition-all duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
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
