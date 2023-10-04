'use client';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { IHeroSlider, THeroSliderData } from '@/types';
import { heroSliderApi, slidersEndPoint } from '@/utils/API/heroSlider';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

export const useHeroSliderSWR = () => {
  const { setAlertInfo } = useGlobalContext();

  const handleRequestError = (err: AxiosError) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo: 'При запиті виникла помилка. Спробуйте трохи пізніше.',
    });
  };

  const { data, error, isLoading, mutate } = useSWR<
    THeroSliderData,
    AxiosError
  >(slidersEndPoint, heroSliderApi.getAll, { onError: handleRequestError });

  const getByIdSlider = (id: string) =>
    data?.results.filter((slide: IHeroSlider) => slide._id == id);

  const delByIdSlider = async (id: string) => {
    try {
      const updSliders = data?.results.filter(
        (slide: IHeroSlider) => slide._id !== id
      );
      const updData: THeroSliderData = { ...data!, results: updSliders! };

      mutate(updData);
      await heroSliderApi.deleteById(id);
    } catch (error) {
      errorHandler(error);
    }
  };

  const addNewSlider = async (slider: IHeroSlider) => {
    try {
      const updSliders = [...(data?.results || []), slider];
      const updData: THeroSliderData = { ...data!, results: updSliders! };

      mutate(updData);
      await heroSliderApi.createNew(slider);
    } catch (error) {
      errorHandler(error);
    }
  };

  const updateSlider = async (id: string, slider: IHeroSlider) => {
    try {
      const updSliders = data?.results.map((slide: IHeroSlider) =>
        slide._id === id ? slider : slide
      );
      const updData: THeroSliderData = { ...data!, results: updSliders! };

      mutate(updData);
      await heroSliderApi.updateById([id, slider]);
    } catch (error) {
      errorHandler(error);
    }
  };

  return {
    data,
    isLoading,
    isError: error,
    getByIdSlider,
    delByIdSlider,
    updateSlider,
    addNewSlider,
  };
};
