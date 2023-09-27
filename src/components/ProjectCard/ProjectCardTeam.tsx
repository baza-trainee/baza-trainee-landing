// import { ProjectTeamMembers } from './ProjectTeamMembers';
import { dictionaries } from '@/locales/dictionaries';

import { CloseIcon } from '@/components/common/icons';

import { ICardContent2 } from '@/types';

export const ProjectCardTeam = ({
  handleShowTeam,
  project,
  lang = 'ua',
}: ICardContent2) => {
  const roles = project.teamMembers
    .reduce((acc: string[], cur) => {
      if (!acc.includes(cur.teamMemberRole.name[lang])) {
        acc.push(cur.teamMemberRole.name[lang]);
      }
      return acc;
    }, [])
    .sort();

  const projectTeamTitle = dictionaries[lang].projects.projectTeam;

  return (
    <>
      <button className="absolute right-[16px]" onClick={handleShowTeam}>
        <CloseIcon size="S" />
      </button>

      <p className="mb-7 w-full text-3xl font-semibold">{projectTeamTitle}</p>

      <div className="scrollbar flex h-[90%] flex-col gap-[1.6rem] overflow-y-scroll">
        {roles.map((role) => (
          <div key={role}>
            <h4 className="font-semibold">{role}</h4>

            {project.teamMembers
              .filter((member) => member.teamMemberRole.name.en === role)
              .sort((a, b) =>
                a.teamMember.name[lang].localeCompare(b.teamMember.name[lang])
              )
              .map((member) => (
                <a
                  key={member.teamMember._id}
                  className="block text-yellow-500 underline"
                  href={member.teamMember.link}
                  target="_blank"
                >
                  {member.teamMember.name[lang]}
                </a>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};
