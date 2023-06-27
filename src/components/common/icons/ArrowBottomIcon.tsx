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
    style={{
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'all 200ms',
    }}
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
