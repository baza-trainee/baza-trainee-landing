import { MemberAndRoleEditor } from '@/components/AdminPage/MembersAndRoles/MemberAndRoleEditor';
import { AddMemberIntoProject } from '@/components/AdminPage/Projects/ProjectTeamList/AddMemberIntoProject';

export default function AddMemberIntoProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <MemberAndRoleEditor projectId={params.projectId} entity={'members'} />
  );
}
