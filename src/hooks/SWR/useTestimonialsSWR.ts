import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { ITestimonialRequest, TTestimonialResp } from '@/types';
import {
  testimonialsApi,
  testimonialsEndPoint,
} from '@/utils/API/testimonials';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';
import { AxiosError } from 'axios';

export const useTestimonialsSWR = () => {
  const { setAlertInfo } = useGlobalContext();

  const handleRequestError = (err: any) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo: 'При запиті виникла помилка. Спробуйте трохи пізніше.',
    });
  };

  const { data, error, isLoading, mutate } = useSWR<
    TTestimonialResp[],
    AxiosError
  >(testimonialsEndPoint, testimonialsApi.getAll, {
    onError: handleRequestError,
  });

  const getItemById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: TTestimonialResp) => item._id === id);
    }
  };

  const deleteTestimonial = async (id: string) => {
    try {
      const updTestimonials = data?.filter((item) => item._id !== id);
      mutate(updTestimonials);
      await testimonialsApi.deleteById(id);
    } catch (error) {
      handleRequestError(error);
    }
  };

  const addNewTestimonial = async (item: ITestimonialRequest) => {
    try {
      const newTestimonial = await testimonialsApi.createNew(item);
      if (newTestimonial && data) {
        mutate([newTestimonial, ...data]);
      }
    } catch (error) {
      handleRequestError(error);
    }
  };

  const updateTestimonial = async (
    id: string,
    testimonial: ITestimonialRequest
  ) => {
    try {
      await testimonialsApi.updateById([id, testimonial]);
      mutate();
    } catch (error) {
      handleRequestError(error);
    }
  };

  return {
    testimonialsData: data,
    isLoading,
    isError: error,
    getItemById,
    deleteTestimonial,
    addNewTestimonial,
    updateTestimonial,
  };
};
