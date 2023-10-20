'use client';

import { AxiosError } from 'axios';
import useSWR from 'swr';

import { TResponseSliders, TSlideReq, TSlideResp } from '@/types';

import { heroSliderApi, slidersEndPoint } from '@/utils/API/heroSlider';
import { useRequestNotifiers } from './useRequestNotifiers';

export const useHeroSliderSWR = () => {
  const { setSuccess, handleRequestError } = useRequestNotifiers();

  const { data, error, isLoading, mutate } = useSWR<
    TResponseSliders,
    AxiosError
  >(slidersEndPoint, heroSliderApi.getAll, { onError: handleRequestError });

  const getByIdSlide = (id: string) =>
    data?.results.find((slide: TSlideResp) => slide._id == id);

  const delByIdSlider = async (id: string) => {
    try {
      const updSliders = data?.results.filter(
        (slide: TSlideResp) => slide._id !== id
      );
      const updData: TResponseSliders = { ...data!, results: updSliders! };

      setSuccess('видалено');
      mutate(updData);
      await heroSliderApi.deleteById(id);
    } catch (error) {
      handleRequestError(error);
    }
  };

  const addNewSlider = async (slide: TSlideReq) => {
    try {
      setSuccess('збережено');
      await heroSliderApi.createNew(slide);
      mutate();
    } catch (error) {
      handleRequestError(error);
      throw Promise.reject();
    }
  };

  const updateSlider = async (id: string, slide: TSlideReq) => {
    try {
      setSuccess('оновлено');
      await heroSliderApi.updateById(id, slide);
      mutate();
    } catch (error) {
      handleRequestError(error);
      throw Promise.reject();
    }
  };

  return {
    data,
    isLoading,
    isError: error,
    getByIdSlide,
    delByIdSlider,
    updateSlider,
    addNewSlider,
  };
};
