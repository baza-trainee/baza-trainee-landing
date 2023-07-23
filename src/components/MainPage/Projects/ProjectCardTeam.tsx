import { CloseIcon } from '@/components/common/icons';
import { ProjectTeamMembers } from './ProjectCard/ProjectTeamMembers';
import { ICardContent } from './types';

const roles = [
  {
    id: 1,
    role: 'PM',
    text: 'Project Manager',
  },
  {
    id: 2,
    role: 'Design',
    text: 'Design',
  },
  {
    id: 3,
    role: 'Front',
    text: 'Front-end',
  },
  {
    id: 4,
    role: 'Back',
    text: 'Back-end',
  },
  {
    id: 5,
    role: 'QA',
    text: 'Quality Assurance',
  },
];

export const ProjectCardTeam = ({ handleShowTeam, project }: ICardContent) => {
  return (
    <>
      <button className="absolute right-[2rem]" onClick={handleShowTeam}>
        <CloseIcon className="h-[2.4rem] w-[2.4rem] stroke-2" />
      </button>

      <p className="mb-7 w-5/6 font-semibold">
        Stack: {project.stack.join(', ')}
      </p>

      <div className="scrollbar flex h-5/6 w-[33rem] flex-col gap-[1.6rem] overflow-auto">
        {roles.map((role) => (
          <div key={role.id + role.role}>
            <h4 className="font-semibold">{role.text}</h4>

            <ProjectTeamMembers
              roleName={role.role}
              teamMembers={project.teamMembers}
            />
          </div>
        ))}
      </div>
    </>
  );
};
