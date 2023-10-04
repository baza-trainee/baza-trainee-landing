import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';

import { TMembersAndRolesListProps } from '../types';

export const MembersAndRolesList = ({
  entity,
  showedData,
  handleDelete,
  selectMember,
  isProjectEditorMode,
}: TMembersAndRolesListProps) => {
  return (
    <table className="w-full table-fixed border-collapse truncate">
      {!isProjectEditorMode && <ListHeader entity={entity} />}

      <tbody>
        {showedData?.length &&
          showedData.length > 0 &&
          showedData.map((item) => (
            <ListRow
              isProjectEditorMode
              entity={entity}
              key={item._id}
              showedData={item}
              handleDelete={handleDelete}
              selectMember={selectMember}
            />
          ))}
      </tbody>
    </table>
  );
};
