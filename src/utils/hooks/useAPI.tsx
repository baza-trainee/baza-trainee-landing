import { useEffect, useState } from 'react';

export const useAPI = (methodRef: Function) => {
  const [data, setData] = useState<Object>({});
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Object>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await methodRef();

        if (response.status === 200) {
          setData(response.data);
          setIsError(false);
        } else {
          console.log(response);
          throw new Error(response);
        }
        setIsLoading(false);
      } catch (error: any) {
        console.log(error);
        setIsError(error);
        setIsLoading(false);
      }
    })();
  }, []);

  return [data, isLoading, isError];
};
