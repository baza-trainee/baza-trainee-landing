import { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';

import { TMemberBioResp, TMemberResp, TMemberRoleResp } from '@/types';

export type TProvider = {
  children: ReactNode;
  projectId?: string;
};

export type TTabsMode = 'description' | 'team';

export type TFormTabs = {
  tabsMode: TTabsMode;
  setTabsMode: Dispatch<SetStateAction<TTabsMode>>;
};

export type TFormInput = {
  nameUk: string;
  nameEn: string;
  namePl: string;
  projectImg: File[];
  deployUrl?: string;
  isTeamRequired?: boolean;
  creationDate: string;
  launchDate: string;
  complexity: number;
};

export interface IHandlerMembersList {
  action: 'add' | 'remove' | 'updateRole';
  memberId: string;
  roleId: string;
}

export interface IFormContext {
  projectId: string | undefined;
  isEditMode: boolean;
  teamMemberData: TMemberResp[];
  handleSubmit: UseFormHandleSubmit<TFormInput, undefined>;
  onSubmit: SubmitHandler<TFormInput>;
  cancelAction: () => void;
  addTeamMember: (newMember: TMemberBioResp) => void;
  updTeamMemberRole: (
    memberId: string,
    oldRoleId: string,
    newRole: TMemberRoleResp
  ) => void;
  deleteMember: (memberId: string) => void;
  translateField: (field: keyof TFormInput, lang: 'en' | 'pl') => void;
  control: Control<TFormInput, any>;
  errors: FieldErrors<TFormInput>;
}
