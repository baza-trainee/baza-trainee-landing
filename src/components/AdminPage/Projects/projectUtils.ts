import { TTeamMember } from '@/types';
import { TFormInput, TTeamMemberRequest } from './types';
import { convertDate } from '@/utils/formatDate';

export const extractMembersId = (
  members: TTeamMember[]
): TTeamMemberRequest[] =>
  members.map((item) => ({
    teamMember: item.teamMember._id,
    teamMemberRole: item.teamMemberRole._id,
  }));

export const prepareProject = (formData: TFormInput) => {
  const {
    nameEn,
    namePl,
    nameUk,
    deployUrl,
    isTeamRequired,
    creationDate,
    launchDate,
    complexity,
  } = formData;

  return {
    title: {
      en: nameEn,
      pl: namePl,
      ua: nameUk,
    },
    deployUrl: deployUrl ? deployUrl : undefined,
    isTeamRequired: !!isTeamRequired,
    creationDate: convertDate.toMsec(creationDate) || new Date().getTime(),
    launchDate: launchDate ? convertDate.toMsec(launchDate) : undefined,
    complexity: +complexity,
  };
};
