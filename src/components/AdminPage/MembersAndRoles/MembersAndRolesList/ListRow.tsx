import { TListRawProps } from '../types';

import { ActionBtns } from '@/components/atomic';

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-3 flex h-[6.4rem] items-center bg-neutral-50';

export const ListRow = ({
  entity,
  showedData,
  handleDelete,
}: TListRawProps) => {
  return (
    <tr>
      <td className={cellStyle}>
        <div className={bgStyle + ' rounded-s-md pl-5'}>
          <span>{showedData.name.ua}</span>
        </div>
      </td>

      <td className={cellStyle}>
        <div className={bgStyle + ' justify-end rounded-e-md pr-4'}>
          <ActionBtns
            id={showedData._id!}
            entity={entity}
            handleDelete={handleDelete}
          />
        </div>
      </td>
    </tr>
  );
};
