import { TMemberRoleResp, TMemberBioResp } from '@/types';

export type TEntity = 'members' | 'roles';

export type TMemberAndRoleEditor = {
  entity: TEntity;
  memberOrRoleId?: string;
};

export type TMembersAndRolesListProps = {
  entity: TEntity;
  showedData: TMemberBioResp[] | TMemberRoleResp[];
  handleDelete: (id: string) => void;
};

export type TListRawProps = {
  entity: TEntity;
  showedData: TMemberBioResp | TMemberRoleResp;
  handleDelete: (id: string) => void;
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
  addMemberNComeback?: (newMember: TMemberBioResp) => void;
};
