import { useEffect, useState } from 'react';

export const useAPI = (fetcherRef: Function, payload?: any) => {
  const [data, setData] = useState<Object>({});
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Object>(false);

  useEffect(() => {
    if (payload) {
      if (Object.keys(payload).length === 0) {
        return;
      }
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
