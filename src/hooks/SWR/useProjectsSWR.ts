import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { projectsEndpoint, projectsApi } from '@/utils/API/projects';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { AxiosError } from 'axios';
import { IProject, TResponseProjects, TProjectRequest } from '@/types';

const useProjectsSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  const swrKey = `${projectsEndpoint}?search=${search}`;

  const { data, error, isLoading, mutate } = useSWR<
    TResponseProjects,
    AxiosError
  >(swrKey, projectsApi.getAll, { keepPreviousData: true });

  useEffect(() => {
    if (!error) return;

    errorHandler(error);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[error?.status || 500],
      textInfo:
        'Не вдалося отримати перелік учасників. Спробуйте трохи пізніше.',
    });
  }, [error]);

  const handlerDeleteProject = (id: string) => {
    const updProjects = data?.results.filter((project) => project._id !== id);
    const options = {
      optimisticData: { ...data!, results: updProjects! },
      populateCache: false,
      revalidate: false,
    };

    mutate(() => projectsApi.deleteById(id), options);
  };

  const handlerCreateProject = (newProject: TProjectRequest) => {
    const options = {
      populateCache: (createdProject: IProject) => ({
        ...data!,
        results: [...(data?.results || []), createdProject],
      }),
      revalidate: false,
    };

    mutate(() => projectsApi.createNew(newProject), options);
  };

  const handlerUpdateProject = (id: string, updProject: TProjectRequest) => {
    const populateCache = (createdProject: IProject) => {
      const updProjects = data?.results.map((project) =>
        project._id === id ? createdProject : project
      );
      return { ...data!, results: updProjects! };
    };

    const options = { populateCache, revalidate: false };

    mutate(() => projectsApi.updateById(id, updProject), options);
  };

  const handlerSearchProject = (search: string) => {
    setSearch(search);
  };

  return {
    data,
    isLoading,
    isError: error,
    handlerCreateProject,
    handlerUpdateProject,
    handlerDeleteProject,
    handlerSearchProject,
  };
};

export { useProjectsSWR };
