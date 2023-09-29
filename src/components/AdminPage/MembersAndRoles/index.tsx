'use client';

import { SearchBar } from '@/components/atomic';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { MembersAndRolesList } from './MembersAndRolesList';
import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';
import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { roleSorter } from '@/utils/roleSorter';
import { TEntity } from './types';

export const MembersAndRoles = ({ entity }: { entity: TEntity }) => {
  const { membersData, handlerSearchMember, handlerDeleteMember } =
    useMembersSWR();

  const { rolesData, handlerDeleteRole, handlerSearchRole } = useRolesSWR();

  const title = entity === 'members' ? 'Учасники' : 'Спеціалізація';

  const showedData =
    entity === 'members'
      ? membersData?.results || []
      : roleSorter(rolesData?.results) || [];

  const handleDelete =
    entity === 'members' ? handlerDeleteMember : handlerDeleteRole;

  const handleSearch =
    entity === 'members' ? handlerSearchMember : handlerSearchRole;

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[3.2rem] flex gap-[3.2rem]">
        <h2 className="text-[3.2rem] font-bold text-admin-header">{title}</h2>

        <div className="ml-auto">
          <SearchBar handleSearch={handleSearch} />
        </div>

        <div className="h-[5.6rem] rounded-md bg-yellow-500 py-5">
          <LanguageSelector />
        </div>
      </div>

      <MembersAndRolesList
        entity={entity}
        showedData={showedData}
        handleDelete={handleDelete}
      />
    </section>
  );
};
