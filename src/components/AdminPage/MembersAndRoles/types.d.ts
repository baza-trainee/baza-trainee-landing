import { TMemberBioResp, TMemberRoleResp } from '@/types';

export type TEntity = 'members' | 'roles';

export type TMemberAndRoleEditor = {
  entity: TEntity;
  memberOrRoleId?: string;
};

type TMembersAndRolesListBase = {
  isProjectEditorMode?: boolean;
  entity: TEntity;
  handleDelete?: (id: string) => void;
  selectMember?: (id: string) => void;
};

export type TMembersAndRolesListProps = TMembersAndRolesListBase & {
  showedData: TMemberBioResp[] | TMemberRoleResp[];
};

export type TListRawProps = TMembersAndRolesListBase & {
  showedData: TMemberBioResp | TMemberRoleResp;
};

export type TRoleFormInput = {
  nameUk: string;
  nameEn: string;
  namePl: string;
};

export type TMemberFormInput = TRoleFormInput & {
  linkedin?: string;
};

export type TMemberFormProps = {
  memberId?: string;
  addMemberNComeback?: (newMember?: TMemberBioResp) => void;
};
