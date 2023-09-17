import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';
import { MembersAndRolesList } from './MembersAndRolesList';
import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { TProject, TTeamMember } from '@/types';

type TProps = {
  teamMembers?: TTeamMember[]
  projectToEdit?: TProject;
  handleUpdateProject: (project: TProject) => void;
};

export const ProjectTeamList = ({
  teamMembers,
  projectToEdit,
  handleUpdateProject,
}: TProps) => {
  const { projectsData } = useProjectsSWR();

  const { membersData, handlerSearchMember, handlerDeleteMember } =
    useMembersSWR();

  const { rolesData, handlerDeleteRole, handlerSearchRole } = useRolesSWR();

  const getTeamList = () => {};

  return (
    <MembersAndRolesList
      // entity={'projectTeam'}
      showedData={teamMembers!}
      handleDelete={function (id: string): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
};
