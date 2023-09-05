import heroSliderApi from '@/utils/API/heroSlider';
import { ReactElement } from 'react';

type Props = {
  id: string;
  children: ReactElement;
};

export const SliderDeleteButton: any = ({ id, children }: Props) => {
  const DeleteByIdHandle = async (id: string) => {
    try {
      const res = await heroSliderApi.deleteById(id);
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
