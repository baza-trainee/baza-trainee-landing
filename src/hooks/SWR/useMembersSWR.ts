import { useEffect } from 'react';
import useSWR, { mutate } from 'swr';

import { bazaAPI } from '@/utils/API/config';
import { errorHandler } from '@/utils/errorHandler';

import { IMember, byIdRequest } from '@/types';
import { AxiosError } from 'axios';

const membersEndpoint = '/members';

const getAllMembers = async () => {
  return await bazaAPI.get<IMember[]>(membersEndpoint);
};

const deleteById = async (id: string) => {
  return await bazaAPI.delete(membersEndpoint + '/' + id);
};

// const updateById = async ([id, payload]: updateByIdRequest) => {
//   return bazaAPI.patch(`/members/${id}`, payload);
// };

const fetcher = async () => {
  return await getAllMembers().then((res) => res.data);
};

export const useMembersSWR = () => {
  const { data, error, isLoading } = useSWR<IMember[], AxiosError>(
    membersEndpoint,
    fetcher
  );

  useEffect(() => {
    error && errorHandler(error);
  }, [error]);

  const handlerDeleteMember = async (id: string) => {
    try {
      const newMembers = data?.filter((member) => member._id !== id) || [];

      const options = { optimisticData: { ...data, results: newMembers } };

      mutate(membersEndpoint, await deleteById(id), options);
    } catch (error) {
      errorHandler(error);
    }
  };

  return {
    data,
    isLoading,
    isError: error,
    handlerDeleteMember,
  };
};
