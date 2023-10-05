import { MemberAndRoleEditor } from '@/components/AdminPage/MembersAndRoles/MemberAndRoleEditor';

export default function EditMemberPage({
  params,
}: {
  params: { memberId: string };
}) {
  return (
    <MemberAndRoleEditor entity="members" memberOrRoleId={params.memberId} />
  );
}
