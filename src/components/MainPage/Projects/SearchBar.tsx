'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import { projects } from './projects';

import { SearchIcon } from '@/components/common/icons';
import { IProject } from '@/types';
import styles from './styles.module.scss';

interface IProps {
  setFilteredProjects?: Dispatch<SetStateAction<IProject[]>>;
}

export const SearchBar = ({ setFilteredProjects }: IProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (event: any) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    const filtered = projects.filter((project) =>
      project.description
        .trim()
        .toLowerCase()
        .includes(event.target.value.trim().toLowerCase())
    );
    setFilteredProjects && setFilteredProjects(filtered);
  };

  return (
    <div className={styles['projects-section__form-container']}>
      <form className={styles['projects-section__form']}>
        <input
          type="text"
          name="search"
          id="search-input"
          className={styles['projects-section__form__input']}
          placeholder="Введіть ключове слово для пошуку"
          pattern="[а-яА-Яa-zA-ZҐґЄєІіЇї]{2,50}"
          title="Поле пошуку приймає ключові слова від 2-х до 50-ти символів. Поле пошуку приймає латиницю і кирилицю"
          minLength={2}
          maxLength={50}
          value={searchQuery}
          onChange={handleSearchChange}
          required
        />
        <button
          type="submit"
          className={styles['projects-section__form__button']}
        >
          <SearchIcon className="text-neutral-500" />
        </button>
      </form>
    </div>
  );
};
