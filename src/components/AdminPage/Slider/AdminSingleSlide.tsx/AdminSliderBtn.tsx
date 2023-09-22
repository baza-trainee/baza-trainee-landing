import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { ReactElement } from 'react';

type Props = {
  id: string;
  children: ReactElement;
};

export const SliderDeleteButton: any = ({ id, children }: Props) => {
  const { delByIdSlider } = useHeroSliderSWR();

  return (
    <button type="button" onClick={() => delByIdSlider(id)}>
      {children}
    </button>
  );
};
