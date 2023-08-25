import useSWR from 'swr';
import projectsApi from '@/utils/API/projects';
import { TResponseProjects } from '@/types';
import { AxiosError } from 'axios';
import { errorHandler } from '@/utils/errorHandler';

export const useProjectsSWR = () => {
  const fetcher = () =>
    projectsApi
      .getAll()
      .then((res) => res.data)
      .catch(errorHandler);

  const { data, error, isLoading } = useSWR<TResponseProjects, AxiosError>(
    `/projects`,
    fetcher
  );

  return {
    projects: data,
    isLoading,
    isError: error,
  };
};
