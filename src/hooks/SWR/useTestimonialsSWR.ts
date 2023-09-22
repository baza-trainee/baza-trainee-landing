import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import {
  testimonialsApi,
  testimonialsEndPoint,
} from '@/utils/API/testimonials';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { ITestimonial } from '@/types';
import { AxiosError } from 'axios';

export const useTestimonialsSWR = () => {
  const { setAlertInfo } = useGlobalContext(); 

  const handleRequestError = (err: AxiosError) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo: 'При запиті виникла помилка. Спробуйте трохи пізніше.',
    });
  };

  const { data, error, isLoading } = useSWR(  
    testimonialsEndPoint,
    testimonialsApi.getAll,
    {
      keepPreviousData: true,
      onError: handleRequestError,
    }
  );

  // const updateAndMutate = (
  //   updSliders: ITestimonial[],
  //   action: () => Promise<AxiosResponse<any, any>>
  // ) => {
  //   try {
  //     mutate(action, {
  //       optimisticData: { data: updSliders },
  //       revalidate: false,
  //       populateCache: false,
  //     });
  //   } catch (error) {
  //     errorHandler(error);
  //   }
  // };

  const getByIdSlider = (id: string) => {
    const slideById = Array.isArray(data) &&
    data.length && data?.filter(
      (slide: ITestimonial) => slide._id == id
    );
    return slideById;
  };

  const delByIdSlider = (id: string) => {
    const updSliders = Array.isArray(data) &&
    data.length && data?.filter(
      (slide: ITestimonial) => slide._id !== id
    );
    testimonialsApi.deleteById(id);
    return updSliders;
  };

  const addNewSlider = async (slider: ITestimonial) => {
    const updSliders = [...(Array.isArray(data) &&
      data.length && data || []), slider];
    testimonialsApi.createNew(slider);
    return updSliders;
  };

  const updateSlider = async (id: string, slider: ITestimonial) => {
    const updSlider = Array.isArray(data) &&
    data.length && data?.map((slide: ITestimonial) =>
      slide._id === id ? slider : slide
    );
    testimonialsApi.updateById([id, slider]);
    return updSlider;
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
