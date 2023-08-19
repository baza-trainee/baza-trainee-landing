export type IProject = {
  _id: string;
  title: string;
  imageUrl: string;
  status: string;
  link: string;
  description: string;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: Array<{
    user: {
      _id: string;
      name: string;
      link: string;
    };
    role: {
      _id: string;
      name: string;
    };
  }>;
};

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
