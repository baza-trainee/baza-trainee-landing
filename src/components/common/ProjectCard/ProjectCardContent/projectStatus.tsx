import styles from './styles.module.scss';
const ProjectCardStatus = ({ statusName }: { statusName: string }) => {
  const statuses = [
    {
      id: 1,
      status: 'active',
      text: 'Завершено',
      class: 'projects-section__projects-item__state-completed',
    },
    {
      id: 2,
      status: 'under-development',
      text: 'В розробці',
      class: 'projects-section__projects-item__state-under-development',
    },
    {
      id: 3,
      status: 'formation-of-the-team',
      text: 'Формування команди',
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
