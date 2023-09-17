import { Dispatch, SetStateAction } from 'react';

export type TTabsMode = 'description' | 'team';

export type TFormTabs = {
  tabsMode: TTabsMode;
  setTabsMode: Dispatch<SetStateAction<TTabsMode>>;
};

export type TTeamMemberRequest = {
  teamMember: { _id: string };
  teamMemberRole: { _id: string };
};

export type TFormInput = {
  nameUk: string;
  nameEn: string;
  namePl: string;
  projectImg: File[];
  deployUrl?: string;
  isTeamRequired?: boolean;
  creationDate: string;
  launchDate?: string;
  complexity: number;
  teamMembers?: TTeamMemberRequest[];
};
