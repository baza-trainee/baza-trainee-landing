'use client';

import ProjectCard from '@/components/common/ProjectCard';
import { MultiArrow } from '@/components/common/icons';
import MagnifierIcon from '@/components/common/icons/MagnifierIcon';
import { useState } from 'react';
import { projects } from './projects';
import styles from './styles.module.scss';
import { ContainerMaxW1200 } from '@/components/atomic';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearchChange = (event: any) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    const filtered = projects.filter((project) =>
      project.description
        .trim()
        .toLowerCase()
        .includes(event.target.value.trim().toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <section className={styles['projects-section']} id="projects">
      <ContainerMaxW1200 className="flex-col">
        <h3 className={styles['projects-section__title']}>Проєкти</h3>
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
              <MagnifierIcon />
            </button>
          </form>
        </div>
        <>
          {filteredProjects.length === 0 && (
            <p>Sorry! There are no projects.</p>
          )}
          <ul className={styles['projects-section__projects-container']}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </ul>
        </>
        {filteredProjects.length !== 0 && (
          <div className={styles['projects-section__load-more__container']}>
            <button className={styles['projects-section__load-more']}>
              <span className={styles['projects-section__load-more__text']}>
                Більше проєктів
              </span>
              <MultiArrow direction="bottom" />
            </button>
          </div>
        )}
      </ContainerMaxW1200>
    </section>
  );
};

export default Projects;
