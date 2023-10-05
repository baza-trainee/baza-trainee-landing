'use client';

import Link from 'next/link';

import { PartnerItem } from './PartnerItem';

import { AdminPanelButton, SearchBar } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { PaginationBar } from '@/components/atomic/PaginationBar';
import { PlusIcon } from '@/components/common/icons';
import { usePartnersSWR } from '@/hooks/SWR/usePartnersSWR';
import { useGlobalContext } from '@/store/globalContext';
import { TPagination, TPartnerResp } from '@/types';

export const PartnersPage = () => {
  const { setAlertInfo } = useGlobalContext();
  const { partnersData, deletePartner, searchPartner, changePage } =
    usePartnersSWR();

  const { currentPage, totalPages, totalResults }: TPagination =
    partnersData?.pagination || {
      currentPage: 1,
      totalPages: 1,
      totalResults: 0,
    };

  const partnerData: TPartnerResp[] = partnersData?.results || [];

  const handleDeleteWithConfirm = (id: string) => {
    setAlertInfo({
      state: 'submit',
      title: 'Підтвердити видалення',
      textInfo: 'Бажаєте видалити дані?',
      func: () => deletePartner(id),
    });
  };

  return (
    <div className="flex h-screen min-w-[120.2rem] flex-col bg-base-light px-[2.4rem] py-[3.2rem]">
      <div className="mb-[2.6rem] flex justify-between">
        <AdminTitle className=" tracking-wide">Лого партнерів</AdminTitle>

        <div className="ml-auto">
          <SearchBar handleSearch={searchPartner} />
        </div>
      </div>

      <ul className="mb-auto grid grid-cols-4 gap-[1.85rem] gap-y-[2.35rem]">
        <li className="flex-center w-[27.6rem]">
          <Link href="/admin/partners/add">
            <AdminPanelButton icon={<PlusIcon />} variant="secondary">
              Додати партнера
            </AdminPanelButton>
          </Link>
        </li>

        {partnersData &&
          partnerData.map((partner: any) => (
            <PartnerItem
              key={partner._id}
              partner={partner}
              handleDelete={() => handleDeleteWithConfirm(partner._id)}
            />
          ))}
      </ul>

      {partnersData && (
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
          // className="mt-[8.5rem]"
        />
      )}
    </div>
  );
};
