
import ProjectCard from '@/components/common/ProjectCard';
import { projects } from './projects';
import styles from './styles.module.scss';

const Projects = () => {
  return (
    <section className={styles['projects-section']} id="projects">
      <div className={`container`}>
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
              required
            />
            <button
              type="submit"
              className={styles['projects-section__form__button']}
            >
              <svg
                className={styles['projects-section__form__icon']}
                id="magnifier"
                fill="none"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
                  stroke="#464646"
                  strokeWidth="2"
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
        <>
          <ul className={styles['projects-section__projects-container']}>
            <ProjectCard projects={projects} />
          </ul>
        </>
        <div className={styles['projects-section__load-more__container']}>
          <button className={styles['projects-section__load-more']}>
            Більше проєктів
            <svg
              className={styles['header__lang-arrow']}
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1L8 8L1 1"
                stroke="#232323"
                strokeWidth="1.5"
                strokeLinecap="round"
                stroke-Linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
