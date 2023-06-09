import renderTeamMembersByRole from '@/utils/renderTeamMembersByRole';
import CloseIcon from '../icons/CloseIcon';
import styles from './styles.module.scss';
const ProjectCardTeam = ({
  onClick,
  project,
}: {
  onClick: any;
  project: { stack: string[] };
}) => {
  return (
    <div className={styles['thumb']} id="thumb">
      <div className={styles['thumb__text-container']}>
        <p>Stack: {project.stack.join(', ')}</p>
        <button
          className={styles['thumb__close-icon']}
          id="close-icon"
          onClick={onClick}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={styles['thumb__container']}>
        <div className={styles['thumb__container__body']}>
          <h4 className={styles['thumb__container__body__title']}>
            Project Manager
          </h4>
          {renderTeamMembersByRole('PM', project, styles)}
          <h4 className={styles['thumb__container__body__title']}>Design</h4>
          {renderTeamMembersByRole('Design', project, styles)}
          <h4 className={styles['thumb__container__body__title']}>Front-end</h4>
          {renderTeamMembersByRole('Front', project, styles)}
          <h4 className={styles['thumb__container__body__title']}>Back-end</h4>
          {renderTeamMembersByRole('Back', project, styles)}
          <h4 className={styles['thumb__container__body__title']}>
            Quality Assurance
          </h4>
          {renderTeamMembersByRole('QA', project, styles)}
        </div>
      </div>
    </div>
  );
};
export default ProjectCardTeam;
