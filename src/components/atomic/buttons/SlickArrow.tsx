import { CustomArrowProps } from 'react-slick';
import { MultiArrow } from '../../common/icons';

interface IProps extends CustomArrowProps {
  direction: 'left' | 'right';
  className: string;
}

export const SlickArrow = ({ onClick, direction, className }: IProps) =>
  onClick && (
    <MultiArrow
      direction={direction}
      className={`absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer ${className}`}
      onClick={onClick}
      bigSize
    />
  );
