import { useState } from 'react';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { TProjectReq, TResponseProjects } from '@/types';

import { useGlobalContext } from '@/store/globalContext';

import { projectsApi, projectsEndpoint } from '@/utils/API/projects';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

const useProjectsSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  const swrKey = `${projectsEndpoint}?search=${search}`;

  const handleRequestError = (err: any) => {
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

  const createProject = async (newProject: TProjectReq) => {
    try {
      const createdProject = await projectsApi.createNew(newProject);
      const updData: TResponseProjects = {
        ...data!,
        results: [createdProject, ...(data?.results || [])],
      };

      mutate(updData);
    } catch (err) {
      handleRequestError(err);
    }
  };

  const updateProject = async (id: string, updProject: TProjectReq) => {
    try {
      const updatedProject = await projectsApi.updateById(id, updProject);
      const updProjects = data?.results.map((project) =>
        project._id === id ? updatedProject : project
      );
      const updData: TResponseProjects = { ...data!, results: updProjects! };

      mutate(updData);
    } catch (err) {
      handleRequestError(err);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const updProjects = data?.results.filter((project) => project._id !== id);
      const updData: TResponseProjects = { ...data!, results: updProjects! };

      mutate(updData);
      await projectsApi.deleteById(id);
    } catch (err) {
      handleRequestError(err);
    }
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
