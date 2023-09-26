import { ProjectTeamMembers } from './ProjectTeamMembers';
import { dictionaries } from '@/locales/dictionaries';

import { CloseIcon } from '@/components/common/icons';

import { ICardContent2 } from '@/types';

export const ProjectCardTeam = ({
  handleShowTeam,
  project,
  lang ="ua",
}: ICardContent2) => {
  const roles = project.teamMembers // TODO: check this "!"
    .reduce((acc: string[], cur) => {
      if (!acc.includes(cur.teamMemberRole.name[lang])) {
        acc.push(cur.teamMemberRole.name[lang]);
      }
      return acc;
    }, [])
    .sort();

  const { projectTeam } = dictionaries[lang].projects;

  return (
    <>
      <button className="absolute right-[2rem]" onClick={handleShowTeam}>
        <CloseIcon size="S" />
      </button>

      <p className="mb-7 w-full text-3xl font-semibold">{projectTeam}</p>

      <div className="scrollbar flex h-[90%] flex-col gap-[1.6rem] overflow-y-scroll">
        {roles.map((role) => (
          <div key={role}>
            <h4 className="font-semibold">{role}</h4>

            <ProjectTeamMembers
              lang={lang}
              roleName={role}
              teamMembers={project.teamMembers!} // TODO: check this "!"
            />
          </div>
        ))}
      </div>
    </>
  );
};
