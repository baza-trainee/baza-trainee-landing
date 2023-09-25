import { ChangeEvent, useState } from 'react';
import { useProjectsByIdSWR } from '@/hooks/SWR/useProjectByIdSWR';
import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { TTeamMember } from '@/types';

type TProps = {
  projectId: string;
  member: TTeamMember;
};

const RoleSelector = ({ projectId, member }: TProps) => {
  const { teamMember, teamMemberRole } = member;
  const { handlerUpdateMember } = useProjectsByIdSWR(projectId);
  const { rolesData } = useRolesSWR();
  const [selectedRoleId, setSelectedRoleId] = useState<string>(
    teamMemberRole._id
  );

  const handleOptionSelect = (
    e: ChangeEvent<HTMLSelectElement | undefined>
  ) => {
    const selectedRole = rolesData?.results.find(
      (item) => item._id === e.target.value
    );

    if (selectedRole) {
      setSelectedRoleId(e.target.value);
      handlerUpdateMember(teamMember._id, teamMemberRole._id, selectedRole);
    }
  };

  return (
    <select
      className="w-full rounded-lg border border-neutral-100 bg-transparent p-3 placeholder-gray-400"
      onChange={handleOptionSelect}
      value={selectedRoleId}
    >
      {!selectedRoleId && <option />}
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
