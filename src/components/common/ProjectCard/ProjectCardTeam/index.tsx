import RenderTeamMembersByRole from '@/components/common/ProjectCard/renderTeamMembersByRole';
import CloseIcon from '../../icons/CloseIcon';
import styles from './styles.module.scss';
const ProjectCardTeam = ({
  onClick,
  project,
}: {
  onClick: () => void;
  project: { stack: string[]; teamMembers: object[] };
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
          <RenderTeamMembersByRole roleName="PM" project={project} />
          <h4 className={styles['thumb__container__body__title']}>Design</h4>
          <RenderTeamMembersByRole roleName="Design" project={project} />
          <h4 className={styles['thumb__container__body__title']}>Front-end</h4>
          <RenderTeamMembersByRole roleName="Front" project={project} />
          <h4 className={styles['thumb__container__body__title']}>Back-end</h4>
          <RenderTeamMembersByRole roleName="Back" project={project} />
          <h4 className={styles['thumb__container__body__title']}>
            Quality Assurance
          </h4>
          <RenderTeamMembersByRole roleName="QA" project={project} />
        </div>
      </div>
    </div>
  );
};
export default ProjectCardTeam;
