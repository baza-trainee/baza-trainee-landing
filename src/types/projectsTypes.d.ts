import { TLandingLanguage } from '@/store/globalContext';
import { TTitleLanguagesTypes } from './typesAPI';

export type TTeamMemberBio = {
  _id: string;
  name: TTitleLanguagesTypes;
  profileUrl: string;
};

export type TTeamMemberRole = {
  _id: string;
  name: TTitleLanguagesTypes;
};

export type TTeamMemberRoleReq = {
  name: TTitleLanguagesTypes;
};

export type TTeamMember = {
  teamMember: TTeamMemberBio;
  teamMemberRole: TTeamMemberRole;
};

export type TProjectRequest = {
  title: TTitleLanguagesTypes;
  file?: File;
  deployUrl?: string;
  isTeamRequired: boolean;
  creationDate: number;
  launchDate?: number;
  complexity: number;
  teamMembers?: Array<{
    teamMember: string;
    teamMemberRole: string;
  }>;
};

export type TProject = {
  _id: string;
  title: TTitleLanguagesTypes;
  imageUrl: string;
  deployUrl?: string;
  isTeamRequired: boolean;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: TTeamMember[];
};

export interface ICardContent {
  handleShowTeam: () => void;
  project: TProject;
  lang: TLandingLanguage;
  isAdminMode?: boolean;
}
