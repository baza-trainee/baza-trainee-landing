import { useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { projectsEndpoint, projectsApi } from '@/utils/API/projects';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { AxiosError } from 'axios';
import { TProject, TResponseProjects, TProjectRequest } from '@/types';
import { prettyPrint } from '@/utils/prettyPrint';

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

  const handlerSearchProject = (search: string) => {
    setSearch(search);
  };

  const getProjectById = (id: string) => {
    return data?.results.find((project) => project._id === id);
  };

  const handlerCreateProject = (newProject: TProjectRequest) => {
    const options = {
      populateCache: (createdProject: TProject) => ({
        ...data!,
        results: [createdProject, ...(data?.results || [])],
      }),
      revalidate: false,
    };

    mutate(() => projectsApi.createNew(newProject), options)
      .then(console.log)
      // .then((r) => prettyPrint(r, 'ProSWR'))
      // .catch(handleRequestError)
      .catch((e) => console.log('ERROR!!!!!', e));
  };

  const updateProject = (id: string, updProject: TProjectRequest) => {
    // const populateCache = (createdProject: TProject) => {
    //   console.log("proj>.", createdProject);
    //   const updProjects = data?.results.map((project) =>
    //     project._id === id ? createdProject : project
    //   );
    //   return { ...data!, results: updProjects! };
    // };

    // const options = { populateCache, revalidate: false }; // TODO: implement populate cache

    mutate(() => projectsApi.updateById(id, updProject)).catch(
      handleRequestError
    );
  };



  

  const handlerDeleteProject = (id: string) => {
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
    handlerSearchProject,
    getProjectById,
    handlerCreateProject,
    updateProject,
    handlerDeleteProject,
  };
};

export { useProjectsSWR };
