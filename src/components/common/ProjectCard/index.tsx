'use client';
import formatDate from '@/utils/formatDate';
import projectCycle from '@/utils/projectCycle';
import renderByStatus from '@/utils/renderByStatus';
import renderFilledDivs from '@/utils/renderFilledDivs';
import renderTeamMembersByRole from '@/utils/renderTeamMembersByRole';
import showMore from '@/utils/showMore';
// import { useEffect } from 'react';
import CloseIcon from '../CloseIcon';
import LevelIcon from '../LevelIcon';
import StartIcon from '../StartIcon';
import TimeIcon from '../TimeIcon';
import styles from './styles.module.scss';
const ProjectCard = ({ project }: { project: any }) => {
  // useEffect(() => {
  //   showMore();
  // });

  function generateRandomNumber() {
    return Math.floor(Math.random() * 90000) + 10000;
  }

  return (
    <>
      <li key={generateRandomNumber()}>
        <div
          className={styles['projects-section__projects-item']}
          id="projects-item"
          style={{
            background: `url(${project.imageUrl})`,
          }}
        >
          <div
            className={
              styles['projects-section__projects-item__content-container']
            }
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
              <>{renderByStatus(project, styles)}</>
            </div>
            <div
              className={styles['projects-section__projects-item__container']}
            >
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
                  <div
                    className={styles['projects-section__info__list-container']}
                  >
                    <StartIcon />
                    <p>Старт проєкту</p>
                  </div>
                  <p>{formatDate(project.createdAt)}</p>
                </li>
                <li className={styles['projects-section__info__list-item']}>
                  <div
                    className={styles['projects-section__info__list-container']}
                  >
                    <TimeIcon />
                    <p>Цикл проєкту</p>
                  </div>
                  <p>{projectCycle(project)} тижнів</p>
                </li>
                <li className={styles['projects-section__info__list-item']}>
                  <div
                    className={styles['projects-section__info__list-container']}
                  >
                    <LevelIcon />
                    <p>Складність</p>
                  </div>
                  <div
                    className={
                      styles['projects-section__info__list-item__container']
                    }
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
                    onClick={showMore}
                  >
                    Команда проєкту
                  </button>
                </div>
              </>
            )}
          </div>
          <div className={styles['thumb']} id="thumb">
            <div className={styles['thumb__text-container']}>
              <p>
                Stack: HTML, CSS, TS, Node, MongoDB, HTML, CSS, TS, Node,
                MongoDB,Node, MongoDB, React
              </p>
              <button className={styles['thumb__close-icon']} id="close-icon">
                <CloseIcon />
              </button>
            </div>
            <div className={styles['thumb__container']}>
              <div className={styles['thumb__container__body']}>
                <h4 className={styles['thumb__container__body__title']}>
                  Project Manager
                </h4>
                {renderTeamMembersByRole('PM', project, styles)}
                <h4 className={styles['thumb__container__body__title']}>
                  Design
                </h4>
                {renderTeamMembersByRole('Design', project, styles)}
                <h4 className={styles['thumb__container__body__title']}>
                  Front-end
                </h4>
                {renderTeamMembersByRole('Front', project, styles)}
                <h4 className={styles['thumb__container__body__title']}>
                  Back-end
                </h4>
                {renderTeamMembersByRole('Back', project, styles)}
                <h4 className={styles['thumb__container__body__title']}>
                  Quality Assurance
                </h4>
                {renderTeamMembersByRole('QA', project, styles)}
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectCard;
