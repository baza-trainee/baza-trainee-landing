import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';
import { MembersAndRolesList } from '../MembersAndRoles/MembersAndRolesList';
import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';

export const ProjectTeamList = ({ id }: { id?: string }) => {
  const { projectsData } = useProjectsSWR();

  const { membersData, handlerSearchMember, handlerDeleteMember } =
    useMembersSWR();

  const { rolesData, handlerDeleteRole, handlerSearchRole } = useRolesSWR();

  const getTeamList = () => {};

  return (
    <MembersAndRolesList
      entity={'projectTeam'}
      showedData={[]}
      handleDelete={function (id: string): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
};
