import { MemberAndRoleEditor } from '@/components/AdminPage/MembersAndRoles/MemberAndRoleEditor';

export default function EditMemberPage({
  params,
}: {
  params: { roleId: string };
}) {
  return (
    <MemberAndRoleEditor entity={'roles'} memberOrRoleId={params.roleId} />
  );
}
