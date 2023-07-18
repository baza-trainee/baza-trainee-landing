'use client';

import { ContainerMaxW1200 } from '@/components/atomic';
import ProjectCard from '@/components/common/ProjectCard';
import { ArrowBottomIcon } from '@/components/common/icons';
import MagnifierIcon from '@/components/common/icons/MagnifierIcon';
import { useContext, useState } from 'react';
// import { projects } from './projects';
import { GlobalContext } from '@/store/globalContext';
import styles from './styles.module.scss';

export const Projects = ({
  dictionary,
  lang,
}: {
  dictionary: {
    navbar: {
      projects: string;
    };
    monthsNames: {
      january: string;
      february: string;
      march: string;
      april: string;
      may: string;
      june: string;
      july: string;
      august: string;
      september: string;
      october: string;
      november: string;
      december: string;
    };
    toFund: string;
    moreProjects: string;
    enterKeywordForSearch: string;
    projects: {
      projectStart: string;
      projectCycle: string;
      time: string;
      complexity: string;
      projectTeam: string;
      status: {
        teamFormation: string;
        underDevelopment: string;
        completed: string;
      };
    };
    heroSlider: {
      firstSlide: {
        title: string;
        description: string;
      };
      secondSlide: {
        title: string;
        description: string;
      };
      thirdSlide: {
        title: string;
        description: string;
      };
      fourthSlide: {
        title: string;
        description: string;
      };
      fifthSlide: {
        title: string;
        description: string;
      };
    };
  };
  lang: 'en' | 'pl' | 'ua';
}) => {
  const { projects } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearchChange = (event: any) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    const filtered = projects.filter((project) =>
      project.title[lang]
        .trim()
        .toLowerCase()
        .includes(event.target.value.trim().toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <section className={styles['projects-section']} id="projects">
      <ContainerMaxW1200 className="flex-col">
        <h3 className={styles['projects-section__title']}>
          {dictionary.navbar.projects}
        </h3>
        <div className={styles['projects-section__form-container']}>
          <form className={styles['projects-section__form']}>
            <input
              type="text"
              name="search"
              id="search-input"
              className={styles['projects-section__form__input']}
              placeholder={dictionary.enterKeywordForSearch}
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
          {projects.length === 0 && <p>Sorry! There are no projects.</p>}
          <ul className={styles['projects-section__projects-container']}>
            {projects.map((project) => (
              <ProjectCard
                lang={lang}
                dictionary={dictionary}
                key={project._id}
                project={project}
              />
            ))}
          </ul>
        </>
        {filteredProjects.length !== 0 && (
          <div className={styles['projects-section__load-more__container']}>
            <button className={styles['projects-section__load-more']}>
              <span className={styles['projects-section__load-more__text']}>
                {dictionary.moreProjects}
              </span>
              <ArrowBottomIcon />
            </button>
          </div>
        )}
      </ContainerMaxW1200>
    </section>
  );
};
