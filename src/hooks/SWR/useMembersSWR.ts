import { AxiosError } from 'axios';
import { useState } from 'react';
import useSWR from 'swr';

import { TMemberBioReq, TResponseMembers } from '@/types';

import { membersApi, membersEndpoint } from '@/utils/API/members';
import { useRequestNotifiers } from './useRequestNotifiers';

const useMembersSWR = () => {
  const { setSuccess, handleRequestError } = useRequestNotifiers();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState<number>();
  const [limit, setLimit] = useState<number>();

  const swrKey = `${membersEndpoint}?search=${search}`;

  const { data, error, isLoading, mutate } = useSWR<
    TResponseMembers,
    AxiosError
  >(
    [swrKey, search, page, limit],
    () => membersApi.getAll({ page, search, limit }),
    {
      keepPreviousData: !!search,
      onError: handleRequestError,
    }
  );

  const searchMember = (search: string) => {
    setSearch(search);
  };

  const changePage = (newPage: number) => {
    setPage(newPage);
  };

  const deleteMember = async (id: string) => {
    try {
      const updMembers = data?.results.filter((member) => member._id !== id);
      const updData: TResponseMembers = { ...data!, results: updMembers! };

      setSuccess('видалено');
      await membersApi.deleteById(id);
      mutate(updData);
    } catch (err) {
      handleRequestError(err);
    }
  };

  const createMember = async (newMember: TMemberBioReq) => {
    try {
      const createdMember = await membersApi.createNew(newMember);

      if (!createdMember) return null;

      const updData: TResponseMembers = {
        ...data!,
        results: [createdMember, ...(data?.results || [])],
      };

      setSuccess('збережено');
      mutate(updData);

      return createdMember;
    } catch (err) {
      handleRequestError(err);
      throw Promise.reject();
    }
  };

  const updateMember = async (id: string, updMember: TMemberBioReq) => {
    try {
      const updatedMember = await membersApi.updateById(id, updMember);

      if (!updatedMember) return null;

      const updatedMembers = (data?.results || []).map((member) =>
        member._id === id ? updatedMember : member
      );

      const updData: TResponseMembers = { ...data!, results: updatedMembers };

      setSuccess('оновлено');
      mutate(updData);

      return updatedMember;
    } catch (err) {
      handleRequestError(err);
      throw Promise.reject();
    }
  };

  return {
    membersData: data,
    isLoading,
    isError: error,
    createMember,
    updateMember,
    deleteMember,
    searchMember,
    changePage,
  };
};

export { useMembersSWR };
