import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { TPartnerReq, TResponsePartners } from '@/types';

import { partnersApi, partnersEndpoint } from '@/utils/API/partners';
import { useRequestNotifiers } from './useRequestNotifiers';

const usePartnersSWR = () => {
  const { setSuccess, handleRequestError } = useRequestNotifiers();
  const [query, setQuery] = useState('');
  const [page, setPage] = useState<number>();
  const [limit, setLimit] = useState<number>(); // is this param necessary ?

  const swrKey = `${partnersEndpoint}?query=${query}`;

  const { data, error, mutate } = useSWR<TResponsePartners, AxiosError>(
    [swrKey, query],
    () => partnersApi.getAll({ page, query, limit }),
    {
      keepPreviousData: !!query,
      onError: handleRequestError,
    }
  );

  const deletePartner = async (id: string) => {
    try {
      setSuccess('видалено');
      await partnersApi.deleteById(id);
      mutate();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const createPartner = async (newPartner: TPartnerReq) => {
    try {
      setSuccess('збережено');
      await partnersApi.createNew(newPartner);
      mutate();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const updatePartner = async (id: string, updPartner: TPartnerReq) => {
    try {
      setSuccess('оновлено');
      await partnersApi.updateById(id, updPartner);
      mutate();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const searchPartner = (query: string) => {
    setQuery(query);
    // setPage(1);
  };

  const changePage = (newPage: number) => {
    setPage(newPage);
  };

  const getPartnerById = (id: string) =>
    data?.results.find((partner) => partner._id === id);

  return {
    partnersData: data,
    isError: error,
    createPartner,
    updatePartner,
    deletePartner,
    searchPartner,
    getPartnerById,
    changePage,
  };
};

export { usePartnersSWR };
