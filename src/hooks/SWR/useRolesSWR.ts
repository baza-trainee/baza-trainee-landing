import { useState } from 'react';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { TMemberRoleReq, TResponseRoles } from '@/types';
import { rolesApi, rolesEndpoint } from '@/utils/API/roles';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

const useRolesSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  const swrKey = `${rolesEndpoint}?search=${search}`;

  const handleRequestError = (err: any) => {
    const { status, response } = err;
    const message = response?.data?.message || 'Помилка виконання запиту';
    const codeName = response?.data?.error?.codeName || 'Невідома помилка';

    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[status || 500],
      textInfo: `Не вдалося виконати запит (${message} / ${codeName})`,
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
