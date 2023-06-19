import { useState } from 'react';

export const useAPI = async (methodRef: Function): Promise<Object> => {
  const [data, setData] = useState<Object>({});
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Object>(false);

  try {
    const response = await methodRef();
    if (response) {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }

  return [data, isLoading, isError];
};
