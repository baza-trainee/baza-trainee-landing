import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { ITestimonial, ITestimonialRequest } from '@/types';
import {
  testimonialsApi,
  testimonialsEndPoint,
} from '@/utils/API/testimonials';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';
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

  const { data, error, isLoading, mutate } = useSWR(
    testimonialsEndPoint,
    testimonialsApi.getAll,
    {
      onError: handleRequestError,
    }
  );

  const getItemById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      const itemById = data?.find((item: ITestimonial) => item._id === id);
      return itemById;
    }
  };

  const deleteTestimonial = async (id: string) => {
    try {
      const updProjects = data?.filter((item) => item._id !== id);
      const options = {
        optimisticData: { ...data!, results: updProjects! },
        populateCache: false,
        revalidate: true,
      };
      await mutate(() => testimonialsApi.deleteById(id), options)
        .catch(handleRequestError)
        .catch((error) => console.log('[ERROR_DELETE_TESTIMONIAL]', error));
    } catch (error) {
      errorHandler(error);
    }
  };

  const addNewTestimonial = async (item: ITestimonialRequest) => {
    try {
      const options = {
        populateCache: (newTestimonial: ITestimonial) => ({
          ...data!,
          results: [newTestimonial, ...(data || [])],
        }),
        revalidate: true,
      };
      mutate(() => testimonialsApi.createNew(item), options)
        .catch(handleRequestError)
        .catch((error) => console.log('[ERROR_CREATE_TESTIMONIAL]', error));
    } catch (error) {
      errorHandler(error);
    }
  };

  const updateTestimonial = async (
    id: string,
    testimonial: ITestimonialRequest
  ) => {
    try {
      const options = {
        populateCache: (newTestimonial: ITestimonial) => ({
          ...data!,
          results: [newTestimonial, ...(data || [])],
        }),
        revalidate: true,
      };
      mutate(() => testimonialsApi.updateById([id, testimonial]), options)
        .catch(handleRequestError)
        .catch((error) => console.log('[ERROR_UPDATE_TESTIMONIAL]', error));
    } catch (error) {
      errorHandler(error);
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
