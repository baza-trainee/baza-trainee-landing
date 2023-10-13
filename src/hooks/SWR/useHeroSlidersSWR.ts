'use client';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { IHeroSlider, THeroSliderData } from '@/types';

import { heroSliderApi, slidersEndPoint } from '@/utils/API/heroSlider';
import { useRequestNotifiers } from './useRequestNotifiers';

export const useHeroSliderSWR = () => {
  const { setSuccess, handleRequestError } = useRequestNotifiers();

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

      setSuccess('видалено');
      mutate(updData);
      await heroSliderApi.deleteById(id);
    } catch (error) {
      handleRequestError(error);
    }
  };

  const addNewSlider = async (slider: IHeroSlider) => {
    try {
      const updSliders = [...(data?.results || []), slider];
      const updData: THeroSliderData = { ...data!, results: updSliders! };

      setSuccess('збережено');
      mutate(updData);
      await heroSliderApi.createNew(slider);
    } catch (error) {
      handleRequestError(error);
    }
  };

  const updateSlider = async (id: string, slider: IHeroSlider) => {
    try {
      const updSliders = data?.results.map((slide: IHeroSlider) =>
        slide._id === id ? slider : slide
      );
      const updData: THeroSliderData = { ...data!, results: updSliders! };

      setSuccess('оновлено');
      mutate(updData);
      await heroSliderApi.updateById([id, slider]);
    } catch (error) {
      handleRequestError(error);
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
