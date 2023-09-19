import { ActionBtns } from '@/components/atomic';

import { IMember, IRole, TTeamMember } from '@/types';
import { RoleSelector } from './RoleSelector';
import { useProjectsByIdSWR } from '@/hooks/SWR/useProjectByIdSWR';
// import { TEntity } from '../types';

type TProps = {
  // entity: TEntity;
  projectId: string;
  member: TTeamMember;
};

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-3 flex h-[6.4rem] items-center bg-neutral-50';

export const ListRow = ({ projectId, member }: TProps) => {
  const { teamMember } = member;
  const { handlerDeleteMember } = useProjectsByIdSWR(projectId);
  // console.log(showedData);
  
  return (
    <tr>
      <td className={cellStyle}>
        <div className={bgStyle + ' rounded-s-md pl-5'}>
          <span>{teamMember.name.ua}</span>
        </div>
      </td>

      <td className={cellStyle}>
        <div className={bgStyle}>
          <RoleSelector projectId={projectId} member={member} />
        </div>
      </td>

      <td className={cellStyle}>
        <div className={bgStyle + ' justify-end rounded-e-md pr-4'}>
          <ActionBtns
            id={teamMember._id}
            entity={'members'}
            handleDelete={handlerDeleteMember}
          />
        </div>
      </td>
    </tr>
  );
};
