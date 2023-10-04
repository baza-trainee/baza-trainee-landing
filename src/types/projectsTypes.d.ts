import { TTitleLanguagesTypes } from './typesAPI';

import { TLandingLanguage } from '@/store/globalContext';

export type TMemberBioReq = {
  name: TTitleLanguagesTypes;
  profileUrl?: string;
};

export type TMemberBioResp = TMemberBioReq & {
  _id: string;
};

export type TMemberRoleReq = {
  name: TTitleLanguagesTypes;
};

export type TMemberRoleResp = TMemberRoleReq & {
  _id: string;
};

export type TMemberResp = {
  teamMember: TMemberBioResp;
  teamMemberRole: TMemberRoleResp;
};

export type TProjectMemberReq = {
  teamMember: string;
  teamMemberRole: string;
};

export type TProjectReq = {
  title: TTitleLanguagesTypes;
  file?: File;
  deployUrl?: string;
  isTeamRequired: boolean;
  creationDate: number;
  launchDate?: number;
  complexity: number;
  teamMembers?: TProjectMemberReq[];
};

export type TProjectResp = {
  _id: string;
  title: TTitleLanguagesTypes;
  imageUrl: string;
  deployUrl?: string;
  isTeamRequired: boolean;
  creationDate: number;
  launchDate?: number;
  complexity: number;
  teamMembers: TMemberResp[];
};

export interface ICardContent {
  handleShowTeam: () => void;
  project: TProjectResp;
  lang: TLandingLanguage;
  isAdminMode?: boolean;
}
