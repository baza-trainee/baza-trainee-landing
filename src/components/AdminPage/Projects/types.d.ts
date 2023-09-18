import { Dispatch, SetStateAction } from 'react';

export type TTabsMode = 'description' | 'team';

export type TFormTabs = {
  tabsMode: TTabsMode;
  setTabsMode: Dispatch<SetStateAction<TTabsMode>>;
};

export type TTeamMemberRequest = {
  teamMember: string;
  teamMemberRole: string;
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

export interface IHandlerMembersList {
  action: 'add' | 'remove' | 'updateRole';
  memberId: string;
  roleId: string;
}
