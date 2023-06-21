import axios from 'axios';
import { useEffect, useState } from 'react';

export const bazaAPI = axios.create({
  baseURL: 'https://baza-trainee-7ain.onrender.com/',
});

export const useAPI = (fetcherRef: Function, payload: any = null) => {
  const [data, setData] = useState<Object>({});
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Object>(false);

  useEffect(() => {
    if (!payload) {
      return;
    }

    const fetcher = async () => {
      try {
        setIsLoading(true);
        const response = await fetcherRef(payload);

        if (response.status === 200) {
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
      }
      return data;
    };
    fetcher();
  }, [payload]);

  return [data, isLoading, isError];
};
