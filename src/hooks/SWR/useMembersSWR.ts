import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import { membersEndpoint, membersApi } from '@/utils/API/members';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

import { AxiosError } from 'axios';
import { IMember, TResponseMembers, TTeamMemberBio } from '@/types';

const useMembersSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  const swrKey = `${membersEndpoint}?search=${search}`;

  const { data, error, isLoading, mutate } = useSWR<
    TResponseMembers,
    AxiosError
  >(swrKey, membersApi.getAll, { keepPreviousData: true });

  useEffect(() => {
    if (!error) return;

    errorHandler(error);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[error?.status || 500],
      textInfo:
        'Не вдалося отримати перелік учасників. Спробуйте трохи пізніше.',
    });
  }, [error]);

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

  const handlerDeleteMember = (id: string) => {
    const updMembers = data?.results.filter((member) => member._id !== id);
    updateAndMutate(updMembers!, () => membersApi.deleteById(id));
  };

  const handlerCreateMember = (newMember: IMember) => {
    const updMembers = [...(data?.results || []), newMember];
    return updateAndMutate(updMembers, () => membersApi.createNew(newMember));
  };

  const handlerUpdateMember = (id: string, updMember: IMember) => {
    const updMembers = data?.results.map((member) =>
      member._id === id ? { ...member, ...updMember } : member
    );
    return updateAndMutate(updMembers!, () =>
      membersApi.updateById(id, updMember)
    );
  };

  const handlerSearchMember = (search: string) => {
    setSearch(search);
  };

  return {
    membersData: data,
    isLoading,
    isError: error,
    handlerCreateMember,
    handlerUpdateMember,
    handlerDeleteMember,
    handlerSearchMember,
  };
};

export { useMembersSWR };
