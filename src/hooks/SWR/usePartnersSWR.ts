import { useState } from 'react';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { TPartnerReq, TResponsePartners } from '@/types';

import { useGlobalContext } from '@/store/globalContext';

import { partnersApi, partnersEndpoint } from '@/utils/API/partners';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

const usePartnersSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState<number>();
  const [limit, setLimit] = useState<number>(); // is this param necessary ?

  const swrKey = `${partnersEndpoint}?search=${search}`;

  const setSuccess = (textInfo: string) => {
    setAlertInfo({
      state: 'success',
      title: 'Успіх',
      textInfo,
    });
  };

  const handleRequestError = (err: any) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo: 'Не вдалося виконати запит.',
    });
  };

  const { data, error, mutate } = useSWR<TResponsePartners, AxiosError>(
    swrKey,
    () => partnersApi.getAll({ page, query: search, limit }),
    {
      keepPreviousData: !!search,
      onError: handleRequestError,
    }
  );

  const deletePartner = async (id: string) => {
    try {
      await partnersApi.deleteById(id);
      mutate();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const createPartner = async (newPartner: TPartnerReq) => {
    try {
      await partnersApi.createNew(newPartner);
      setSuccess('Ваші дані успішно збережено.');
      mutate();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const updatePartner = async (id: string, updPartner: TPartnerReq) => {
    try {
      await partnersApi.updateById(id, updPartner);
      setSuccess('Оновлені дані успішно збережено.');
      mutate();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const searchPartner = (search: string) => {
    setSearch(search);
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
