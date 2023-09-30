import { useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { membersApi, membersEndpoint } from '@/utils/API/members';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { IMember, TResponseMembers, TTeamMemberBio } from '@/types';
import { AxiosError } from 'axios';

const useMembersSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  const swrKey = `${membersEndpoint}?search=${search}`;

  const handleRequestError = (err: AxiosError) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo:
        'Не вдалося отримати перелік учасників. Спробуйте трохи пізніше.',
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

  const updateAndMutate = (
    updMembers: IMember[],
    action: () => Promise<TTeamMemberBio>
  ) => {
    try {
      return mutate(action, {
        optimisticData: { ...data!, results: updMembers },
      });
    } catch (err) {
      errorHandler(err);
    }
  };

  const deleteMember = (id: string) => {
    const updMembers = data?.results.filter((member) => member._id !== id);
    updateAndMutate(updMembers!, () => membersApi.deleteById(id));
  };

  const createMember = (newMember: IMember) => {
    const updMembers = [...(data?.results || []), newMember];
    return updateAndMutate(updMembers, () => membersApi.createNew(newMember));
  };

  const updateMember = (id: string, updMember: IMember) => {
    const updMembers = data?.results.map((member) =>
      member._id === id ? { ...member, ...updMember } : member
    );
    return updateAndMutate(updMembers!, () =>
      membersApi.updateById(id, updMember)
    );
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
