import { TTeamMember } from '@/types';
import { TTeamMemberRequest } from './types';

const extractMembersId = (members: TTeamMember[]): TTeamMemberRequest[] =>
  members.map((item) => ({
    teamMember: item.teamMember._id,
    teamMemberRole: item.teamMemberRole._id,
  }));

export { extractMembersId };
