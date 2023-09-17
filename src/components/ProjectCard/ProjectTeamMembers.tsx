import { TLandingLanguage } from '@/store/globalContext';
import { TTeamMember } from '@/types';

type TProps = {
  roleName: string;
  teamMembers: TTeamMember[];
  lang: TLandingLanguage;
};

export const ProjectTeamMembers = ({ roleName, teamMembers, lang }: TProps) => {
  const members = teamMembers
    .filter((member) => member.teamMemberRole.name === roleName)
    .sort((a, b) =>
      a.teamMember.name[lang].localeCompare(b.teamMember.name[lang])
    );

  return members.map((member) => (
    <a
      key={member.teamMember._id}
      className="block text-yellow-500 underline"
      href={member.teamMember.link}
      target="_blank"
    >
      {member.teamMember.name[lang]}
    </a>
  ));
};
