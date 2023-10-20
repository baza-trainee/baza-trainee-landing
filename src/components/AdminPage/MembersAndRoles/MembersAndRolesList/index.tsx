import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';

import { TMembersAndRolesListProps } from '../types';

export const MembersAndRolesList = ({
  currLang,
  entity,
  showedData,
  handleDelete,
  selectMember,
  isProjectEditorMode,
}: TMembersAndRolesListProps) => {
  return (
    <table className="w-full table-fixed border-collapse truncate">
      {!isProjectEditorMode ? <ListHeader entity={entity} /> : <thead />}

      {showedData?.length && showedData.length > 0 ? (
        <tbody>
          {showedData.map((item) => (
            <ListRow
              {...{
                currLang,
                entity,
                isProjectEditorMode,
                handleDelete,
                selectMember,
              }}
              key={item._id}
              showedData={item}
            />
          ))}
        </tbody>
      ) : (
        <tbody />
      )}
    </table>
  );
};
