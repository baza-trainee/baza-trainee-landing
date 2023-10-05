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
    <div className="w-full bg-base-light px-[2.4rem] pb-[5.6rem] pt-[3.2rem]">
      <div className="flex w-[1160px] flex-col">
        <div className="mb-[2.6rem] flex w-[1143px] items-start justify-between">
          <AdminTitle className=" tracking-wide">Лого партнерів</AdminTitle>

          <div className="ml-auto">
            <SearchBar handleSearch={searchPartner} />
          </div>
        </div>

        <ul className="scrollbar flex h-[600px] min-w-[1138px] flex-wrap content-start gap-[1.85rem] gap-y-[2.35rem]  overflow-y-auto">
          <li className="flex-center w-[27.6rem]">
            <Link href={'/admin/partners/add'}>
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
            className="mt-[8.5rem]"
          />
        )}
      </div>
    </div>
  );
};
