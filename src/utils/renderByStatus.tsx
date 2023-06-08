function renderByStatus(project: any, styles: any) {
  return (
    <>
      {(() => {
        switch (project.status) {
          case 'active':
            return (
              <>
                <div
                  className={
                    styles['projects-section__projects-item__state-completed']
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
            );
          case 'under-development':
            return (
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
            );
          case 'formation-of-the-team':
            return (
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
            );
          default:
            return null;
        }
      })()}
    </>
  );
}
export default renderByStatus;
