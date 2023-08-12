import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: 'S' | 'M' | 'L';
}

const dimensions = {
  S: 24,
  M: 32,
  L: 44,
};

const strokeW = {
  S: 3,
  M: 2,
  L: undefined,
};

export const CloseIcon = ({ size = 'L', ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      width={dimensions[size]}
      height={dimensions[size]}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeW[size]}
        d="M33 11 11 33m0-22 22 22"
      />
    </svg>
  );
};
