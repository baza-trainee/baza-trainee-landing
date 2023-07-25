import { TTeamMember, TTeamMemberRole } from '../types';

type TProps = {
  roleName: string;
  teamMembers: {
    role: TTeamMemberRole;
    user: TTeamMember;
  }[];
};

export const ProjectTeamMembers = ({ roleName, teamMembers }: TProps) => {
  const members = teamMembers.filter((member) => member.role.name === roleName);

  return members.map((member) => (
    <a
      key={member.user._id}
      className="block text-yellow-500 underline"
      href={member.user.link}
      target="_blank"
    >
      {member.user.name}
    </a>
  ));
};
