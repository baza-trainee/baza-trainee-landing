import { dispatcherType, methodType, responseDataType } from '@/types/typesAPI';
import { useEffect, useRef, useState } from 'react';

export const useAPI = <T,>(
  method: methodType<T>
): [dispatcherType<T>, responseDataType, Boolean, Boolean] => {
  const [doFetch, setDoFetch] = useState<Boolean>(false);
  const [data, setData] = useState<responseDataType>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);
  let body: any = useRef(null);

  const dispatch: dispatcherType<T> = (payload?: T): void => {
    setDoFetch(true);
    body.current = payload;
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
        const response = await method(body.current);
        setData(response.data);
      } catch (error: any) {
        setData({
          message: error.message,
          statusText:
            error.response?.data[0]?.msg ||
            error.response?.data?.message ||
            'none',
          status: error.response?.status,
        });
        setIsError(true);
      } finally {
        setIsLoading(false);
        setDoFetch(false);
        body.current = null;
      }
      return data;
    };
    fetcher();

    return () => {
      setDoFetch(false);
    };
  }, [data, doFetch, method]);

  return [dispatch, data, isError, isLoading];
};
