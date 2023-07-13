import { CustomArrowProps } from 'react-slick';
import { MultiArrow } from '../../common/icons';

interface IProps extends CustomArrowProps {
  direction: 'left' | 'right';
}

export const SlickArrow = ({ onClick, direction }: IProps) =>
  onClick && (
    <MultiArrow
      direction={direction}
      className={`absolute z-10 cursor-pointer
      ${direction === 'left' && 'left-[5%] xl:left-[10%]'} 
      ${direction === 'right' && 'right-[5%] xl:right-[10%]'} 
      top-1/2 -translate-y-1/2`}
      onClick={onClick}
      bigSize
    />
  );
