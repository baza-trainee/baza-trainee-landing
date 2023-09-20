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

  const { data, error, isLoading, mutate } = useSWR<AxiosResponse, AxiosError>(
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

  const updateAndMutate = (
    updSliders: IHeroSlider[],
    action: () => Promise<AxiosResponse<any, any>>
  ) => {
    mutate(action, {
      optimisticData: { ...data!, data: updSliders },
      revalidate: false,
      populateCache: false,
    });
  };

  const getByIdSlider = (id: string) => {
    const slideById = data?.data.filter(
      (slide: IHeroSlider) => slide._id == id
    );
    return slideById;
  };

  // const delByIdSlider = async (id: string) => {
  //   return await heroSliderApi.deleteById(id);
  // };
  const delByIdSlider = (id: string) => {
    const updSliders = data?.data.filter(
      (slide: IHeroSlider) => slide._id !== id
    );
    updateAndMutate(updSliders!, () => heroSliderApi.deleteById(id));
  };

  const addNewSlider = async (slider: IHeroSlider) => {
    const updSliders = [...(data?.data || []), slider];
    updateAndMutate(updSliders!, () => heroSliderApi.createNew(slider));
  };

  const updateSlider = async (id: string, slider: IHeroSlider) => {
    const updSliders = data?.data.map((slide: IHeroSlider) =>
      slide._id === id ? slider : slide
    );
    updateAndMutate(updSliders, () => heroSliderApi.updateById([id, slider]));
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
