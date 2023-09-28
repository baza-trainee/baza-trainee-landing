
import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';
import { useProjectsByIdSWR } from '@/hooks/SWR/useProjectByIdSWR';
// import { useProjectsByIdSWR } from '@/hooks/SWR/useProjectByIdSWR';
// import { TEntity } from '../types';

type TProps = {
  // entity: TEntity;
  projectId: string;
};

export const ProjectTeamList = ({
  // entity,
  projectId,
}: TProps) => {
  const {
    projectByIdData,
    handlerAddMember,
    handlerDeleteMember,
    handlerUpdateMember,
  } = useProjectsByIdSWR(projectId);

  // console.log(projectByIdData);

  return (
    <table className="w-full table-fixed border-collapse text-ellipsis whitespace-nowrap">
      <ListHeader
        projectId={projectId}
        // entity={entity}
      />

      <tbody>
        {projectByIdData &&
          projectByIdData?.teamMembers.map((item) => (
            <ListRow
              // entity={entity}
              key={item.teamMember._id}
              projectId={projectId}
              member={item}
            />
          ))}
      </tbody>
    </table>
  );
};
