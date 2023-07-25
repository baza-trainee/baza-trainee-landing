import { CustomArrowProps } from 'react-slick';
import { MultiArrow } from '../../common/icons';

interface IProps extends CustomArrowProps {
  direction: 'left' | 'right';
  classProp: string;
}

export const SlickArrow = ({ onClick, direction, classProp }: IProps) =>
  onClick && (
    <MultiArrow
      direction={direction}
      className={`absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer ${classProp}`}
      onClick={onClick}
      bigSize
    />
  );
