import { ChangeEvent, useMemo, useState } from 'react';

import { useProjectFormContext } from '../ProjectFormProvider';

import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { TMemberResp } from '@/types';
import { roleSorter } from '@/utils/roleSorter';

export const RoleSelector = ({ member }: { member: TMemberResp }) => {
  const { updTeamMemberRole } = useProjectFormContext();
  const { rolesData } = useRolesSWR();
  const { teamMember, teamMemberRole } = member;

  const roles = useMemo(() => {
    return rolesData?.results && roleSorter(rolesData.results);
  }, [rolesData]);

  const [selectedRoleId, setSelectedRoleId] = useState<string>(
    teamMemberRole._id
  );

  const handleOptionSelect = (
    e: ChangeEvent<HTMLSelectElement | undefined>
  ) => {
    const selectedRole = roles?.find((item) => item._id === e.target.value);
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
      {roles &&
        roles.length > 0 &&
        roles.map((item) => (
          <option key={item._id} className="rounded-md py-3" value={item._id}>
            {item.name.ua}
          </option>
        ))}
    </select>
  );
};
