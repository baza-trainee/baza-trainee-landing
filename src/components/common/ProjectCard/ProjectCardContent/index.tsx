import ProjectComplexity from '@/components/common/ProjectCard/ProjectComplexity';
import LevelIcon from '@/components/common/icons/LevelIcon';
import StartIcon from '@/components/common/icons/StartIcon';
import TimeIcon from '@/components/common/icons/TimeIcon';
import projectCycle from '@/utils/developmentTimeCalculator';
import styles from './styles.module.scss';
const ProjectCardContent = ({
  onShowTeamHandler,
  project,
  isMembersVIsible,
  dictionary,
}: {
  onShowTeamHandler: () => void;
  project: {
    _id: string;
    complexity: number;
    creationDate: number;
    imageUrl: string;
    isTeamRequired: boolean;
    launchDate?: number;
    deployUrl?: string;
    teamMembers:
      | {
          user: {
            _id: string;
            name: string;
          };
          role: {
            _id: string;
            name: string;
          };
        }[]
      | [];
    title: {
      en: string;
      pl: string;
      ua: string;
    };
  };
  isMembersVIsible: boolean;
  dictionary: {
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
    projects: {
      projectStart: string;
      projectCycle: string;
      complexity: string;
      time: string;
      projectTeam: string;
      status: {
        teamFormation: string;
        underDevelopment: string;
        completed: string;
      };
    };
  };
}) => {
  return (
    <div
      className={
        styles[
          `${
            isMembersVIsible
              ? 'projects-section__projects-item__content-container--ishidden'
              : 'projects-section__projects-item__content-container'
          }`
        ]
      }
    >
      {/* <ProjectCardStatus dictionary={dictionary} statusName={project.status} /> */}
      <div className={styles['projects-section__projects-item__container']}>
        {/* <h4 className={styles['projects-section__projects-item__title']}>
          {project.description}
        </h4> */}
        {/* {project.status === 'active' && (
          <a
            href={project.deployUrl}
            className={styles['projects-section__projects-item__link']}
            target="_blank"
          >
            {project.deployUrl}
          </a>
        )} */}
      </div>

      <div className={styles['projects-section__info']}>
        <ul className={styles['projects-section__info__list']}>
          <li className={styles['projects-section__info__list-item']}>
            <div className={styles['projects-section__info__list-container']}>
              <StartIcon />
              <p>{dictionary.projects.projectStart}</p>
            </div>
            {/* <p>{formatDate(project.launchDate, dictionary)}</p> */}
          </li>
          <li className={styles['projects-section__info__list-item']}>
            <div className={styles['projects-section__info__list-container']}>
              <TimeIcon />
              <p>{dictionary.projects.projectCycle}</p>
            </div>
            <p>
              {projectCycle(project)} {dictionary.projects.time}
            </p>
          </li>
          <li className={styles['projects-section__info__list-item']}>
            <div className={styles['projects-section__info__list-container']}>
              <LevelIcon />
              <p>{dictionary.projects.complexity}</p>
            </div>
            <div
              className={styles['projects-section__info__list-item__container']}
            >
              <ProjectComplexity count={project.complexity} />
            </div>
          </li>
        </ul>
      </div>
      {/* {project.status === 'active' && (
        <>
          <div className={styles['projects-section__team']}>
            <button
              className={styles['projects-section__team__btn']}
              id="team-btn"
              onClick={onShowTeamHandler}
            >
              {dictionary.projects.projectTeam}
            </button>
          </div>
        </>
      )} */}
    </div>
  );
};
export default ProjectCardContent;
