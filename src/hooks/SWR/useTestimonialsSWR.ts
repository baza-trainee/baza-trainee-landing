import { useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import {
  testimonialsApi,
  testimonialsEndPoint,
} from '@/utils/API/testimonials';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { ITestimonial } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';

export const useTestimonialsSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  // const swrKey = `${testimonialsEndPoint}?search=${search}`;

  const handleRequestError = (err: AxiosError) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo: 'При запиті виникла помилка. Спробуйте трохи пізніше.',
    });
  };

  const { data, error, isLoading, mutate } = useSWR(
    testimonialsEndPoint,
    testimonialsApi.getAll,
    {
      keepPreviousData: true,
      onError: errorHandler,
    }
  );

  const updateAndMutate = (
    updSliders: ITestimonial[],
    action: () => Promise<AxiosResponse<any, any>>
  ) => {
    try {
      mutate(action, {
        optimisticData: { ...data!, data: updSliders },
        revalidate: false,
        populateCache: false,
      });
    } catch (error) {
      errorHandler(error);
    }
  };

  const getByIdSlider = (id: string) => {
    const slideById = data?.filter(
      (slide: ITestimonial) => slide._id == id
    );
    return slideById;
  };

  const delByIdSlider = (id: string) => {
    const updSliders = data?.filter(
      (slide: ITestimonial) => slide._id !== id
    );
    updateAndMutate(updSliders!, () => testimonialsApi.deleteById(id));
  };

  const addNewSlider = async (slider: ITestimonial) => {
    const updSliders = [...(data || []), slider];
    updateAndMutate(updSliders!, () => testimonialsApi.createNew(slider));
  };

  const updateSlider = async (id: string, slider: ITestimonial) => {
    const updSliders = data?.map((slide: ITestimonial) =>
      slide._id === id ? slider : slide
    );
    updateAndMutate(updSliders, () => testimonialsApi.updateById([id, slider]));
  };

  
  return {
    testimonialsData: data,
    isLoading,
    isError: error,
    getByIdSlider,
    delByIdSlider,
    updateSlider,
    addNewSlider,
  };
};
