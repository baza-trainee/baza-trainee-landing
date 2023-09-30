import { Dispatch, ReactNode, SetStateAction } from 'react';
import { TTeamMember, TTeamMemberBio, TTeamMemberRole } from '@/types';
import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

export type TProvider = {
  children: ReactNode;
  projectId?: string;
};

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
  launchDate: string;
  complexity: number;
};

export interface IHandlerMembersList {
  action: 'add' | 'remove' | 'updateRole';
  memberId: string;
  roleId: string;
}

export interface IFormContext {
  isEditMode: boolean;
  teamMemberData: TTeamMember[];
  register: UseFormRegister<TFormInput>;
  handleSubmit: UseFormHandleSubmit<TFormInput, undefined>;
  onSubmit: SubmitHandler<TFormInput>;
  cancelAction: () => void;
  addTeamMember: (newMember: TTeamMemberBio) => void;
  updTeamMemberRole: (
    memberId: string,
    oldRoleId: string,
    newRole: TTeamMemberRole
  ) => void;
  deleteMember: (memberId: string) => void;
  watch: UseFormWatch<TFormInput>;
  control: Control<TFormInput, any>;
  errors: FieldErrors<TFormInput>;
}
