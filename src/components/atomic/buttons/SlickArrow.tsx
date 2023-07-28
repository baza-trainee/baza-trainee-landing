import { CustomArrowProps } from 'react-slick';
import { MultiArrow } from '../../common/icons';

interface IProps extends CustomArrowProps {
  direction: 'left' | 'right';
}

export const SlickArrow = (props: IProps) => {
  const {
    onClick,
    direction,
    currentSlide,
    slideCount = 0,
    className: stub,
  } = props;

  return (
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
};
