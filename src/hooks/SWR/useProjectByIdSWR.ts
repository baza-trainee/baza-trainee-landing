// TODO: to delete ?

import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { projectsApi } from '@/utils/API/projects';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import {
  TProject,
  TProjectRequest,
  TTeamMember,
  TTeamMemberRole,
} from '@/types';
import { AxiosError } from 'axios';

const emptyData: TProject = {
  _id: '',
  title: { en: '', pl: '', ua: '' },
  imageUrl: '',
  deployUrl: '',
  isTeamRequired: false,
  creationDate: 0,
  launchDate: 0,
  complexity: 0,
  teamMembers: [],
};

const useProjectsByIdSWR = (id?: string, firstInit?: boolean) => {
  const { setAlertInfo } = useGlobalContext();
  const handleRequestError = (err: AxiosError) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo: 'При запиті виникла помилка. Спробуйте трохи пізніше.',
    });
  };


  const { data, error, mutate } = useSWR<TProject, AxiosError>(
    id,
    projectsApi.getById,
    {
      revalidateIfStale: !!firstInit,
      revalidateOnFocus: !!firstInit,
      revalidateOnReconnect: !!firstInit,
      revalidateOnMount: !!firstInit,
      onError: handleRequestError,
    }
  );

  data &&
    console.log(
      'data >',
     data
    );

  const handlerUpdateProject = (updProject: TProjectRequest) => {
    // const options = { optimisticData: updProject, revalidate: false };
    if (!id) return;

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

  const handlerAddMember = (newMember: TTeamMember) => {
    const teamMembers = data?.teamMembers || emptyData.teamMembers;
    teamMembers?.push(newMember);
    mutate({ ...(data || emptyData), teamMembers }, { revalidate: false });
  };

  const handlerDeleteMember = (memberId: string) => {
    const teamMembers = data?.teamMembers.filter(
      (item) => item.teamMember._id !== memberId
    );
    mutate({ ...data, teamMembers }, { revalidate: false });
  };

  const handlerUpdateMember = (
    memberId: string,
    oldRoleId: string,
    newRole: TTeamMemberRole
  ) => {
    const teamMembers = data?.teamMembers.map((item) =>
      item.teamMember._id === memberId && item.teamMemberRole._id === oldRoleId
        ? { ...item, teamMemberRole: newRole }
        : item
    );
    teamMembers &&
      console.log(
        'handle >',
        teamMembers[0]?.teamMemberRole.name.ua,
        teamMembers[0]?.teamMemberRole._id
      );
    mutate({ ...data, teamMembers }, { revalidate: false });
  };

  return {
    projectByIdData: data,
    isError: error,
    handlerUpdateProject,
    handlerAddMember,
    handlerUpdateMember,
    handlerDeleteMember,
  };
};

export { useProjectsByIdSWR };
