import {
  dispatcherType,
  methodType,
  requestPayloadType,
  responseDataType,
} from '@/types/typesAPI';
import { useEffect, useState } from 'react';

export const useAPI = <T,>(
  method: methodType
): [dispatcherType, responseDataType<T>, Boolean, Boolean] => {
  const [doFetch, setDoFetch] = useState<Boolean>(false);
  const [payload, setPayload] = useState<T | requestPayloadType>(null);
  const [data, setData] = useState<responseDataType<T>>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);

  const dispatch: dispatcherType = (payload?: T | requestPayloadType): void => {
    setDoFetch(true);
    setPayload(payload || null);
  };

  useEffect(() => {
    const fetcher = async () => {
      if (!doFetch) {
        return;
      }

      try {
        setData(null);
        setIsError(false);
        setIsLoading(true);
        const response = await method(payload);

        if (response.status === 200 || response.status === 201) {
          setData(response.data);
          setIsError(false);
        }
      } catch (error: any) {
        setData({
          message: error.message,
          responseMessage:
            error.response?.data[0]?.msg ||
            error.response?.data?.message ||
            'none',
          status: error.response.status,
        });
        setIsError(true);
      } finally {
        setIsLoading(false);
        setDoFetch(false);
        setPayload(null);
      }
      return data;
    };
    fetcher();

    return () => {
      setDoFetch(false);
    };
  }, [doFetch]);

  return [dispatch, data, isLoading, isError];
};
