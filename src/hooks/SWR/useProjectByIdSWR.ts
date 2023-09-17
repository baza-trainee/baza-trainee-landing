// TODO: to delete ?

import { useEffect } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { projectsApi } from '@/utils/API/projects';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { AxiosError } from 'axios';
import { TProject, TProjectRequest } from '@/types';

const useProjectsByIdSWR = (id: string) => {
  const { setAlertInfo } = useGlobalContext();

  const fetcher = () => projectsApi.getById(id);

  const { data, error, mutate } = useSWR<TProject, AxiosError>(id, fetcher);

  const handleRequestError = (err: AxiosError) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo: 'При запиті виникла помилка. Спробуйте трохи пізніше.',
    });
  };

  useEffect(() => {
    error && handleRequestError(error);
  }, [error]);

  const handlerUpdateProjectById = (updProject: TProjectRequest) => {
    // const options = { optimisticData: updProject, revalidate: false };

    mutate(() => projectsApi.updateById(id, updProject))
      .catch(handleRequestError)
      .catch((e) => console.log('ERROR!!!!!', e));
  };

  // const handlerUpdateProjectTeam = (
  //   updTeam: Array<{
  //     teamMember: { _id: string };
  //     teamMemberRole: { _id: string };
  //   }>
  // ) => {
  //   const teamMembers = updTeam!
  //   const updData: TProjectRequest = { ...data!,teamMembers! };

  //   const options = { populateCache, revalidate: false };

  //   mutate(() => projectsApi.updateById(id, updProject), options)
  //     .catch(handleRequestError)
  //     .catch((e) => console.log('ERROR!!!!!', e));
  // };

  return {
    projectByIdData: data,
    isError: error,
    handlerUpdateProjectById,
  };
};

export { useProjectsByIdSWR };
