import { AdminPanelButton, EditDeleteButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import { IMember } from '@/types';
import { type } from 'os';
import { ActionBtns } from './ActionBtns';

type Props = {
  member: IMember;
};

export const ListRow = ({ member }: Props) => {
  return (
    <div className="flex w-full rounded-md bg-neutral-50 px-2 py-3">
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <span className="ml-11 mr-auto">{member.name.ua}</span>
        </td>
        <td>
          <ActionBtns id={member._id!} />
        </td>
      </tr>
    </div>
  );
};
