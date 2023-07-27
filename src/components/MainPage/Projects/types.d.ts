import { IProject } from '@/types';

export type TTeamMember = {
  _id: string;
  name: string;
  link: string;
};

export type TTeamMemberRole = Omit<TTeamMember, 'link'>;

export interface ICardContent {
  handleShowTeam: () => void;
  project: IProject;
}
