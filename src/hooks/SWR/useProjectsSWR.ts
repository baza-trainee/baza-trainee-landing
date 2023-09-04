import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { projectsEndpoint, projectsApi } from '@/utils/API/projects';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { AxiosError, AxiosResponse } from 'axios';
import { IProject, TResponseProjects } from '@/types';

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

  const updateAndMutate = (
    updProjects: IProject[],
    action: () => Promise<AxiosResponse<any, any>>
  ) => {
    mutate(action, {
      optimisticData: { ...data!, results: updProjects },
      revalidate: false,
      populateCache: false,
    });
  };

  const handlerDeleteProject = (id: string) => {
    const updProjects = data?.results.filter((member) => member._id !== id);
    updateAndMutate(updProjects!, () => projectsApi.deleteById(id));
  };

  const handlerCreateProject = (newProject: IProject) => {
    const updProjects = [...(data?.results || []), newProject];
    updateAndMutate(updProjects, () => projectsApi.createNew(newProject));
  };

  const handlerUpdateProject = (id: string, updProject: IProject) => {
    const updProjects = data?.results.map((member) =>
      member._id === id ? updProject : member
    );
    updateAndMutate(updProjects!, () => projectsApi.updateById(id, updProject));
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
