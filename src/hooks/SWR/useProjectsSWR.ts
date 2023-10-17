import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { TProjectReq, TResponseProjects } from '@/types';

import { projectsApi, projectsEndpoint } from '@/utils/API/projects';
import { useRequestNotifiers } from './useRequestNotifiers';

const useProjectsSWR = () => {
  const { setSuccess, handleRequestError } = useRequestNotifiers();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState<number>();
  const [limit, setLimit] = useState<number>();

  const swrKey = `${projectsEndpoint}?search=${search}`;

  const { data, error, isLoading, mutate } = useSWR<
    TResponseProjects,
    AxiosError
  >([swrKey, search], () => projectsApi.getAll({ page, search, limit }), {
    keepPreviousData: !!search,
    onError: handleRequestError,
  });

  const searchProject = (search: string) => {
    setSearch(search);
    // setPage(1);
  };

  const changePage = (newPage: number) => {
    setPage(newPage);
  };
  const changeLimit = (newLimit: number) => {
    setPage(newLimit);
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

      setSuccess('збережено');
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

      setSuccess('оновлено');
      mutate(updData);
    } catch (err) {
      handleRequestError(err);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const updProjects = data?.results.filter((project) => project._id !== id);
      const updData: TResponseProjects = { ...data!, results: updProjects! };

      setSuccess('видалено');
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
    changePage,
    changeLimit,
  };
};

export { useProjectsSWR };
