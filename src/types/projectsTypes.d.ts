export type TTeamMember = {
  _id: string;
  name: string;
  link: string;
};

export type TTeamMemberRole = Omit<TTeamMember, 'link'>;

export type IProject = {
  _id: string;
  title: string;
  imageUrl: string;
  status: string;
  link: string;
  deployUrl?: string;
  description: string;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: Array<{
    user: TTeamMember;
    role: TTeamMemberRole;
  }>;
};

export interface ICardContent {
  handleShowTeam: () => void;
  project: IProject;
}
