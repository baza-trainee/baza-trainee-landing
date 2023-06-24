import { useEffect, useState } from 'react';

type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const useApi = <T>(url: string, method: HttpMethod = 'GET', body?: any) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        const responseData: T = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error as Error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url, method, body]);

  return { data, isLoading, error };
};

export default useApi;
