import { errorHandler } from '@/utils/errorHandler';
import { createImgUrl } from '@/utils/imageHandler';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';

const fetchImage = async (imgName: string) => {
  const imageUrl = createImgUrl(imgName);

  const response = await fetch(imageUrl);
  return await response.blob();

  // return new File([blob], imgName, { type: blob.type });
};

export const useProjectImgSWR = (imgName: string) => {
  // const { setAlertInfo } = useGlobalContext();

  const { data, error } = useSWR<Blob, AxiosError>(imgName, fetchImage);

  //   const handleRequestError = (err: AxiosError) => {
  //     errorHandler(err);
  //     setAlertInfo({
  //       state: 'error',
  //       title: networkStatusesUk[err?.status || 500],
  //       textInfo: 'При запиті виникла помилка. Спробуйте трохи пізніше.',
  //     });
  //   };

  useEffect(() => {
    //   error && handleRequestError(error);
    error && errorHandler(error);
  }, [error]);

  return {
    projectImgBlob: data,
    isError: error,
  };
};
