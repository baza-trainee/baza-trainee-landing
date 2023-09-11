'use client';
import { useGlobalContext } from '@/store/globalContext';
import { IHeroSlider } from '@/types';
import { heroSliderApi, slidersEndPoint } from '@/utils/API/heroSlider';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';

export const useHeroSliderSWR = () => {
  const { setAlertInfo } = useGlobalContext();

  const { data, error, isLoading } = useSWR<AxiosResponse, AxiosError>(
    slidersEndPoint,
    heroSliderApi.getAll,
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (!error) return;

    errorHandler(error);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[error?.status || 500],
      textInfo: 'Не вдалося отримати перелік слайдів. Спробуйте трохи пізніше.',
    });
  }, [error]);

  // const getAllSliders = async () => {
  //   return await heroSliderApi.getAll();
  // };

  const getByIdSlider = async (id: string) => {
    return await heroSliderApi.getById(id);
  };

  const delByIdSlider = async (id: string) => {
    return await heroSliderApi.deleteById(id);
  };

  const addNewSlider = async (slider: IHeroSlider) => {
    return await heroSliderApi.createNew(slider);
  };

  const updateSlider = async (id: string, slider: IHeroSlider) => {
    return await heroSliderApi.updateById([id, slider]);
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
