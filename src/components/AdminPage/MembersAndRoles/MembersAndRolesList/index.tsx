import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';
import { TMembersAndRolesListProps } from '../types';

export const MembersAndRolesList = ({
  entity,
  showedData,
  handleDelete,
}: TMembersAndRolesListProps) => {
  return (
    <table className="w-full table-fixed border-collapse text-ellipsis whitespace-nowrap">
      <ListHeader entity={entity} />

      <tbody>
        {showedData?.length > 0 &&
          showedData.map((item) => (
            <ListRow
              entity={entity}
              key={item._id}
              showedData={item}
              handleDelete={handleDelete}
            />
          ))}
      </tbody>
    </table>
  );
};
