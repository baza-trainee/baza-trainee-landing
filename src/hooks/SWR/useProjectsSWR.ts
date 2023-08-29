import { useEffect } from 'react';
import useSWR, { mutate } from 'swr';

import { bazaAPI } from '@/utils/API/config';
import { errorHandler } from '@/utils/errorHandler';

import { TResponseProjects, byIdRequest } from '@/types';
import { AxiosError } from 'axios';

const projectsEndpoint = '/projects';

const getAllProjects = async (limit?: number) => {
  const queryLimit = limit ? `?limit=${limit}` : '';
  return await bazaAPI.get<TResponseProjects>(projectsEndpoint + queryLimit);
};

const deleteById = async (id: string) => {
  return await bazaAPI.delete(projectsEndpoint + '/' + id);
};

// const updateById = async ([id, payload]: updateByIdRequest) => {
//   return bazaAPI.patch(`/projects/${id}`, payload);
// };

const fetcher = async () => {
  return await getAllProjects().then((res) => res.data);
};

export const useProjectsSWR = () => {
  const { data, error, isLoading } = useSWR<TResponseProjects, AxiosError>(
    projectsEndpoint,
    fetcher
  );

  useEffect(() => {
    error && errorHandler(error);
  }, [error]);

  const handlerDeleteProject = async (id: string) => {
    try {
      const newProjects =
        data?.results.filter((project) => project._id !== id) || [];

      const options = { optimisticData: { ...data, results: newProjects } };

      mutate(projectsEndpoint, await deleteById(id), options);
    } catch (error) {
      errorHandler(error);
    }
  };

  return {
    data,
    isLoading,
    isError: error,
    handlerDeleteProject,
  };
};
