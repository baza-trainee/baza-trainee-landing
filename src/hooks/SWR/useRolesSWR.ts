import { useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { rolesApi, rolesEndpoint } from '@/utils/API/roles';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { TMemberRoleReq, TResponseRoles } from '@/types';
import { AxiosError } from 'axios';

const useRolesSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  const swrKey = `${rolesEndpoint}?search=${search}`;

  const handleRequestError = (err: any) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo:
        'Не вдалося отримати перелік спеціалізацій. Спробуйте трохи пізніше.',
    });
  };

  const { data, error, isLoading, mutate } = useSWR<TResponseRoles, AxiosError>(
    swrKey,
    rolesApi.getAll,
    { keepPreviousData: true, onError: handleRequestError }
  );

  const deleteRole = async (id: string) => {
    // const updRoles = data?.results.filter((role) => role._id !== id);
    await rolesApi.deleteById(id);
    mutate();
  };

  const createRole = async (newRole: TMemberRoleReq) => {
    await rolesApi.createNew(newRole);
    mutate();
  };

  const updateRole = async (id: string, updRole: TMemberRoleReq) => {
    // const updRoles = data?.results.map((role) =>
    //   role._id === id ? { ...updRole, _id: id } : role
    // );
    await rolesApi.updateById(id, updRole);
    mutate();
  };

  const searchRole = (search: string) => {
    setSearch(search);
  };

  return {
    rolesData: data,
    isLoading,
    isError: error,
    createRole,
    updateRole,
    deleteRole,
    searchRole,
  };
};

export { useRolesSWR };
