import { useState } from 'react';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { TMemberBioReq, TResponseMembers } from '@/types';
import { membersApi, membersEndpoint } from '@/utils/API/members';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

const useMembersSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  const swrKey = `${membersEndpoint}?search=${search}`;

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

  const { data, error, isLoading, mutate } = useSWR<
    TResponseMembers,
    AxiosError
  >(swrKey, membersApi.getAll, {
    keepPreviousData: true,
    onError: handleRequestError,
  });

  const searchMember = (search: string) => {
    setSearch(search);
  };

  const deleteMember = async (id: string) => {
    try {
      const updMembers = data?.results.filter((member) => member._id !== id);
      const updData: TResponseMembers = { ...data!, results: updMembers! };

      mutate(updData);
      await membersApi.deleteById(id);
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

      mutate(updData);

      return createdMember;
    } catch (err) {
      handleRequestError(err);
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

      mutate(updData);

      return updatedMember;
    } catch (err) {
      handleRequestError(err);
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
  };
};

export { useMembersSWR };
