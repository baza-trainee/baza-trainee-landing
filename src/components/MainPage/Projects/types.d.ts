export type TTeamMember = {
  _id: string;
  name: string;
  link: string;
};

export type TTeamMemberRole = Omit<TTeamMember, 'link'>;

export type TProjects = {
  _id: string;
  title: string;
  imageUrl: string;
  status: string;
  stack: string[];
  link: string;
  description: string;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: {
    user: TTeamMember;
    role: TTeamMemberRole;
  }[];
  createdAt: string;
  updatedAt: string;
};

export interface ICardContent {
  handleShowTeam: () => void;
  project: TProjects;
}