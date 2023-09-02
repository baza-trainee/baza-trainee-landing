import { ActionBtns } from '@/components/atomic';

import { IMember } from '@/types';

type Props = {
  member: IMember;
  deleteAction: (id: string) => Promise<void>;
};

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-3 flex h-[6.4rem] items-center bg-neutral-50';

export const ListRow = ({ member, deleteAction }: Props) => {
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
          <ActionBtns
            id={member._id!}
            actionsFor="members"
            deleteAction={deleteAction}
          />
        </div>
      </td>
    </tr>
  );
};
