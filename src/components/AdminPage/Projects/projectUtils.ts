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
  return {
    title: {
      en: formData.nameEn,
      pl: formData.namePl,
      ua: formData.nameUk,
    },
    imageUrl: '',
    deployUrl: formData.deployUrl,
    isTeamRequired: !!formData.isTeamRequired,
    creationDate: convertDate.toMsec(formData.creationDate),
    launchDate: convertDate.toMsec(formData.launchDate),
    complexity: +formData.complexity,
  };
};
