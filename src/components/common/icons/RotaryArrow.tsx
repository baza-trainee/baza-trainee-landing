import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  direction: 'top' | 'bottom' | 'left' | 'right';
}

export const RotaryArrow = ({ direction, className, color = '#FCFCFC', ...props }: Props) => {
  let transformClass = '';

  switch (direction) {
    case 'top':
      transformClass = '-rotate-90';
      break;
    case 'bottom':
      transformClass = 'rotate-90';
      break;
    case 'left':
      transformClass = 'rotate-180';
      break;
    case 'right':
      transformClass = 'rotate-0';
      break;
    default:
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={44}
      fill="none"
      className={`${transformClass} ${className}`}
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 8 14 14-14 14"
      />
    </svg>
  );
};
