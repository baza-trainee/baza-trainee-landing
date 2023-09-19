import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { rolesEndpoint, rolesApi } from '@/utils/API/roles';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { AxiosError, AxiosResponse } from 'axios';
import { TResponseRoles, TTeamMemberRole, TTeamMemberRoleReq } from '@/types';

const useRolesSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  const swrKey = `${rolesEndpoint}?search=${search}`;

  const { data, error, isLoading, mutate } = useSWR<TResponseRoles, AxiosError>(
    swrKey,
    rolesApi.getAll,
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (!error) return;

    errorHandler(error);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[error?.status || 500],
      textInfo:
        'Не вдалося отримати перелік спеціалізацій. Спробуйте трохи пізніше.',
    });
  }, [error]);

  const updateAndMutate = (
    updRoles: TTeamMemberRole[],
    action: () => Promise<AxiosResponse<any, any>>
  ) => {
    mutate(action, {
      optimisticData: { ...data!, results: updRoles },
      revalidate: false,
      populateCache: false,
    });
  };

  const handlerDeleteRole = (id: string) => {
    const updRoles = data?.results.filter((role) => role._id !== id);
    updateAndMutate(updRoles!, () => rolesApi.deleteById(id));
  };

  const handlerCreateRole = (newRole: TTeamMemberRoleReq) => {
    // const updRoles = [...(data?.results || []), newRole];
    mutate(() => rolesApi.createNew(newRole));
  };

  const handlerUpdateRole = (id: string, updRole: TTeamMemberRoleReq) => {
    const updRoles = data?.results.map((role) =>
      role._id === id ? { ...updRole, _id: id } : role
    );
    updateAndMutate(updRoles!, () => rolesApi.updateById(id, updRole));
  };

  const handlerSearchRole = (search: string) => {
    setSearch(search);
  };

  return {
    rolesData: data,
    isLoading,
    isError: error,
    handlerCreateRole,
    handlerUpdateRole,
    handlerDeleteRole,
    handlerSearchRole,
  };
};

export { useRolesSWR };
