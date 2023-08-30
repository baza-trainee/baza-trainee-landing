import { TLandingLanguage } from '@/store/globalContext';
import { TTeamMember, TTeamMemberRole } from '../types';

type TProps = {
  roleName: string;
  teamMembers: {
    role: TTeamMemberRole;
    user: TTeamMember;
  }[];
  lang: TLandingLanguage;
};

export const ProjectTeamMembers = ({ roleName, teamMembers, lang }: TProps) => {
  const members = teamMembers
    .filter((member) => member.role.name === roleName)
    .sort((a, b) => a.user.name[lang].localeCompare(b.user.name[lang]));

  return members.map((member) => (
    <a
      key={member.user._id}
      className="block text-yellow-500 underline"
      href={member.user.link}
      target="_blank"
    >
      {member.user.name[lang]}
    </a>
  ));
};
