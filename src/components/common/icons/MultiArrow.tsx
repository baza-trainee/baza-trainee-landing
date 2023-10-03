import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  direction: 'top' | 'bottom' | 'left' | 'right';
  bigSize?: boolean;
  open?: boolean;
}

export const MultiArrow = ({
  direction,
  className = '',
  bigSize,
  open,
  ...props
}: Props) => {
  let deg = '';

  switch (direction) {
    case 'top':
      deg = open ? 'rotate-0' : 'rotate-180';
      break;
    case 'bottom':
      deg = open ? 'rotate-180' : 'rotate-0';
      break;
    case 'left':
      deg = open ? '-rotate-90' : 'rotate-90';
      break;
    case 'right':
      deg = open ? 'rotate-90' : '-rotate-90';
      break;
    default:
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={bigSize ? '44' : '20'}
      height={bigSize ? '44' : '20'}
      fill="none"
      className={`transition-all duration-300 ${deg} ${className}`}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={bigSize ? '' : 2}
        d="m19 9-7 7-7-7"
      />
    </svg>
  );
};
