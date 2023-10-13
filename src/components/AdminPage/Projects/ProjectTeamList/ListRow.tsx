import { RoleSelector } from './RoleSelector';

import { useProjectFormContext } from '../ProjectFormProvider';

import { TMemberResp } from '@/types';

import { ActionBtns } from '@/components/atomic';

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-3 flex h-[6.4rem] items-center bg-neutral-50';

export const ListRow = ({ member }: { member: TMemberResp }) => {
  const { teamMember } = member;
  const { deleteMember } = useProjectFormContext();

  return (
    <tr>
      <td className={cellStyle}>
        <div className={bgStyle + ' rounded-s-md pl-5'}>
          <span>{teamMember.name.ua}</span>
        </div>
      </td>

      <td className={cellStyle}>
        <div className={bgStyle}>
          <RoleSelector member={member} />
        </div>
      </td>

      <td className={cellStyle}>
        <div className={bgStyle + ' justify-end rounded-e-md pr-4'}>
          <ActionBtns
            id={teamMember._id}
            entity="members"
            handleDelete={() => deleteMember(teamMember._id)}
          />
        </div>
      </td>
    </tr>
  );
};
