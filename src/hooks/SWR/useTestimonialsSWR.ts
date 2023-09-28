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

  const { data, error, isLoading, mutate } = useSWR(
    testimonialsEndPoint,
    testimonialsApi.getAll,
    {
      onError: handleRequestError,
    }
  );

  const getByIdSlider = (id: string) => {
    const slideById =
      Array.isArray(data) &&
      data.length &&
      data.filter((slide: ITestimonial) => slide._id === id);
    return slideById;
  };

  const delByIdSlider = async (id: string) => {
    try {
      const newData =
        Array.isArray(data) &&
        data.length &&
        data.filter((slide: ITestimonial) => slide._id !== id);

      testimonialsApi.deleteById(id);
      await mutate({ newData });
    } catch (error) {
      errorHandler(error);
    }
  };

  // const addNewSlider = async (slider: ITestimonial) => {
  //   try {
  //     const newData = [
  //       ...((Array.isArray(data) && data.length && data) || []),
  //       slider,
  //     ];
  //     testimonialsApi.createNew(slider);
  //     await mutate({ newData });
  //   } catch (error) {
  //     errorHandler(error);
  //   }
  // };

  // const updateSlider = async (id: string, slider: ITestimonial) => {
  //   try {
  //     const newData =
  //       Array.isArray(data) &&
  //       data.length &&
  //       data.map((slide: ITestimonial) => (slide._id === id ? slider : slide));
  //     testimonialsApi.updateById([id, slider]);
  //     await mutate({ newData });
  //   } catch (error) {
  //     errorHandler(error);
  //   }
  // };

  return {
    testimonialsData: data,
    isLoading,
    isError: error,
    getByIdSlider,
    delByIdSlider,
    // updateSlider,
    // addNewSlider,
  };
};
