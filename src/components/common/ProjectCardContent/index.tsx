import formatDate from '@/utils/formatDate';
import projectCycle from '@/utils/projectCycle';
import renderFilledDivs from '@/utils/renderFilledDivs';
import ProjectCardStatus from '../ProjectCardStatus';
import LevelIcon from '../icons/LevelIcon';
import StartIcon from '../icons/StartIcon';
import TimeIcon from '../icons/TimeIcon';
import styles from './styles.module.scss';
const ProjectCardContent = ({
  onClick,
  project,
}: {
  onClick: any;
  project: any;
}) => {
  return (
    <div
      className={styles['projects-section__projects-item__content-container']}
      id="content-container"
    >
      <div
        className={`${
          project.status === 'formation-of-the-team'
            ? styles[
                'projects-section__projects-item__state-container--formation'
              ]
            : styles['projects-section__projects-item__state-container']
        }`}
      >
        <ProjectCardStatus statusName={project.status} />
      </div>
      <div className={styles['projects-section__projects-item__container']}>
        <h4 className={styles['projects-section__projects-item__title']}>
          {project.description}
        </h4>
        {project.status === 'active' && (
          <a
            href={project.link}
            className={styles['projects-section__projects-item__link']}
            target="_blank"
          >
            {project.link}
          </a>
        )}
      </div>

      <div className={styles['projects-section__info']}>
        <ul className={styles['projects-section__info__list']}>
          <li className={styles['projects-section__info__list-item']}>
            <div className={styles['projects-section__info__list-container']}>
              <StartIcon />
              <p>Старт проєкту</p>
            </div>
            <p>{formatDate(project.createdAt)}</p>
          </li>
          <li className={styles['projects-section__info__list-item']}>
            <div className={styles['projects-section__info__list-container']}>
              <TimeIcon />
              <p>Цикл проєкту</p>
            </div>
            <p>{projectCycle(project)} тижнів</p>
          </li>
          <li className={styles['projects-section__info__list-item']}>
            <div className={styles['projects-section__info__list-container']}>
              <LevelIcon />
              <p>Складність</p>
            </div>
            <div
              className={styles['projects-section__info__list-item__container']}
            >
              {renderFilledDivs(project.complexity, styles)}
            </div>
          </li>
        </ul>
      </div>
      {project.status === 'active' && (
        <>
          <div className={styles['projects-section__team']}>
            <button
              className={styles['projects-section__team__btn']}
              id="team-btn"
              onClick={onClick}
            >
              Команда проєкту
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default ProjectCardContent;
