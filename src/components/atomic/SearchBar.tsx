'use client';

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { SearchIcon } from '../common/icons';
import { IMember, TResponseProjects } from '@/types';

type SearchBarProps = {
  searchFor: 'projects' | 'members';
  data: IMember[] | TResponseProjects | undefined;
  updateData: (filteredData: any) => void;
};

export const SearchBar = ({ searchFor, data, updateData }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    setSearchTerm(searchTerm);

    if (searchFor === 'members' && data) {
      const filteredData = (data as IMember[]).filter(
        (item) =>
          item.name.en.toLowerCase().includes(searchTerm) ||
          item.name.pl.toLowerCase().includes(searchTerm) ||
          item.name.ua.toLowerCase().includes(searchTerm)
      );
      updateData(filteredData);
    } else if (searchFor === 'projects' && data && 'results' in data) {
      const filteredData = data.results.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );
      updateData({ ...data, results: filteredData });
    }
  };

  return (
    <div className="flex h-[5.6rem] gap-6 rounded-md border border-neutral-300 p-6">
      <input
        className="w-[30.6rem] outline-none"
        type="text"
        placeholder="Введіть ключове слово для пошуку"
        pattern="[а-яА-Яa-zA-ZҐґЄєІіЇї]{2,50}"
        title="Поле пошуку приймає ключові слова від 2-х до 50-ти символів. Поле пошуку приймає латиницю і кирилицю"
        minLength={2}
        maxLength={50}
        value={searchTerm}
        onChange={handleSearch}
      />

      <button>
        <SearchIcon className="text-neutral-500" />
      </button>
    </div>
  );
};
