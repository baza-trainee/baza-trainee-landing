import { CustomArrowProps } from 'react-slick';
import { RotaryArrow } from '../common/icons';

interface IProps extends CustomArrowProps {
  direction: 'left' | 'right';
  color?: string;
}

export const SlickArrow = ({ onClick, direction, color }: IProps) =>
  onClick && (
    <RotaryArrow
      direction={direction}
      className={`absolute 
      ${direction === 'left' && 'left-[5%] xl:left-[10%]'} 
      ${direction === 'right' && 'right-[5%] xl:right-[10%]'} 
      top-1/2 z-10 -translate-y-1/2`}
      onClick={onClick}
      color={color}
    />
  );
