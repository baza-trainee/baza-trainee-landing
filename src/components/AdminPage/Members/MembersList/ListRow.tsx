import { AdminPanelButton, EditDeleteButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import { IMember } from '@/types';
import { type } from 'os';
import { ActionBtns } from './ActionBtns';

type Props = {
  member: IMember;
};

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-3 flex h-[6.4rem] items-center bg-neutral-50';

export const ListRow = ({ member }: Props) => {
  return (
    <tr>
      <td className={cellStyle}>
        <div className={bgStyle + ' rounded-s-md pl-5'}>
          <span>{member.name.ua}</span>
        </div>
      </td>

      {false && ( // TODO: to implement logic when this component will be reusing in "project"
        <td className={cellStyle}>
          <div className={bgStyle}>{/* Спеціалізація */}</div>
        </td>
      )}

      <td className={cellStyle}>
        <div className={bgStyle + ' justify-end rounded-e-md pr-4'}>
          <ActionBtns id={member._id!} />
        </div>
      </td>
    </tr>
  );
};
