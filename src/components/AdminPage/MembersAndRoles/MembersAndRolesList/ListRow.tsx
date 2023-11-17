import { TListRawProps } from '../types';

import { ActionBtns } from '@/components/atomic';

const cellStyle = 'border-none p-0';
const bgStyle = 'mb-3 flex h-[6.4rem] items-center bg-neutral-50';

export const ListRow = ({
  currLang,
  entity,
  showedData,
  handleDelete,
  selectMember,
  isProjectEditorMode,
}: TListRawProps) => {
  const handleRowClick = () => {
    isProjectEditorMode && selectMember && selectMember(showedData._id);
  };

  const handleDeleteClick = () => {
    !isProjectEditorMode && handleDelete && handleDelete(showedData._id);
  };

  return (
    <tr>
      <td className={cellStyle}>
        <div className={bgStyle + ' rounded-s-md pl-5'}>
          <span
            onClick={handleRowClick}
            className={isProjectEditorMode ? 'cursor-pointer' : ''}
          >
            {showedData.name[currLang]}
          </span>
        </div>
      </td>

      {!isProjectEditorMode && (
        <td className={cellStyle}>
          <div className={bgStyle + ' justify-end rounded-e-md pr-4'}>
            <ActionBtns
              id={showedData._id}
              entity={entity}
              handleDelete={handleDeleteClick}
            />
          </div>
        </td>
      )}
    </tr>
  );
};
