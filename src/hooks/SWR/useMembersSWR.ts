import { useEffect } from 'react';
import useSWR from 'swr';

import { membersEndpoint, membersApi } from '@/utils/API/members';
import { errorHandler } from '@/utils/errorHandler';

import { AxiosError } from 'axios';
import { IMember } from '@/types';

export const useMembersSWR = () => {
  const { data, error, isLoading, mutate } = useSWR<IMember[], AxiosError>(
    membersEndpoint,
    membersApi.getAll
  );

  useEffect(() => {
    error && errorHandler(error);
  }, [error]);

  const handlerDeleteMember = async (id: string) => {
    try {
      const updatedMembers = data?.filter((member) => member._id !== id) || [];
      mutate(updatedMembers, { revalidate: false });
      await membersApi.deleteById(id);
    } catch (error) {
      mutate();
      errorHandler(error);
    }
  };

  const handlerCreateMember = async (newMember: IMember) => {
    try {
      const updatedMembers = data ? [...data, newMember] : [newMember];
      mutate(updatedMembers, { revalidate: false });
      await membersApi.createNew(newMember);
    } catch (error) {
      mutate();
      errorHandler(error);
    }
  };

  const handlerUpdateMember = async (id: string, updatedMember: IMember) => {
    try {
      const updatedMembers = data?.map((member) =>
        member._id === id ? updatedMember : member
      );
      mutate(updatedMembers, { revalidate: false });
      await membersApi.updateById(id, updatedMember);
    } catch (error) {
      mutate();
      errorHandler(error);
    }
  };

  return {
    data,
    isLoading,
    isError: error,
    handlerCreateMember,
    handlerUpdateMember,
    handlerDeleteMember,
  };
};
