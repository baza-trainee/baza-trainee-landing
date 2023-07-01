import styles from './styles.module.scss';
const ProjectCardStatus = ({
  statusName,
  dictionary,
}: {
  statusName: string;
  dictionary: {
    projects: {
      status: {
        teamFormation: string;
        underDevelopment: string;
        completed: string;
      };
    };
  };
}) => {
  const statuses = [
    {
      id: 1,
      status: 'active',
      text: dictionary.projects.status.completed,
      class: 'projects-section__projects-item__state-completed',
    },
    {
      id: 2,
      status: 'under-development',
      text: dictionary.projects.status.underDevelopment,
      class: 'projects-section__projects-item__state-under-development',
    },
    {
      id: 3,
      status: 'formation-of-the-team',
      text: dictionary.projects.status.teamFormation,
      class: 'projects-section__projects-item__state-formation-of-the-team',
    },
  ];
  return (
    <>
      {statuses.map(
        (status) =>
          status.status === statusName && (
            <div
              key={status.id}
              className={`${
                status.status === 'formation-of-the-team'
                  ? styles[
                      'projects-section__projects-item__state-container--formation'
                    ]
                  : styles['projects-section__projects-item__state-container']
              }`}
            >
              {' '}
              <div className={styles[status.class]}></div>
              <p
                className={
                  styles['projects-section__projects-item__state-text']
                }
              >
                {status.text}
              </p>
            </div>
          )
      )}
    </>
  );
};
export default ProjectCardStatus;
