// import { useEffect } from 'react';
import useSWR from 'swr';

import { bazaAPI } from '@/utils/API/config';

import { IHeroSlider } from '@/types';
import { AxiosError } from 'axios';

const heroSliderEndpoint = '/heroslider';

const getAllProjects = async () => {
  return await bazaAPI.get<IHeroSlider>(heroSliderEndpoint);
};

const deleteById = async (id: string) => {
  return await bazaAPI.delete(heroSliderEndpoint + '/' + id);
};

const fetcher = async () => {
  return await getAllProjects().then((res) => res.data);
};

export const useHeroSliderSWR = () => {
  const { data, error, isLoading } = useSWR<IHeroSlider, AxiosError>(
    heroSliderEndpoint,
    fetcher
  );

  //   const handlerDeleteProject = async (id: string) => {
  //     try {
  //       const newProjects =
  //         data?.results.filter((project) => project._id !== id) || [];

  //       const options = { optimisticData: { ...data, results: newProjects } };

  //       mutate(heroSliderEndpoint, await deleteById(id), options);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return {
    data,
    isLoading,
    isError: error,
    // handlerDeleteProject,
  };
};
