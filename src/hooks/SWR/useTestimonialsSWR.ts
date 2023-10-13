import { AxiosError } from 'axios';
import useSWR from 'swr';

import { ITestimonialRequest, TTestimonialResp } from '@/types';

import {
  testimonialsApi,
  testimonialsEndPoint,
} from '@/utils/API/testimonials';

import { useRequestNotifiers } from './useRequestNotifiers';

export const useTestimonialsSWR = () => {
  const { setSuccess, handleRequestError } = useRequestNotifiers();

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
      setSuccess('Відгук успішно видалено');
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
        setSuccess('Відгук успішно збережено');
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
      setSuccess('Відгук успішно оновлено');
      mutate();
      await testimonialsApi.updateById([id, testimonial]);
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
