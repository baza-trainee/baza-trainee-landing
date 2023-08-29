'use client';

import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';
import { useGlobalContext } from '@/store/globalContext';
import { networkStatusesUk } from '@/utils/errorHandler';
import { useEffect, useState } from 'react';

import { AdminPanelButton, SearchBar } from '@/components/atomic';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { MembersList } from './MembersList';

export const Members = () => {
  const { setAlertInfo } = useGlobalContext();

  const [showedItems, setShowedItems] = useState();

  const { data: members, isLoading, isError } = useMembersSWR();
  const [filteredMembers, setFilteredMembers] = useState(members);

  useEffect(() => {
    isError &&
      setAlertInfo({
        state: 'error',
        title: networkStatusesUk[isError?.status || 500],
        textInfo:
          'Не вдалося отримати перелік проєктів. Спробуйте трохи пізніше.',
      });
  }, [isError]);

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[3.2rem] flex gap-[3.2rem]">
        <h2 className="text-[3.2rem] font-bold text-admin-header">Учасники</h2>

        <div className="ml-auto ">
          <SearchBar
            data={[]}
            onFilter={function (filteredData: unknown[]): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>

        <div className="rounded-md bg-yellow-500 py-5 h-[5.6rem]">
          <LanguageSelector />
        </div>
      </div>

      <MembersList/>
    </section>
  );
};
