import axios from 'axios';
import { useEffect, useState } from 'react';

export const bazaAPI = axios.create({
  baseURL: 'https://baza-trainee-7ain.onrender.com/',
});

export const useAPI = (
  method: Function
): [Function, any, Boolean, Object | Boolean] => {
  const [doFetch, setDoFetch] = useState<Boolean>(false);
  const [payload, setPayload] = useState<any>(null);
  const [data, setData] = useState<Object>({});
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
        setData({});
        setIsError(false);
        setIsLoading(true);
        const response = await method(payload);

        if (response.status === 200 || response.status === 201) {
          setData(response.data);
          setIsError(false);
        } else {
          setData({});
          throw {
            message: response.message,
            responseMessage:
              response.response?.data[0]?.msg ||
              response.response?.data?.message ||
              'none',
            status: response.response.status,
          };
        }
      } catch (error: any) {
        console.log(error);
        setIsError(error);
      } finally {
        setIsLoading(false);
        setDoFetch(false);
        setPayload(null);
      }
      return data;
    };
    fetcher();
  }, [doFetch]);

  return [dispatch, data, isLoading, isError];
};
