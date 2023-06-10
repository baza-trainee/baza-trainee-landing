import renderFilledDivs from '@/components/common/ProjectCard/renderFilledDivs';
import projectCycle from '@/utils/developmentTimeCalculator';
import formatDate from '@/utils/formatDate';
import LevelIcon from '../../icons/LevelIcon';
import StartIcon from '../../icons/StartIcon';
import TimeIcon from '../../icons/TimeIcon';
import ProjectCardStatus from './projectStatus';
import styles from './styles.module.scss';
const ProjectCardContent = ({
  onClick,
  project,
  showTeamHandler,
}: {
  onClick: () => void;
  project: {
    status: string;
    description: string;
    link: string;
    createdAt: string;
    complexity: number;
  };
  showTeamHandler: boolean;
}) => {
  return (
    <div
      className={
        styles[
          `${
            showTeamHandler
              ? 'projects-section__projects-item__content-container--ishidden'
              : 'projects-section__projects-item__content-container'
          }`
        ]
      }
    >
      <ProjectCardStatus statusName={project.status} />
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
              {renderFilledDivs(project.complexity)}
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
