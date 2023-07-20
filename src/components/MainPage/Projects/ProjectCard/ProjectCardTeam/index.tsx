import CloseIcon from '@/components/common/icons/CloseIcon';
import ProjectTeamMembers from '../ProjectTeamMembers';
import styles from './styles.module.scss';
import { ICardContent } from '../../types';

const ProjectCardTeam = ({ handleShowTeam, project }: ICardContent) => {
  const roles = [
    {
      id: 1,
      role: 'PM',
      text: 'Project Manager',
      class: 'projects-section__projects-item__state-completed',
    },
    {
      id: 2,
      role: 'Design',
      text: 'Design',
      class: 'projects-section__projects-item__state-under-development',
    },
    {
      id: 3,
      role: 'Front',
      text: 'Front-end',
      class: 'projects-section__projects-item__state-formation-of-the-team',
    },
    {
      id: 4,
      role: 'Back',
      text: 'Back-end',
      class: 'projects-section__projects-item__state-formation-of-the-team',
    },
    {
      id: 5,
      role: 'QA',
      text: 'Quality Assurance',
      class: 'projects-section__projects-item__state-formation-of-the-team',
    },
  ];
  return (
    <div className={styles['thumb']}>
      <div className={styles['thumb__text-container']}>
        <p>Stack: {project.stack.join(', ')}</p>
        <button
          className={styles['thumb__close-icon']}
          onClick={handleShowTeam}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={styles['thumb__container']}>
        {roles.map((role) => (
          <div className={styles['thumb__container__body']} key={role.id}>
            <h4 className={styles['thumb__container__body__title']}>
              {role.text}
            </h4>
            <ProjectTeamMembers
              roleName={role.role}
              teamMembers={project.teamMembers}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectCardTeam;
