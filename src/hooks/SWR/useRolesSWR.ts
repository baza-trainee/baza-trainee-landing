import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { TMemberRoleReq, TResponseRoles } from '@/types';

import { rolesApi, rolesEndpoint } from '@/utils/API/roles';
import { useRequestNotifiers } from './useRequestNotifiers';

const useRolesSWR = () => {
  const { setSuccess, handleRequestError } = useRequestNotifiers();
  const [search, setSearch] = useState('');

  const swrKey = `${rolesEndpoint}?search=${search}`;

  const { data, error, isLoading, mutate } = useSWR<TResponseRoles, AxiosError>(
    swrKey,
    rolesApi.getAll,
    { keepPreviousData: true, onError: handleRequestError }
  );

  // This is needed to reinitialize keepPreviousData if we use the search logic;
  useEffect(() => {
    search && mutate(undefined, { revalidate: false });
  }, [search]);

  const deleteRole = async (id: string) => {
    try {
      // const updRoles = data?.results.filter((role) => role._id !== id);
      setSuccess('видалено');
      await rolesApi.deleteById(id);
      mutate();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const createRole = async (newRole: TMemberRoleReq) => {
    try {
      setSuccess('збережено');
      await rolesApi.createNew(newRole);
      mutate();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const updateRole = async (id: string, updRole: TMemberRoleReq) => {
    try {
      // const updRoles = data?.results.map((role) =>
      //   role._id === id ? { ...updRole, _id: id } : role
      // );
      setSuccess('оновлено');
      await rolesApi.updateById(id, updRole);
      mutate();
    } catch (err) {
      handleRequestError(err);
    }
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
