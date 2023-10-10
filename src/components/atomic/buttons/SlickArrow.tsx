import { CustomArrowProps } from 'react-slick';

import { MultiArrow } from '@/components/common/icons';

interface IProps extends CustomArrowProps {
  direction: 'left' | 'right';
}

export const SlickArrow = ({
  onClick,
  direction,
  currentSlide,
  slideCount = 0,
  className = '', // This is the protective plug. Don't use;
}: IProps) => (
  <MultiArrow
    direction={direction}
    onClick={onClick}
    bigSize
    className={`
          absolute top-[15%] z-10 -translate-y-1/2 cursor-pointer md:top-1/2
          ${direction === 'left' && 'left-0'}
          ${direction === 'right' && 'right-0'}
          ${direction === 'left' && currentSlide === 0 && 'hidden'}
          ${direction === 'right' && currentSlide === slideCount - 1 && 'hidden'}
        `}
  />
);
