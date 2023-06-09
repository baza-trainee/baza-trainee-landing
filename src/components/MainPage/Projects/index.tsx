import ProjectCard from '@/components/common/ProjectCard';
import ArrowBottomIcon from '@/components/common/icons/ArrowBottomIcon';
import MagnifierIcon from '@/components/common/icons/MagnifierIcon';
import { projects } from './projects';
import styles from './styles.module.scss';
function generateRandomNumber() {
  return Math.floor(Math.random() * 9000) + 1000;
}
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
              <MagnifierIcon />
            </button>
          </form>
        </div>
        <>
          <ul className={styles['projects-section__projects-container']}>
            {projects.map((project) => (
              <ProjectCard key={generateRandomNumber()} project={project} />
            ))}
          </ul>
        </>
        <div className={styles['projects-section__load-more__container']}>
          <button className={styles['projects-section__load-more']}>
            Більше проєктів
            <ArrowBottomIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
