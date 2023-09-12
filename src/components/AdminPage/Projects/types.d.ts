import { Dispatch, SetStateAction } from 'react';

export type TTabsMode = 'description' | 'members';

export type TFormTabs = {
  tabsMode: TTabsMode;
  setTabsMode: Dispatch<SetStateAction<TTabsMode>>;
};

type TTeamMember = {
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
  creationDate: number;
  launchDate?: number;
  complexity: number;
  teamMembers?: TTeamMember[];
};
