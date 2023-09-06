// import { useEffect } from 'react';
import { IHeroSlider } from '@/types';
import { heroSliderApi, slidersEndPoint } from '@/utils/API/heroSlider';
import { AxiosError, AxiosResponse } from 'axios';
import useSWR from 'swr';

export const useHeroSliderSWR = () => {
  const { data, error, isLoading } = useSWR<AxiosResponse, AxiosError>(
    slidersEndPoint,
    heroSliderApi.getAll,
    { keepPreviousData: true }
  );

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
