import { useState } from 'react';
import { useProjectFormContext } from '../ProjectFormProvider';

import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';
import { MemberForm } from '../../MembersAndRoles/MemberForm';

import { TTeamMemberBio } from '@/types';

export const ProjectTeamList = () => {
  const [isAddMemberMode, setIsAddMemberMode] = useState(false);
  const { teamMemberData, addTeamMember } = useProjectFormContext();

  const switchMode = () => {
    setIsAddMemberMode(!isAddMemberMode);
  };

  const addMemberNComeback = (newMember: TTeamMemberBio) => {
    addTeamMember(newMember);
    switchMode();
  };

  return isAddMemberMode ? (
    <MemberForm addMemberNComeback={addMemberNComeback} />
  ) : (
    <table className="w-full table-fixed border-collapse text-ellipsis whitespace-nowrap">
      <ListHeader switchMode={switchMode} />
      <tbody>
        {teamMemberData.length > 0 &&
          teamMemberData.map((item) => (
            <ListRow key={item.teamMember._id} member={item} />
          ))}
      </tbody>
    </table>
  );
};
