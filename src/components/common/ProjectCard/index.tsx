'use client';
import { useEffect } from 'react';
import styles from './styles.module.scss';
const ProjectCard = ({ projects }: { projects: any[] }) => {
  useEffect(() => {
    const teamButtons = document.querySelectorAll(
      '.styles_projects-section__team__btn__h4lPo'
    );
    teamButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const btn = e.currentTarget as HTMLElement;
        console.log(btn);

        const project = btn.closest(
          '.styles_projects-section__projects-item___BLL_'
        ) as HTMLElement;

        if (project) {
          const projectInfo = project.querySelector(
            '.styles_thumb__vQXdp'
          ) as HTMLElement;
          console.log(projectInfo);

          const closeButton = projectInfo.querySelector(
            '.styles_thumb__close-icon__REzRH'
          );
          console.log(closeButton);
          if (projectInfo) {
            const content = project.querySelector(
              '.styles_projects-section__projects-item__content-container__p08j5'
            ) as HTMLElement;
            console.log(project);

            projectInfo.style.top = '0';
            content.style.display = 'none';

            if (closeButton) {
              closeButton.addEventListener('click', () => {
                projectInfo.style.top = '46.4rem';
                content.style.display = 'block';
              });
            }
          }
        }
      });
    });
  });

  const formatDate = (dateString: string) => {
    const monthNames = [
      'січня',
      'лютого',
      'березня',
      'квітня',
      'травня',
      'червня',
      'липня',
      'серпня',
      'вересня',
      'жовтня',
      'листопада',
      'грудня',
    ];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const projectCycle = (project: any) => {
    const creationDate = new Date(project.createdAt);
    const launchDate = new Date(project.updatedAt);

    const cycleDuration = launchDate.getTime() - creationDate.getTime();
    const weeksInCycle = Math.floor(cycleDuration / (1000 * 60 * 60 * 24 * 7));

    return weeksInCycle;
  };

  const renderFilledDivs = (count: number) => {
    const filledDivs = [];

    for (let i = 0; i < 5; i++) {
      if (i < count) {
        filledDivs.push(
          <div
            key={i}
            className={
              styles['projects-section__info__list-item__level-active']
            }
          ></div>
        );
      } else {
        filledDivs.push(
          <div
            key={i}
            className={styles['projects-section__info__list-item__level']}
          ></div>
        );
      }
    }

    return filledDivs;
  };
  function generateRandomNumber() {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  function renderTeamMembersByRole(roleName: string, project: any) {
    return (
      <ul
        key={generateRandomNumber()}
        className={styles['thumb__container__body__members']}
      >
        {project.teamMembers.map(
          (member: any) =>
            member.role.name === roleName && (
              <li key={generateRandomNumber()}>
                <a
                  key={member.role._id}
                  className={styles['thumb__container__body__link']}
                  href={member.user.link}
                  target="_blank"
                >
                  {member.user.name}
                </a>
              </li>
            )
        )}
      </ul>
    );
  }

  return (
    <>
      {projects.map((project) => (
        <li key={generateRandomNumber()}>
          <div
            className={styles['projects-section__projects-item']}
            style={{
              background: `url(${project.imageUrl})`,
            }}
          >
            <div
              className={
                styles['projects-section__projects-item__content-container']
              }
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
                {project.status === 'active' && (
                  <>
                    <div
                      className={
                        styles[
                          'projects-section__projects-item__state-completed'
                        ]
                      }
                    ></div>
                    <p
                      className={
                        styles['projects-section__projects-item__state-text']
                      }
                    >
                      Завершено
                    </p>
                  </>
                )}
                {project.status === 'under-development' && (
                  <>
                    <div
                      className={
                        styles[
                          'projects-section__projects-item__state-under-development'
                        ]
                      }
                    ></div>
                    <p
                      className={
                        styles['projects-section__projects-item__state-text']
                      }
                    >
                      В розробці
                    </p>
                  </>
                )}
                {project.status === 'formation-of-the-team' && (
                  <>
                    <div
                      className={
                        styles[
                          'projects-section__projects-item__state-formation-of-the-team'
                        ]
                      }
                    ></div>
                    <p
                      className={
                        styles['projects-section__projects-item__state-text']
                      }
                    >
                      Формування команди
                    </p>
                  </>
                )}
              </div>
              <div
                className={styles['projects-section__projects-item__container']}
              >
                <h4
                  className={styles['projects-section__projects-item__title']}
                >
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
                      className={
                        styles['projects-section__info__list-container']
                      }
                    >
                      <svg
                        id="start-icon"
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 2v4M8 2v4M3 10h18"
                          stroke="#FCFCFC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>Старт проєкту</p>
                    </div>
                    <p>{formatDate(project.createdAt)}</p>
                  </li>
                  <li className={styles['projects-section__info__list-item']}>
                    <div
                      className={
                        styles['projects-section__info__list-container']
                      }
                    >
                      <svg
                        id="time-icon"
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                          stroke="#FCFCFC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="#FCFCFC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>Цикл проєкту</p>
                    </div>
                    <p>{projectCycle(project)} тижнів</p>
                  </li>
                  <li className={styles['projects-section__info__list-item']}>
                    <div
                      className={
                        styles['projects-section__info__list-container']
                      }
                    >
                      <svg
                        id="level-icon"
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 20V10M12 20V4M6 20v-6"
                          stroke="#FCFCFC"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p>Складність</p>
                    </div>
                    <div
                      className={
                        styles['projects-section__info__list-item__container']
                      }
                    >
                      {renderFilledDivs(project.complexity)}
                    </div>
                  </li>
                </ul>
              </div>
              {project.status === 'active' && (
                <>
                  <div className={styles['projects-section__team']}>
                    <button className={styles['projects-section__team__btn']}>
                      Команда проєкту
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className={styles['thumb']}>
              <div className={styles['thumb__text-container']}>
                <p>
                  Stack: HTML, CSS, TS, Node, MongoDB, HTML, CSS, TS, Node,
                  MongoDB,Node, MongoDB, React
                </p>
                <button className={styles['thumb__close-icon']}>
                  <svg
                    id="close"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6 6 18M6 6l12 12"
                      stroke="#FCFCFC"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className={styles['thumb__container']}>
                <div className={styles['thumb__container__body']}>
                  <h4 className={styles['thumb__container__body__title']}>
                    Project Manager
                  </h4>
                  {renderTeamMembersByRole('PM', project)}
                  <h4 className={styles['thumb__container__body__title']}>
                    Design
                  </h4>
                  {renderTeamMembersByRole('Design', project)}
                  <h4 className={styles['thumb__container__body__title']}>
                    Front-end
                  </h4>
                  {renderTeamMembersByRole('Front', project)}
                  <h4 className={styles['thumb__container__body__title']}>
                    Back-end
                  </h4>
                  {renderTeamMembersByRole('Back', project)}
                  <h4 className={styles['thumb__container__body__title']}>
                    Quality Assurance
                  </h4>
                  {renderTeamMembersByRole('QA', project)}
                </div>
              </div>
            </div>
            {/* </> */}
          </div>
        </li>
      ))}
    </>
  );
};

export default ProjectCard;
