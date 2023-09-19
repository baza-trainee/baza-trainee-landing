import { ChangeEvent, useState } from 'react';
import { useProjectsByIdSWR } from '@/hooks/SWR/useProjectByIdSWR';
import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { TTeamMember, TTeamMemberRole } from '@/types';

type TProps = {
  // entity: TEntity;
  projectId: string;
  member: TTeamMember;
};

const RoleSelector = ({
  projectId,
  member,
}: TProps) => {
  const { rolesData } = useRolesSWR();
  const {
    projectByIdData,
    handlerUpdateMember,
  } = useProjectsByIdSWR(projectId);

  const [selectedRoleId, setSelectedRoleId] = useState<string | undefined>(
    member.teamMemberRole._id
  );

  const handleOptionSelect = (
    e: ChangeEvent<HTMLSelectElement | undefined>
  ) => {
    const selectedRole = rolesData?.results.find(
      (item) => item._id === e.target.value
    );

    setSelectedRoleId(e.target.value);

    selectedRole &&
      handlerUpdateMember(
        member.teamMember._id,
        member.teamMemberRole._id,
        selectedRole
      );
  };

  return (
    <select
      className="w-full rounded-lg border border-neutral-100 bg-transparent p-3 placeholder-gray-400"
      onChange={handleOptionSelect}
      value={selectedRoleId}
    >
      {rolesData &&
        rolesData.results.map((item) => (
          <option key={item._id} className="rounded-md py-3" value={item._id}>
            {item.name.ua}
          </option>
        ))}
    </select>
  );
};

export { RoleSelector };
