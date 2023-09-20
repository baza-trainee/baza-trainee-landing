'use client';

import { SearchIcon } from '../common/icons';
import { ChangeEvent } from 'react';

type SearchBarProps = {
  handleSearch: (search: string) => void;
};

export const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value.toLowerCase().trim());
  };

  return (
    <div className="flex h-[5.6rem] gap-6 rounded-md border border-neutral-300 p-6">
      <input
        className="w-[30.6rem] outline-none"
        type="text"
        placeholder="Введіть ключове слово для пошуку"
        pattern="[а-яА-Яa-zA-ZҐґЄєІіЇї]{2,50}"
        title="Поле пошуку приймає ключові слова від 2-х до 50-ти символів. Поле пошуку приймає латиницю і кирилицю"
        onChange={handleOnChange}
      />

      <button>
        <SearchIcon className="text-neutral-500" />
      </button>
    </div>
  );
};
