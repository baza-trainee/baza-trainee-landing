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

type TProjectBase = {
  title: TTitleLanguagesTypes;
  deployUrl?: string;
  isTeamRequired: boolean;
  creationDate: number;
  launchDate?: number;
  complexity: number;
};

export type TProjectReq = TProjectBase & {
  file?: File;
  teamMembers?: TProjectMemberReq[];
};

export type TProjectResp = TProjectBase & {
  _id: string;
  imageUrl: string;
  teamMembers: TMemberResp[];
};

export interface ICardContent {
  handleShowTeam: () => void;
  project: TProjectResp;
  lang: TLandingLanguage;
  isAdminMode?: boolean;
}
