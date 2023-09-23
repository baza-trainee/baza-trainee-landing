'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { SearchIcon } from '@/components/common/icons';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PaginationBar } from '../../atomic/PaginationBar';
import { PlusIcon } from '../../common/icons/PlusIcon';
import Container from './Container';
import { PartnerItem } from './PartnerItem';

const initialPagination = {
  currentPage: 1,
  totalPages: 1,
  totalResults: null,
};

export const PartnersPage = () => {
  const [dispatch, data, isError, isLoading] = useAPI(partnersApi.getAll);
  const [deleteById, deleted] = useAPI(partnersApi.deleteById);
  const [pagination, setPagination] = useState(initialPagination);
  const [searchData, setSearchData] = useState('');

  const partnerData = data
    ? searchData
      ? data.results.filter((partner: any) =>
          partner.name.toLowerCase().includes(searchData.toLowerCase())
        )
      : data.results
    : [];

  useEffect(() => {
    if (pagination.totalResults !== null) {
      return;
    }

    if (data?.results) {
      setPagination(data.pagination);
    }
  }, [data, pagination.totalResults]);

  useEffect(() => {
    dispatch(pagination.currentPage);
  }, [pagination, deleted]);

  useEffect(() => {
    if (data?.pagination.totalPages < data?.pagination.currentPage) {
      dispatch();
      setPagination(initialPagination);
      return;
    }
  }, [data, deleted]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, currentPage: newPage }));
    }
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error occurred: {data?.message}</p>
      ) : (
        <div className="flex w-[1160px] flex-col">
          <div className="mb-[2.6rem] flex w-[1143px] items-start justify-between">
            <AdminTitle className=" tracking-wide">Лого партнерів</AdminTitle>
            <form className=" flex w-[378px] items-center justify-between gap-4 rounded border border-neutral-300 bg-white p-[1.5rem]">
              <input
                type="text"
                name="search"
                className="w-[306px] bg-white text-neutral-500 outline-none"
                placeholder="Введіть ключове слово для пошуку"
                value={searchData}
                onChange={handleChangeSearch}
                required
              />
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
          <ul className="scrollbar flex h-[725px] min-w-[1138px] flex-wrap content-start gap-[1.1rem] gap-y-[2.35rem] overflow-y-auto align-top align-top">
            <li className="flex h-[100px] items-center justify-center bg-base-dark px-[8px]">
              <Link href={'partners/add'}>
                <AdminPanelButton
                  type="submit"
                  variant="secondary"
                  icon={<PlusIcon />}
                  className="pr-[2.8rem] active:bg-neutral-800"
                >
                  Додати партнера
                </AdminPanelButton>
              </Link>
            </li>
            {data &&
              partnerData.map((partner: any) => (
                <PartnerItem
                  key={partner._id}
                  partner={partner}
                  handleDelete={deleteById}
                />
              ))}
          </ul>
          {pagination.totalPages >= 1 && (
            <PaginationBar
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
              className="mt-[8.5rem]"
            />
          )}
        </div>
      )}
    </Container>
  );
};
