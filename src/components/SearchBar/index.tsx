'use client';

import { useSearchFilter } from './useSearchFilter';
import { SearchBarProps } from './types';
import { SearchIcon } from '../common/icons';

export const SearchBar = ({ searchFor, updateData }: SearchBarProps) => {
  const { handleSearch } = useSearchFilter({ searchFor, updateData });

  return (
    <div className="flex h-[5.6rem] gap-6 rounded-md border border-neutral-300 p-6">
      <input
        className="w-[30.6rem] outline-none"
        type="text"
        placeholder="Введіть ключове слово для пошуку"
        pattern="[а-яА-Яa-zA-ZҐґЄєІіЇї]{2,50}"
        title="Поле пошуку приймає ключові слова від 2-х до 50-ти символів. Поле пошуку приймає латиницю і кирилицю"
        onChange={handleSearch}
      />

      <button>
        <SearchIcon className="text-neutral-500" />
      </button>
    </div>
  );
};
