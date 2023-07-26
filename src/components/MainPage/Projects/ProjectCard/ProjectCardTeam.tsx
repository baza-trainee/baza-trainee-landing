import { CloseIcon } from '@/components/common/icons';
import { ICardContent } from '../types';
import { ProjectTeamMembers } from './ProjectTeamMembers';

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
        <CloseIcon smallSize />
      </button>

      <p className="mb-7 w-full text-3xl font-semibold">Команда проєкту</p>

      <div className="scrollbar flex h-[90%] flex-col gap-[1.6rem] overflow-y-scroll">
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
