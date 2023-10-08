import { ReactElement, useEffect } from 'react';

import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';

import { useGlobalContext } from '@/store/globalContext';

type Props = {
  id: string;
  children: ReactElement;
};

export const SliderDeleteButton: any = ({ id, children }: Props) => {
  const { delByIdSlider, isError } = useHeroSliderSWR();
  const { setAlertInfo } = useGlobalContext();

  const handlerModalDelete = () => {
    setAlertInfo({
      state: 'warning',
      title: 'Підтвердження',
      textInfo: 'Точно бажаєте видалити слайд?',
      func: () => delByIdSlider(id),
    });
  };

  useEffect(() => {
    if (isError) {
      setAlertInfo({
        state: 'error',
        title: 'Помилка',
        textInfo: 'Сталася помилка при видалені слайду',
      });
    }
  }, [isError, setAlertInfo]);

  return (
    <button type="button" onClick={() => handlerModalDelete()}>
      {children}
    </button>
  );
};
