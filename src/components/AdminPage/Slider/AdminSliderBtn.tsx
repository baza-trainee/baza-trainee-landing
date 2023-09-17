import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { ReactElement } from 'react';

type Props = {
  id: string;
  children: ReactElement;
};

export const SliderDeleteButton: any = ({ id, children }: Props) => {
  const { delByIdSlider } = useHeroSliderSWR();

  const DeleteByIdHandle = (id: string) => {
    try {
      const res = delByIdSlider(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={() => DeleteByIdHandle(id)}>
      {children}
    </button>
  );
};
