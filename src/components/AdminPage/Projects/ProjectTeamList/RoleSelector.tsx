import { ChangeEvent, useState } from 'react';

import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { useProjectFormContext } from '../ProjectFormProvider';
import { roleSorter } from '@/utils/roleSorter';

import { TTeamMember } from '@/types';

export const RoleSelector = ({ member }: { member: TTeamMember }) => {
  const { updTeamMemberRole } = useProjectFormContext();
  const results = useRolesSWR().rolesData?.results;
  const { teamMember, teamMemberRole } = member;
  const [selectedRoleId, setSelectedRoleId] = useState<string>(
    teamMemberRole._id
  );

  const handleOptionSelect = (
    e: ChangeEvent<HTMLSelectElement | undefined>
  ) => {
    const selectedRole = results?.find((item) => item._id === e.target.value);
    if (selectedRole) {
      setSelectedRoleId(e.target.value);
      updTeamMemberRole(teamMember._id, teamMemberRole._id, selectedRole);
    }
  };

  return (
    <select
      className="w-full rounded-lg border border-neutral-100 bg-transparent p-3 placeholder-gray-400"
      onChange={handleOptionSelect}
      value={selectedRoleId}
    >
      {!selectedRoleId && <option />}
      {results &&
        results.length > 0 &&
        roleSorter(results)!.map((item) => (
          <option key={item._id} className="rounded-md py-3" value={item._id}>
            {item.name.ua}
          </option>
        ))}
    </select>
  );
};
