import { ICardContent, TMemberBioResp } from '@/types';

import { SETTINGS } from '@/config/settings';

import { dictionaries } from '@/locales/dictionaries';

import { CloseIcon } from '@/components/common/icons';

const orderList = SETTINGS.specsOrderList;

export const ProjectCardTeam = ({
  handleShowTeam,
  project,
  lang = 'ua',
  isAdminMode,
}: ICardContent) => {
  const projectTeamTitle = dictionaries[lang].projects.projectTeam;
  const rolesAndMembers: { [role: string]: TMemberBioResp[] } = {};

  project.teamMembers.forEach((member) => {
    if (!member.teamMember || !member.teamMemberRole) return;

    const roleName = member.teamMemberRole.name.en;
    if (!rolesAndMembers[roleName]) {
      rolesAndMembers[roleName] = [];
    }
    rolesAndMembers[roleName].push(member.teamMember);
  });

  const sortedRoles = Object.keys(rolesAndMembers).sort(
    (a, b) => orderList.indexOf(a) - orderList.indexOf(b)
  );

  return (
    <>
      <button
        className={`absolute ${isAdminMode ? 'right-28' : 'right-8'}`}
        onClick={handleShowTeam}
      >
        <CloseIcon size="S" />
      </button>

      <p className="mb-7 w-full text-3xl font-semibold">{projectTeamTitle}</p>

      <div className="scrollbar flex h-[90%] flex-col gap-[1.6rem] overflow-y-auto">
        {sortedRoles.map((role) => (
          <div key={role}>
            <h4 className="font-semibold">{role}</h4>

            {rolesAndMembers[role].map((teamMember) => (
              <a
                key={teamMember._id}
                className="block cursor-pointer text-yellow-500 underline"
                href={teamMember?.profileUrl}
                target="_blank"
              >
                {teamMember.name[lang]}
              </a>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
