import { CustomArrowProps } from 'react-slick';
import { MultiArrow } from '../../common/icons';

interface IProps extends CustomArrowProps {
  direction: 'left' | 'right';
  type: 'hero' | 'testimonials';
}

export const SlickArrow = ({ onClick, direction, type }: IProps) => {
  const options = {
    hero: { normal: '5%', xl: '10%' },
    testimonials: { normal: '0', xl: '0' },
  };
  const xl = options[type].xl;
  const normal = options[type].normal;
  return (
    onClick && (
      <MultiArrow
        direction={direction}
        className={`absolute z-10 cursor-pointer ${direction}-[${normal}] xl:${direction}-[${xl}] top-1/2 -translate-y-1/2`}
        onClick={onClick}
        bigSize
      />
    )
  );
};
