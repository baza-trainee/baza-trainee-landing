import { TLandingLanguage } from '@/store/globalContext';
import { TTitleLanguagesTypes } from './typesAPI';

// export type TTeamMember = {
//   _id: string;
//   name: string;
//   link: string;
// };
export type TTeamMember = {
  _id: string;
  name: TTitleLanguagesTypes;
  link: string;
};

// export type TTeamMemberRole = Omit<TTeamMember, 'link'>;
export type TTeamMemberRole = {
  _id: string;
  name: string;
};

export interface IProject {
  _id: string;
  title: TTitleLanguagesTypes;
  imageUrl: string;
  status: TTitleLanguagesTypes;
  statusVal: 'active' | 'under-development' | 'formation-of-the-team'; //TODO remove this
  link: string;
  description: TTitleLanguagesTypes;
  isTeamRequired: boolean;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: Array<{
    user: TTeamMember;
    role: TTeamMemberRole;
  }>;
}

export interface ICardContent {
  handleShowTeam: () => void;
  project: IProject;
  lang: TLandingLanguage;
}
