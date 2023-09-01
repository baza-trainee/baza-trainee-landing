'use client';

import { useState } from 'react';

import { SearchBar } from '@/components/SearchBar';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { MembersList } from './MembersList';
import { IMember } from '@/types';

export const Members = () => {
  const [filteredMembers, setFilteredMembers] = useState<IMember[]>();

  const updateFilteredMembers = (filteredData: IMember[]) => {
    setFilteredMembers(filteredData);
  };

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[3.2rem] flex gap-[3.2rem]">
        <h2 className="text-[3.2rem] font-bold text-admin-header">Учасники</h2>

        <div className="ml-auto ">
          <SearchBar searchFor={'members'} updateData={updateFilteredMembers} />
        </div>

        <div className="h-[5.6rem] rounded-md bg-yellow-500 py-5">
          <LanguageSelector />
        </div>
      </div>

      <MembersList members={filteredMembers} />
    </section>
  );
};
