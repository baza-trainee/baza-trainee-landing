import { TLandingLanguage } from '@/store/globalContext';
import { TTitleLanguagesTypes } from './typesAPI';

// export type TTeamMember = {
//   _id: string;
//   name: string;
//   link: string;
// };
export type TTeamMemberBio = {
  _id: string;
  name: TTitleLanguagesTypes;
  link: string;
};

// export type TTeamMemberRole = Omit<TTeamMember, 'link'>;
export type TTeamMemberRole = {
  _id: string;
  name: string;
};

export type TTeamMember = {
  teamMember: TTeamMemberBio;
  teamMemberRole: TTeamMemberRole;
};

export interface IProject {
  _id: string;
  title: TTitleLanguagesTypes;
  imageUrl: string;
  status: TTitleLanguagesTypes;
  statusVal?: 'active' | 'under-development' | 'formation-of-the-team'; //TODO remove this
  deployUrl?: string;
  link?: string;
  isTeamRequired: boolean;
  description: TTitleLanguagesTypes;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: Array<{
    user: TTeamMemberBio;
    role: TTeamMemberRole;
  }>;
}

export interface ICardContent {
  handleShowTeam: () => void;
  project: IProject;
  lang: TLandingLanguage;
}

export type TProjectRequest = {
  title: TTitleLanguagesTypes;
  file?: File;
  deployUrl?: string;
  isTeamRequired: boolean;
  creationDate: number;
  launchDate?: number;
  complexity: number;
  teamMembers?: Array<{
    teamMember: { _id: string };
    teamMemberRole: { _id: string };
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
  teamMembers?: TTeamMember[];
};

export interface ICardContent2 {
  // TODO: this is temporary. in the future it should be renamed to "ICardContent".
  handleShowTeam: () => void;
  project: TProject;
  lang: TLandingLanguage;
}
