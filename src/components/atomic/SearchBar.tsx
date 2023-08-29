'use client';

import { ChangeEvent, useState } from 'react';
import { SearchIcon } from '../common/icons';

type SearchBarProps<T> = {
  data: T[];
  onFilter: (filteredData: T[]) => void;
};

export const SearchBar = <T,>({ data, onFilter }: SearchBarProps<T>) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    const filteredData = data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(searchTerm)
    );
    setSearchTerm(searchTerm);
    onFilter(filteredData);
  };

  return (
    <div className="flex gap-6 rounded-md border border-neutral-300 p-6 h-[5.6rem]">
      <input className='w-[30.6rem] outline-none'
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
