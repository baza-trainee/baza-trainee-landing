'use client';

import { useState } from 'react';

import { MembersAndRolesList } from './MembersAndRolesList';
import { TEntity } from './types';

import { LanguageSelector, SearchBar } from '@/components/atomic';
import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';
import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { TLandingLanguage } from '@/store/globalContext';
import { roleSorter } from '@/utils/roleSorter';
import { PaginationBar } from '@/components/atomic/PaginationBar';

export const MembersAndRoles = ({ entity }: { entity: TEntity }) => {
  const isMemberEntity = entity === 'members';
  const [componentLang, setComponentLang] = useState<TLandingLanguage>(
    isMemberEntity ? 'ua' : 'en'
  );

  const changeComponentLang = (lang: TLandingLanguage) => {
    setComponentLang(lang);
  };

  const { membersData, searchMember, deleteMember, changePage } =
    useMembersSWR();

  const { rolesData, deleteRole, searchRole } = useRolesSWR();

  const title = isMemberEntity ? 'Учасники' : 'Спеціалізація';

  const showedData = isMemberEntity
    ? membersData?.results || []
    : roleSorter(rolesData?.results) || [];

  const handleDelete = isMemberEntity ? deleteMember : deleteRole;

  const handleSearch = isMemberEntity ? searchMember : searchRole;

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[3.2rem] flex gap-[3.2rem]">
        <h2 className="text-[3.2rem] font-bold text-admin-header">{title}</h2>

        <div className="ml-auto">
          <SearchBar handleSearch={handleSearch} />
        </div>

        <div className="h-[5.6rem] rounded-md bg-yellow-500 py-5">
          <LanguageSelector
            currLang={componentLang}
            changeComponentLang={changeComponentLang}
          />
        </div>
      </div>

      <MembersAndRolesList
        currLang={componentLang}
        entity={entity}
        showedData={showedData}
        handleDelete={handleDelete}
      />

      {isMemberEntity && membersData && (
        <div className="mt-auto">
          <PaginationBar
            className="mt-20"
            currentPage={membersData.pagination.currentPage}
            totalPages={membersData.pagination.totalPages}
            onPageChange={changePage}
          />
        </div>
      )}
    </section>
  );
};
