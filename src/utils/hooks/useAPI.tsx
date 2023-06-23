import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAPI = (
  method: Function
): [Function, Object | null, Boolean, Object | Boolean] => {
  const [doFetch, setDoFetch] = useState<Boolean>(false);
  const [payload, setPayload] = useState<any>(null);
  const [data, setData] = useState<Object | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Object | Boolean>(false);

  const dispatch: Function = (payload: any = null) => {
    setDoFetch(true);
    setPayload(payload);
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

// Розібратись дженерики
// Подивитись як робиться АРІ
// isError - boolean
// baseURL
