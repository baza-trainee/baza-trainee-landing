import { ActionBtns } from '@/components/atomic';

import { IMember, IRole, TTeamMember } from '@/types';
// import { TEntity } from '../types';

type TProps = {
  // entity: TEntity;
  showedData: TTeamMember;
  handleDelete: (id: string) => void;
};

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-3 flex h-[6.4rem] items-center bg-neutral-50';

export const ListRow = ({ showedData, handleDelete }: TProps) => {
  console.log(showedData);
  return (
    <tr>
      <td className={cellStyle}>
        <div className={bgStyle + ' rounded-s-md pl-5'}>
          <span>{showedData.teamMember.name.ua}</span>
        </div>
      </td>

      {/* {entity === 'projectTeam' && ( */}
      <td className={cellStyle}>
        <div className={bgStyle}>{showedData.teamMemberRole.name.ua}</div>
      </td>
      {/* )} */}

      <td className={cellStyle}>
        <div className={bgStyle + ' justify-end rounded-e-md pr-4'}>
          <ActionBtns
            id={showedData.teamMember._id}
            entity={'members'}
            handleDelete={handleDelete}
          />
        </div>
      </td>
    </tr>
  );
};
