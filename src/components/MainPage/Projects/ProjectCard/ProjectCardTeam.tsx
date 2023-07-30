import { CloseIcon } from '@/components/common/icons';
import { ICardContent } from '../types';
import { ProjectTeamMembers } from './ProjectTeamMembers';

export const ProjectCardTeam = ({
  handleShowTeam,
  project,
  dict,
}: ICardContent) => {
  const roles = project.teamMembers
    .reduce((acc: string[], cur) => {
      if (!acc.includes(cur.role.name)) {
        acc.push(cur.role.name);
      }
      return acc;
    }, [])
    .sort();

  return (
    <>
      <button className="absolute right-[2rem]" onClick={handleShowTeam}>
        <CloseIcon size="S" />
      </button>

      <p className="mb-7 w-full text-3xl font-semibold">
        {dict.projects.projectTeam}
      </p>

      <div className="scrollbar flex h-[90%] flex-col gap-[1.6rem] overflow-y-scroll">
        {roles.map((role) => (
          <div key={role}>
            <h4 className="font-semibold">{role}</h4>

            <ProjectTeamMembers
              roleName={role}
              teamMembers={project.teamMembers}
            />
          </div>
        ))}
      </div>
    </>
  );
};
