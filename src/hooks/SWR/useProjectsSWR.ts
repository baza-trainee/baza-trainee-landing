import { useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { projectsApi, projectsEndpoint } from '@/utils/API/projects';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { TProject, TProjectRequest, TResponseProjects } from '@/types';
import { AxiosError } from 'axios';

const useProjectsSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  const swrKey = `${projectsEndpoint}?search=${search}`;

  const handleRequestError = (err: AxiosError) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo: 'При запиті виникла помилка. Спробуйте трохи пізніше.',
    });
  };

  const { data, error, isLoading, mutate } = useSWR<
    TResponseProjects,
    AxiosError
  >(swrKey, projectsApi.getAll, {
    keepPreviousData: true,
    onError: handleRequestError,
  });

  const searchProject = (search: string) => {
    setSearch(search);
  };

  const getProjectById = (id: string) => {
    return data?.results.find((project) => project._id === id);
  };

  const createProject = (newProject: TProjectRequest) => {
    const options = {
      populateCache: (createdProject: TProject) => ({
        ...data!,
        results: [createdProject, ...(data?.results || [])],
      }),
    };

    mutate(() => projectsApi.createNew(newProject), options).catch(
      errorHandler
    );
  };

  const updateProject = (id: string, updProject: TProjectRequest) => {
    const options = {
      populateCache: (createdProject: TProject) => {
        const updProjects = data?.results.map((project) =>
          project._id === id ? createdProject : project
        );
        return { ...data!, results: updProjects! };
      },
    };

    mutate(() => projectsApi.updateById(id, updProject), options).catch(
      handleRequestError
    );
  };

  const deleteProject = (id: string) => {
    const updProjects = data?.results.filter((project) => project._id !== id);
    const options = {
      optimisticData: { ...data!, results: updProjects! },
      populateCache: false,
      revalidate: false,
    };

    mutate(() => projectsApi.deleteById(id), options).catch(handleRequestError);
  };

  return {
    projectsData: data,
    isLoading,
    isError: error,
    searchProject,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
  };
};

export { useProjectsSWR };
